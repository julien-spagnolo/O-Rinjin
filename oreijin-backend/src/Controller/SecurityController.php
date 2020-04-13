<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/api", name="security_")
 */
class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="login")
     */
    public function login(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $em = $this->getDoctrine()->getManager();

        $email = $request->request->get('email');
        $password = $request->request->get('password');

        $userEmail = new User($email);
        $userEmail->setPassword($encoder->encodePassword($userEmail, $password));
        $em->persist($userEmail);
        $em->flush();

        return new Response(sprintf('User %s successfully created', $userEmail->getEmail()));
    }

    // /**
    //  * @param Request $request
    //  * @param UserPasswordEncoderInterface $encoder
    //  * @Route("/users", name="register")
    //  */
    // public function register(Request $request, UserPasswordEncoderInterface $encoder)
    // {
    //     $em = $this->getDoctrine()->getManager();

    //     $username = $request->request->get('email');
    //     $password = $request->request->get('password');

    //     $user = new User($username);
    //     $user->setPassword($encoder->encodePassword($user, $password));
    //     $em->persist($user);
    //     $em->flush();

    //     return new Response(sprintf('User %s successfully created', $user->getUsername()));
    // }

    // public function api()
    // {
    //     return new Response(sprintf('Logged in as %s', $this->getUser()->getUsername()));
    // }
}
