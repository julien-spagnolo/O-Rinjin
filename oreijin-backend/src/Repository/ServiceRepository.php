<?php

namespace App\Repository;

use App\Data\SearchData;
use App\Entity\Service;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @method Service|null find($id, $lockMode = null, $lockVersion = null)
 * @method Service|null findOneBy(array $criteria, array $orderBy = null)
 * @method Service[]    findAll()
 * @method Service[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ServiceRepository extends ServiceEntityRepository
{
    private $paginator;

    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        parent::__construct($registry, Service::class);
        $this->paginator = $paginator;
    }


    public function findSearch(SearchData $search): object
    {
        dd($search);
        $query = $this
            ->createQueryBuilder('s')
            ->join('s.user', 'u')
            ->orderBy('s.createdAt', 'DESC');

        if (!empty($search->postalCode)) {
            $query = $query
                ->andWhere('u.postalCode = :postalCode')
                ->setParameter('postalCode', $search->postalCode);
        }

        if (!empty($search->userId)) {
            $query = $query
                ->andWhere('u.id = :id')
                ->setParameter('id', $search->userId);
        }
        // dd($this->paginator->paginate(
        //     $query,
        //     $search->page,
        //     $search->limit
        // ));
        return $this->paginator->paginate(
            $query,
            $search->page,
            $search->limit
        );
    }



    // public function findByPostalCode($postalCode)
    // {
    //     return $this->createQueryBuilder('s')
    //         ->join('s.user', 'u')
    //         ->where('u.postalCode = :postalCode')
    //         ->setParameter('postalCode', $postalCode)
    //         ->orderBy('s.createdAt', 'DESC')
    //         ->getQuery()
    //         ->getResult();
    // }

    /*
    public function findOneBySomeField($value): ?Service
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
