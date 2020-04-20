<?php

namespace App\Controller;

use App\Entity\ServiceCategory;
use App\Manager\ServiceCategoryManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ServiceCategoryController extends AbstractController
{
    private $serviceCategoryManager;

    public function __construct(ServiceCategoryManager $serviceCategoryManager)
    {
        $this->serviceCategoryManager = $serviceCategoryManager;
    }

    /**
     * @Route(
     *      "/api/service-categories",
     *      name="api_service_category_browse",  
     *      methods={"GET"}
     * )
     */
    public function browse(): Response
    {
        $serviceCategories = $this->serviceCategoryManager->browse();

        $serviceCategories = $this->serviceCategoryManager->serialize($serviceCategories, ['groups' => 'service-categories']);

        return new Response($serviceCategories);
    }

    /** 
     * @Route(
     *      "/api/service-categories/{id}", 
     *      name="api_service_category_read",  
     *      methods={"GET"}, 
     *      requirements={"id"="\d+"}
     * )
     */
    public function read(ServiceCategory $serviceCategory): Response
    {
        $serviceCategory = $this->serviceCategoryManager->serialize($serviceCategory, ['groups' => 'service-categories']);

        return new Response($serviceCategory);
    }

    /**
     * @Route(
     *      "/api/service-categories", 
     *      name="api_service_category_add",  
     *      methods={"POST"}
     * )
     */
    public function add(Request $request): JsonResponse
    {

        $data = $request->getContent();
        $serviceCategory = $this->serviceCategoryManager->create($data);

        return $this->json($serviceCategory, JsonResponse::HTTP_CREATED);
    }

    /**
     * @Route(
     *      "/api/service-categories/{id}",
     *      name="api_service_category_edit",
     *      methods={"PUT"},
     *      requirements={"id"="\d+"}
     * )
     */
    public function edit(Request $request, ServiceCategory $serviceCategory): JsonResponse
    {
        $data = $request->getContent();
        $serviceCategory = $this->serviceCategoryManager->update($serviceCategory, $data);

        return $this->json($serviceCategory);
    }

    /**
     * @Route(
     *     "/api/service-categories/{id}",
     *     name="api_service_category_delete",
     *     methods={"DELETE"},
     *     requirements={"id"="\d+"}
     * )
     * @param int $id
     *
     * @return JsonResponse
     */
    public function delete(ServiceCategory $serviceCategory): JsonResponse
    {
        $this->serviceCategoryManager->delete($serviceCategory);

        return new JsonResponse(
            null,
            JsonResponse::HTTP_NO_CONTENT
        );
    }
}
