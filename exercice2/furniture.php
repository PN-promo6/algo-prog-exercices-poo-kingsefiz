<?php
class Furniture
{
    // Properties
    public $editor;
    public $designer;
    public $year;

    // Methods
    public function __construct($editor, $designer, $year)
    {
        $this->editor = $editor;
        $this->designer = $designer;
        $this->year = $year;
    }
}

$wassily = new Furniture("Knoll", "Marcel Breuer", 1925);
print_r($wassily);

$wassily->year = 1926;
echo($wassily->year. " " .$wassily->designer . " " . $wassily->editor);
