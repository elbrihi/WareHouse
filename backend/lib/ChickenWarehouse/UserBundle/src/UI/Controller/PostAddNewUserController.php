<?php
namespace ChickenWarehouse\UserBundle\UI\Controller;



use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



final class PostAddNewUserController extends AbstractController
{
    

    public function __invoke(Request $request)
    {

        dd($this->getUser());

    }
}