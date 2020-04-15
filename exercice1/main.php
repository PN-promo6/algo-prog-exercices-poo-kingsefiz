<?php

class Book
{
    public $name;
    public $price;

    function __construct($name, $price)
    {
        $this->name = $name;
        $this->price = $price;
    }
}

$martine = new Book("Martine à la plage", 5);
echo "Le livre $martine->name coute $martine->price euros";
