class Client {
  public name: string;
  public accountNb: string;

  public constructor(name: string, accountNb: string) {
    this.name = name;
    this.accountNb = accountNb;
  }

  public getAccountNb(): string {
    return this.accountNb;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

class ProClient extends Client {

  siret: string;

  constructor(name: string, accountNb: string, siret: string) {
    super(name, accountNb);
    this.siret = siret;
  }

}

let marie: ProClient = new ProClient("Marie", "186DD5978FDZ", "789 489 236 00032")

let stephane: Client = new Client("Stéphane", "14DFG78FAF78");
console.log(stephane.getAccountNb());

stephane.setName("Nicolas");
console.log(stephane.getName());

console.log(marie.getName())
