<?php
class Student
{
    // Properties
    public $firstName;
    public $lastName;
    public $birthDate;

    // Methods
    public function __construct($fname, $lname, $birthDate = "")
    {
        $this->firstName = $fname;
        $this->lastName = $lname;
        if ($birthDate) {
            $this->birthDate = $birthDate;
        }
    }

    public function displayInformation()
    {
        if (!isset($this->birthDate)) {
            echo ("Je m'appelle " . $this->firstName . " " . $this->lastName);
        } else {
            echo ("Je m'appelle " . $this->firstName . " " . $this->lastName . " je suis né le " . $this->birthDate);
        }
    }
}

$seif = new Student("Seif", "Beloucif", "13 mai");

$seif->displayInformation();
