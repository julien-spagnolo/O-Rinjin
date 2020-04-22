<?php

namespace App\Controller;

use App\Entity\Service;
use App\Manager\ServiceManager;
use App\Security\Voter\ServiceVoter;
use App\Security\Voter\UserVoter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ServiceController extends AbstractController
{
    private $userManager;

    public function __construct(ServiceManager $serviceManager)
    {
        $this->serviceManager = $serviceManager;
    }

    /**
     * @Route(
     *      "/api/services/home",
     *      name="api_service_browse_home",  
     *      methods={"GET"}
     * )
     */
    public function home(): Response
    {
        $services = $this->serviceManager->home();

        $services = $this->serviceManager->serialize($services, ['groups' => 'services-list']);

        return new Response($services);
    }

    /**
     * @Route(
     *      "/api/services/user/{userId}",
     *      name="api_service_browse_user",  
     *      methods={"GET"}, 
     *      requirements={"id"="\d+"}
     * )
     */
    public function allServicesByUser($userId): Response
    {
        $services = $this->serviceManager->servicesByUser($userId);
        $services = $this->serviceManager->serialize($services, ['groups' => 'services-list']);

        return new Response($services);
    }

    /**
     * @Route(
     *      "/api/services",
     *      name="api_service_browse",  
     *      methods={"GET"}
     * )
     */
    public function browse(): Response
    {
        $services = $this->serviceManager->browse();

        $services = $this->serviceManager->serialize($services, ['groups' => 'services-browse']);

        return new Response($services);
    }

    /** 
     * @Route(
     *      "/api/services/{id}", 
     *      name="api_service_read",  
     *      methods={"GET"}, 
     *      requirements={"id"="\d+"}
     * )
     */
    public function read(Service $service): Response
    {
        $service = $this->serviceManager->serialize($service, ['groups' => 'services-read']);

        return new Response($service);
    }

    /**
     * @Route(
     *      "/api/services", 
     *      name="api_service_add",  
     *      methods={"POST"}
     * )
     */
    public function add(Request $request): Response
    {
        $data = $request->getContent();

        $service = $this->serviceManager->create($data);
        $service = $this->serviceManager->serialize($service, ['groups' => 'service-add']);

        return new Response($service, Response::HTTP_CREATED);
    }

    /**
     * @Route(
     *      "/api/services/{id}",
     *      name="api_service_edit",
     *      methods={"PUT"},
     *      requirements={"id"="\d+"}
     * )
     */
    public function edit(Request $request, Service $service): Response
    {
        $this->denyAccessUnlessGranted(UserVoter::SAME_USER, $service);

        $data = $request->getContent();
        $service = $this->serviceManager->update($service, $data);
        $service = $this->serviceManager->serialize($service, ['groups' => 'service-edit']);

        return new Response($service);
    }

    /**
     * @Route(
     *     "/api/services/{id}",
     *     name="api_service_delete",
     *     methods={"DELETE"},
     *     requirements={"id"="\d+"}
     * )
     * @param int $id
     *
     * @return JsonResponse
     */
    public function delete(Service $service): JsonResponse
    {
        $this->denyAccessUnlessGranted(UserVoter::SAME_USER, $service);

        $this->serviceManager->delete($service);

        return new JsonResponse(
            null,
            JsonResponse::HTTP_NO_CONTENT
        );
    }
}
