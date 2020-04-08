class Ticket {
  ticketId: number;
  artist: string;
  price: string = "";
  date: string;
  hour: string;
  location: string;

  constructor(id: number, artist: string, date: string, hour: string, location: string, price?: string) {
    this.ticketId = id;
    this.artist = artist;
    this.date = date;
    this.location = location;
    this.hour = hour;
    if (price) {
      this.price = price;
    }
  }

  ticketInformations(): string {
    let details: string = `
    <p>Nom de l'artiste : ${this.artist}</p>
    <p>Id du billet : ${this.ticketId}</p>
    <p>Date du concert : ${this.date}</p>
    <p>Heure du concert : ${this.hour}</p>
    <p>Lieu du concert : ${this.location}</p>`;
    if (this.price != "") {
      details = details + `<p>Prix du billet : ${this.price}</p>`;
      console.log("Price : " + this.price)
    }
    return (details);
  }
}

let ticketMadonna = new Ticket(1, "Madonna", "22 Février 2019", "20h00", "Le Dome", "95€");
let ticketTheWeeknd = new Ticket(2, "The Weeknd", "15 Novembre", "21h00", "Accor Arena");

console.log(ticketMadonna.ticketInformations())
