<?php

namespace App\Controller;

use App\Repository\ServiceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use App\Entity\Service;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ServiceCategoryRepository;

class ServiceController extends AbstractController
{
    /**
     * @Route("/api/services", name="browse2",  methods={"GET"})
     * @param ServiceRepository $serviceRepository
     * @param Serializer $serializer
     * @return void
     */
    public function browse(ServiceRepository $serviceRepository, SerializerInterface $serializer)
    {
        $services = $serviceRepository->findAll();

        $data = $serializer->normalize($services, null, ['groups' => 'services']);

        return $this->json($data);
    }

    /** 
     * @Route("/api/services/{id}", name="read2",  methods={"GET"}, requirements={"id"="\d+"})
     * @param SerializerInterface $serializer
     * @param ServiceRepository $serviceRepository
     * @return void
     */
    public function read(ServiceRepository $serviceRepository, SerializerInterface $serializer, $id = null)
    {
        $services = $serviceRepository->findAll();

        $userServices = [];

        foreach ($services as $service) {
            if ($service->getUser()->getId() == $id) {
                $userServices[] = $service;
            }
        }

        $data = $serializer->normalize($userServices, null, ['groups' => 'service']);

        return $this->json($data);
    }

    /**
     * @Route("/api/services", name="add2",  methods={"POST"})
     * @param ServiceRepository $serviceRepository
     * @param Serializer $serializer
     * @return void
     */
    public function add(Request $request, EntityManagerInterface $em)
    {
        $data = json_decode(
            $request->getContent(),
            true
        );

        $serviceCategory = $em->find('App\Entity\ServiceCategory', $data['service_category_id']);

        $title = $data['title'];
        $body = $data['body'];
        $type = $data['type'];
        $image = $data['image'];

        $service = new Service();
        $service
            ->setUser($this->getUser())
            ->setServiceCategory($serviceCategory)
            ->setTitle($title)
            ->setBody($body)
            ->setType($type)
            ->setImage($image)
            ->setActive(true)
            ->setCreatedAt(new \DateTime('@'.strtotime('now')));

        $em->persist($service);
        $em->flush();
        
        return new JsonResponse(["success" => "Service " . $service->getTitle() . " has been add!"], 200);
    }
}
