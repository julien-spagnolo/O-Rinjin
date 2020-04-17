<?php

namespace App\Manager;

use App\Entity\Service;

class ServiceManager extends AbstractManager {

    public function create(string $data)
    {
        return $this->save(new Service(), $data);
    }

    public function update(Service $service, string $data)
    {
        return $this->save($service, $data);
    }
}