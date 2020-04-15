<?php
class Client
{
    public $name;
    public $accountNB;

    public function __construct($name, $accountNB)
    {
        $this->name = $name;
        $this->accountNB = $accountNB;
    }

    public function getAccountNb()
    {
        return $this->accountNB;
    }

    public function setName($name)
    {
        $this->name = $name;
        return $this->name;
    }

    public function getName()
    {
        return $this->name;
    }
}

$stephane = new Client("Stéphane", "48468FDE84FA");
$stephane->setName("Nicolas");
echo ($stephane->getName());
