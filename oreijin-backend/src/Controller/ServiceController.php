<?php

namespace App\Controller;

use App\Repository\ServiceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ServiceController extends AbstractController
{
    /**
     * @Route("/api/services", name="services",  methods={"GET"})
     */
    public function browse(ServiceRepository $ServiceRepository, SerializerInterface $serializer)
    {
        $services = $ServiceRepository->findAll();

        $data = $serializer->normalize($services, null, ['groups' => 'services']);

        return $this->json($data);
        }
}
