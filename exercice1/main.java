class Playground {
    public static void main(String[ ] args) {
        Book martine = new Book ("Martine à la plage",5);
        System.out.println("Le livre " + martine.name + " coute " + martine.price + " euros");
    }
}

public class Book{
  String name;
  int price;

    public  Book (String name, int price){
    this.name = name;
    this.price = price;
  }
}
