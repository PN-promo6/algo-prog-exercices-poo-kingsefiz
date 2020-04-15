class Playground {
    public static void main(String[ ] args) {
        User mario = new User("Mario", "DeVito", "12-03-1983");
        User luigi = new User ("Luigi", "DeVito");
        System.out.println("Je m'appelle " + mario.firstName + " " + mario.lastName + " et je suis né le " + mario.birthDate);
    }
}

public class User {
    String firstName;
    String lastName;
    String birthDate;

    public User(String firstName, String lastName, String birthDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    public User(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
