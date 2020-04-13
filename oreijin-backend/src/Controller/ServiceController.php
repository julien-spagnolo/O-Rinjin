<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ServiceRepository;
use Symfony\Component\Serializer\SerializerInterface;


class ServiceController extends AbstractController
{
    /**
     * @Route("/services", name="services")
     */
    public function browseServices(ServiceRepository $ServiceRepository, SerializerInterface $serializer)
    {
        $services = $ServiceRepository->findAll();

        $data = $serializer->normalize($services, null, ['groups' => 'service']);

        echo("texte");
        var_dump($data);

        return $this->json($data);
        }
}
