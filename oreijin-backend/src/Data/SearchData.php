<?php
namespace App\Data;

use App\Entity\Category;

class SearchData
{

    /**
     * @var int
     */
    public $page = 1;

    /**
     * @var int
     */
    public $limit;

    /**
     * @var null|string
     */
    public $postalCode;

    /**
     * @var null|integer
     */
    public $userId;
}