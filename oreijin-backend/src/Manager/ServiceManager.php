<?php

namespace App\Manager;

use App\Data\SearchData;
use App\Entity\Service;
use App\Repository\ServiceRepository;
use Symfony\Component\HttpFoundation\Request;

class ServiceManager extends AbstractManager
{
    public function home(): array
    {
        return $this->getRepository()->findBy([], ['createdAt' => 'desc'], 3);
    }

    public function servicesByUser($userId): array
    {
        return $this->getRepository()->findBy(['user' => $userId], ['createdAt' => 'desc']);
    }

    public function searchByFilters(Request $request): object
    {
        
        $search = new SearchData();
        $datas = $request->query->all();
        
        $newSearch = (object) $datas;
        // dd($newSearch);

        // dd($data);
        return $this->getRepository()->findSearch($newSearch);

        // $sort = $request->query->get('sort');
        // $direction = $request->query->get('direction');

        // $request->query->remove('sort');
        // $request->query->remove('direction');

        // $filters = $request->query->all();

        // return $this->getRepository()->getByFilters($filters, $sort, $direction);
    }

    public function create(string $data)
    {
        return $this->save(new Service(), $data, []);
    }

    public function update(Service $service, string $data)
    {
        return $this->save($service, $data, []);
    }

    private function getRepository(): ServiceRepository
    {
        return $this->entityManager->getRepository(Service::class);
    }
}
