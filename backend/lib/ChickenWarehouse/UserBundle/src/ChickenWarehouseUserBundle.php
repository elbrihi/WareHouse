<?php
namespace ChickenWarehouse\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;
use ChickenWarehouse\UserBundle\Infrastructure\Symfony\DependencyInjection\ChickenWarehouseUserExtension;

class ChickenWarehouseUserBundle extends Bundle
{
    public function getContainerExtension(): ?ExtensionInterface
    {
        return new ChickenWarehouseUserExtension();
    }
}