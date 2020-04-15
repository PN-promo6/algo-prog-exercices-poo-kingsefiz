class User {
  firstName: string;
  lastName: string;
  birthDate: string;

  constructor(firstName: string, lastName: string, birthDate?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (birthDate) {
      this.birthDate = birthDate;
    }
  }

  displayInformation() {
    if (!this.birthDate) {
      console.log("Je m'appelle " + this.firstName + " " + this.lastName)
    } else {
      console.log("Je m'appelle " + this.firstName + " " + this.lastName + " je suis né le " + this.birthDate);
    }
  }
}

let mario: User = new User("Mario", "DeVito");

mario.displayInformation();
