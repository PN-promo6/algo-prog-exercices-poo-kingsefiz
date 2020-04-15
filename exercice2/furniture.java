class Playground {
    public static void main(String[ ] args) {
        Furniture wassily = new Furniture ("Knoll", "Marcel Breuer", 1925);
        System.out.print(wassily.editor + " " + wassily.designer + " " + wassily.year);
    }
}

public class Furniture {
    String editor;
    String designer;
    int year;

    public Furniture(String editor, String designer, int year){
      this.editor = editor;
      this.designer = designer;
      this.year = year;
    }
}
