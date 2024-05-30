<?php

namespace ChickenWarehouse\UserBundle\Application\Service\Manager;

use ChickenWarehouse\UserBundle\Domain\Entity\User;


interface AuthTokenManagerInterface
{
    public function postAuthTokens(array $request ): User;
}