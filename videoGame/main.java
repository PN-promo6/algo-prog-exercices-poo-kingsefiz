import java.util.ArrayList;
import java.util.ListIterator;


abstract class Item {
    String name;
    int size;

    Item (String name,int size) {
        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {
    int energy;
    int size = 3;

    Teleporter (String name, int size, int energy) {
        super(name, size);
        this.energy = energy;
    }
}

class Arrow extends Item {
    int power;
    int size = 1;

    Arrow (String name, int size, int number) {
        super(name, size);
        this.power = power;
    }
}

class Player {
    String name;
    int lives = 3;
    ArrayList<Item> items;
    int inventorySize = 9;

    Player (String name) {
        this.name = name;
        this.lives = 3;
        this.items = new ArrayList<Item>();
        this.inventorySize = 9;
    }

    boolean addItem(Item item) {
        if (item.size <= this.inventorySize) {
            this.items.add(item);
            this.inventorySize = this.inventorySize - item.size;
            System.out.println("Félicitation vous êtes l'heureux pocesseur d'un nouveau " + item.name);
            System.out.println("Votre inventaire contient : ");
            ListIterator<Item> iterator = items.listIterator();
            while (iterator.hasNext()){
                String currentItem = (iterator.next().name);
                System.out.println(currentItem);
            }
            return true;
        } 
        
        System.out.println("Vous n'avez plus de place, faites de la place pour ajouter " + item.name);
        return false;
    }
}

class Playground {
    public static void main(String[ ] args) {
        Player mario = new Player("Mario");
        Teleporter greenTp  = new Teleporter("Green TP", 5, 2);
        Teleporter redTp = new Teleporter("Red TP", 5, 2);
        Teleporter blueTp = new Teleporter("Blue TP", 5, 2);
        Arrow greenArrow = new Arrow("Green Arrow", 1, 5);
        Arrow redArrow = new Arrow("Red Arrow", 1, 5);
        Arrow blueArrow = new Arrow("Blue Arrow", 1, 5);
        mario.addItem(greenTp);
        mario.addItem(greenArrow);

    }
}