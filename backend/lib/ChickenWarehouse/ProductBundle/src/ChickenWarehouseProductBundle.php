<?php
namespace ChickenWarehouse\ProductBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;
//use ChickenWarehouse\UserBundle\Infrastructure\Symfony\DependencyInjection\ChickenWarehouseUserExtension;

class ChickenWarehouseProductBundle extends Bundle
{
   
    public function getContainerExtension(): ?ExtensionInterface
    {
        return new ChickenWarehouseUserExtension();
    }
}