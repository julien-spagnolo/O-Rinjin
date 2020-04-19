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
     *      name="browse_user",  
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
     *      "/api/users/{id}", 
     *      name="read_user",  
     *      methods={"GET"}, 
     *      requirements={"id"="\d+"}
     * )
     */
    public function read(User $user): Response
    {
        // $user = $userRepository->find($id);
        // $data = $serializer->normalize($user, null, ['groups' => 'user-profile']);

        $user = $this->userManager->serialize($user, ['groups' => 'user-profile']);

        return new Response($user);
    }

    /**
     * @Route(
     *      "/register", 
     *      name="register_user",  
     *      methods={"POST"}
     * )
     */
    public function add(Request $request): JsonResponse
    {

        $data = $request->getContent();
        $user = $this->userManager->create($data);

        return $this->json($user, JsonResponse::HTTP_CREATED);
    }

    /**
     * @Route(
     *      "/api/users/{id}",
     *      name="edit_user",
     *      methods={"PUT"},
     *      requirements={"id"="\d+"}
     * )
     */
    public function edit(Request $request, User $user): JsonResponse
    {
        $data = $request->getContent();
        $user = $this->userManager->update($user, $data);

        return $this->json($user);
    }

    /**
     * @Route(
     *     "/api/users/{id}",
     *     name="delete_user",
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
