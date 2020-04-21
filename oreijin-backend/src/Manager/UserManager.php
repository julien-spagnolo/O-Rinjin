<?php

namespace App\Manager;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

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

    public function update(User $user, string $data)
    {
        return $this->save($user, $data, [], self::IGNORED_ATTRIBUTES);
    }

    private function getRepository(): UserRepository
    {
        return $this->entityManager->getRepository(User::class);
    }
}