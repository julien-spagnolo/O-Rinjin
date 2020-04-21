<?php

namespace App\Controller;

use App\Entity\User;
use App\Manager\UserManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class UserController extends AbstractController
{
    private $userManager;

    public function __construct(UserManager $userManager)
    {
        $this->userManager = $userManager;
    }

    /**
     * @Route(
     *      "/api/users",
     *      name="api_user_browse",  
     *      methods={"GET"}
     * )
     */
    public function browse(): Response
    {
        $users = $this->userManager->browse();

        $users = $this->userManager->serialize($users, ['groups' => 'users-list']);

        return new Response($users);
    }

        /**
     * @Route(
     *      "/api/users/home",
     *      name="api_user_browse_home",  
     *      methods={"GET"}
     * )
     */
    public function home(): Response
    {
        $users = $this->userManager->home();

        $users = $this->userManager->serialize($users, ['groups' => 'users-list']);

        return new Response($users);
    }

    /** 
     * @Route(
     *      "/api/users/{id}", 
     *      name="api_user_read",  
     *      methods={"GET"}, 
     *      requirements={"id"="\d+"}
     * )
     */
    public function read(User $user): Response
    {
        $user = $this->userManager->serialize($user, ['groups' => 'user-read']);

        return new Response($user);
    }

    /**
     * @Route(
     *      "/register", 
     *      name="api_user_add",  
     *      methods={"POST"}
     * )
     */
    public function add(Request $request): Response
    {
        $data = $request->getContent();
        $user = $this->userManager->create($data);
        $user = $this->userManager->serialize($user, ['groups' => 'user-add']);

        return new Response($user, Response::HTTP_CREATED);
    }

    /**
     * @Route(
     *      "/api/users/{id}",
     *      name="api_user_edit",
     *      methods={"PUT"},
     *      requirements={"id"="\d+"}
     * )
     */
    public function edit(Request $request, User $user): Response
    {
        $data = $request->getContent();
        $user = $this->userManager->update($user, $data);

        $user = $this->userManager->serialize($user, ['groups' => 'user-edit']);

        return new Response($user);
    }

    /**
     * @Route(
     *     "/api/users/{id}",
     *     name="api_user_delete",
     *     methods={"DELETE"},
     *     requirements={"id"="\d+"}
     * )
     * @param int $id
     *
     * @return JsonResponse
     */
    public function delete(User $user): JsonResponse
    {
        $this->userManager->delete($user);

        return new JsonResponse(
            null,
            JsonResponse::HTTP_NO_CONTENT
        );
    }
}
