<?php

namespace ChickenWarehouse\UserBundle\Infrastructure\Persistence\Doctrine\Repository;

use ChickenWarehouse\UserBundle\Domain\Entity\AuthToken;

interface AuthTokenRepositoryInterface
{
    public function findAuthTokenByValue(string $value): ?AuthToken;
}
