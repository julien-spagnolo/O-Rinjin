<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api", name="api_user_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/users", name="browse",  methods={"GET"})
     * @param UserRepository $userRepository
     * @param Serializer $serializer
     * @return void
     */
    public function browse(UserRepository $userRepository, SerializerInterface $serializer)
    {
        $users = $userRepository->findAll();

        $data = $serializer->normalize($users, null, ['groups' => 'users-list']);

        return $this->json($data);
    }

      /*  
     * @Route("/users/{id}", name="read",  methods={"GET"}, requirements={"id"="\d+"})
     * @param SerializerInterface $serializer
     * @param UserRepository $userRepository
     * @return void
     */
    public function read(UserRepository $userRepository, SerializerInterface $serializer, $id = null)
    {
        $user = $userRepository->find($id);

        $data = $serializer->normalize($user, null, ['groups' => 'user-profile']);

        return $this->json($data);
    }

    /**
     * @Route("/register", name="register",  methods={"POST"})
     * @param Request $request
     * @param UserManagerInterface $userManager
     * @return JsonResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function create(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $encoder)
    {
        $data = json_decode(
            $request->getContent(),
            true
        );

        $plainPassword = $data['password'];
        $email = $data['email'];
        $firstName = $data['firstname'];
        $lastName = $data['lastname'];
        $address = $data['address'];
        $postalCode = $data['postalcode'];
        $city = $data['city'];
        $latitude = $data['latitude'];
        $longitude = $data['longitude'];
        $birthDate = $data['birthdate'];
        $avatar = $data['avatar'];

        $user = new User();
        $role = $user->getRoles();
        $encoded = $encoder->encodePassword($user, $plainPassword);
        $user
            ->setEmail($email)
            ->setPassword($encoded)
            ->setRoles($role)
            ->setFirstName($firstName)
            ->setLastName($lastName)
            ->setAddress($address)
            ->setPostalCode($postalCode)
            ->setCity($city)
            ->setLatitude($latitude)
            ->setLongitude($longitude)
            ->setBirthDate(new \DateTime($birthDate))
            ->setAvatar($avatar);

        $em->persist($user);
        $em->flush();

        return new JsonResponse(["success" => $user->getFirstName() . " has been registered!"], Response::HTTP_CREATED);
    }
}
