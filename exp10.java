abstract class BankAccount {

    protected double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    abstract void calculateInterest();

    public void display() {
        System.out.println("Balance = " + balance);
    }
}

class SavingsAccount extends BankAccount {

    public SavingsAccount(double balance) {
        super(balance);
    }

    @Override
    void calculateInterest() {
        System.out.println("Savings Interest = " + (balance * 0.05));
    }
}

class CurrentAccount extends BankAccount {

    public CurrentAccount(double balance) {
        super(balance);
    }

    @Override
    void calculateInterest() {
        System.out.println("Current Interest = " + (balance * 0.02));
    }
}

public class exp10 {

    public static void main(String[] args) {

        SavingsAccount s = new SavingsAccount(50000);

        s.deposit(5000);
        s.display();
        s.calculateInterest();

        System.out.println();

        CurrentAccount c = new CurrentAccount(40000);

        c.deposit(2000);
        c.display();
        c.calculateInterest();
    }
}
