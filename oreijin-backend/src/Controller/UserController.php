<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     * @Route("/register", name="auth_register",  methods={"POST"})
     * @param Request $request
     * @param UserManagerInterface $userManager
     * @return JsonResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function register(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $encoder)
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
        $encoded = $encoder->encodePassword($user, $plainPassword);
        $user
            ->setEmail($email)
            ->setPassword($encoded)
            ->setRoles(['USER'])
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

        return new JsonResponse(["success" => $user->getFirstName() . " has been registered!"], 200);
    }
}
