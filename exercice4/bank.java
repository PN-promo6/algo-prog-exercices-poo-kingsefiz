class Playground {
    public static void main(String[ ] args) {
        Client stephane = new Client ("Stéphane", "4854FZFAZ546FZ");
        ProClient marie = new ProClient ("Marie", "186DD5978FDZ", "78948923600032");
        stephane.setName("Nicolas");
        System.out.println(stephane.getName());
        System.out.println("Le client " + marie.name + " possède le compte numéro " + marie.accountNB + " et son numéro de SIRET est le : " + marie.siret);
    }
}

public class Client {
    protected String name;
    protected String accountNB;

    public Client(String name, String accountNB){
        this.name = name;
        this.accountNB = accountNB;
    }

    String getAccountNB(){
        return this.accountNB;
    }

    void setName(String name){
      this.name = name;
      return;
    }

    String getName(){
        return this.name;
    }
}

class ProClient extends Client {

  String siret;

  ProClient (String name, String accountNB,String siret) {
    super(name, accountNB);
    this.siret = siret;
  }
}
