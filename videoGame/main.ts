abstract class Item {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {
    energy: number;
    size = 3;

    constructor(name: string, size: number, energy: number) {
        super(name, size);
        this.energy = energy;
    }
}

class Arrow extends Item {
    power: number;
    size = 1;

    constructor(name: string, size: number, power: number) {
        super(name, size);
        this.power = power;
    }
}

class Player {
    name: string;
    lives: number = 3;
    items: Array<Item> = [];
    freeSize: number = 9;

    constructor(name: string) {
        this.name = name;
        this.lives = 3;
        this.items = new Array;
        this.freeSize = 9;
    }

    addItem(item: Item): boolean {

        if (item.size <= this.freeSize) {
            this.items.push(item);
            this.freeSize = this.freeSize - item.size;
            console.log("Félicitation vous êtes l'heureux pocesseur d'un nouveau " + item.name);
            console.log("Les élements présents dans l'inventaire sont : ")
            for (let i = 0; i < this.items.length; i++) {
                let currentElement = this.items[i].name;
                console.log(currentElement)
            }
            return true;
        }
        console.log("Vous n'avez plus de place, faites de la place pour ajouter " + item.name);
        return false;
    }
}

let mario: Player = new Player("Mario")

let greenTp: Teleporter = new Teleporter("Green TP", 5, 2);
let redTp: Teleporter = new Teleporter("Red TP", 5, 2);
let blueTp: Teleporter = new Teleporter("Blue TP", 5, 2);
let greenArrow: Arrow = new Arrow("Green Arrow", 1, 5)
let redArrow: Arrow = new Arrow("Red Arrow", 1, 5)
let blueArrow: Arrow = new Arrow("Blue Arrow", 1, 5)

mario.addItem(greenTp);
mario.addItem(blueTp) 