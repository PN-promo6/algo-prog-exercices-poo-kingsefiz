<?php
class Ticket
{
    public $id;
    public $artist;
    public $date;
    public $hour;
    public $location;
    public $price;

    public function __construct($id, $artist, $date, $hour, $location, $price="")
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
        //  =
        $details = "Nom de l'artiste : " . $this->artist . ", id du billet : " . $this->id . ", date du concert : " . $this->date .
        ", heure du concert : " . $this->hour . ", lieu du concert : " . $this->location;

        if ($this->price != "") {
            $details = $details . ", prix du billet : " . $this->price;
        }
        return $details;
    }
}

$ticketMadonna = new Ticket(1, "Madonna", "25 Mars 2020", "20H00", "Marseille", "25€");
$ticketTheWeeknd = new Ticket(2, "Michael Jackson", "25 Mars 2020", "20H00", "Paris");

echo($ticketMadonna->ticketInformations());
