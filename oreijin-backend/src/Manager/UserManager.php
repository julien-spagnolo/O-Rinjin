<?php

namespace App\Manager;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class UserManager extends AbstractManager {

    private const IGNORED_ATTRIBUTES = [
        AbstractNormalizer::IGNORED_ATTRIBUTES => [
            'password',
        ]
    ];

    public function browse(): array
    {
        return $this->getRepository()->findAll();
    }

    public function home(): array
    {
        $user = $this->getRepository(User::class)->findAll();
        
        return $this->getRepository()->findBy([], [], 5);
    }

    public function create(string $data)
    {  
        
        return $this->save(new User(), $data, [
            'Default',
            'register',
        ], self::IGNORED_ATTRIBUTES);
        
    }
    public function sendEmail(MailerInterface $mailer)
    {
        $email = (new Email())
            ->from('inscriptionorinjin@gmail.com')
            ->to('hln.david7@gmail.com')
            ->subject('O Rijin : confirmation de votre inscription')
            ->text('Sending emails is fun again!')
            ->html('<p>See Twig integration for better HTML integration!</p>');

        $mailer->send($email);
    }

    public function update(User $user, string $data)
    {
        return $this->save($user, $data, [], self::IGNORED_ATTRIBUTES);
    }

    private function getRepository(): UserRepository
    {
        return $this->entityManager->getRepository(User::class);
    }
}