<?php
class Ticket
{
    public $id;
    public $artist;
    public $date;
    public $hour;
    public $location;
    public $price;

    public function __construct($id, $artist, $date, $hour, $location, $price = "")
    {
        $this->id = $id;
        $this->artist = $artist;
        $this->date = $date;
        $this->hour = $hour;
        $this->location = $location;
        if ($price) {
            $this->price = $price;
        }
    }

    public function ticketInformations()
    {
        $details = "
        <p>Nom de l'artiste : $this->artist</p>
        <p>Id du billet : $this->id</p>
        <p>Date du concert : $this->date</p>
        <p>Heure du concert : $this->hour</p>
        <p>Lieu du concert : $this->location</p>";
        if (!is_null($this->price)) {
            $details = $details . "<p>Prix du billet : $this->price</p>";
            echo("Price : " . $this->price);
        }
        return ($details);
    }
}

$ticketMadonna = new Ticket(1, "Madonna", "25 Mars 2020", "20H00", "Marseille", "25 €");
$ticketMichael = new Ticket(2, "Michael Jackson", "25 Mars 2020", "20H00", "Paris");

echo($ticketMadonna->ticketInformations());
