package com.example.demo.db;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Wallet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.Arrays.asList;

@Service
public class MemoryDB {
    private List<Customer> customers;
    private List<Wallet> wallets;

    @Autowired
    public MemoryDB() {}

    public void setInitialDB() {
        Customer cust1 = new Customer(1, "Jack", "Adams", "jack.adams@gmail.com");
        Customer cust2 = new Customer(2, "Rose", "Pattinson", "rose.pattinson@gmail.com");
        Customer cust3 = new Customer(3, "Roger", "O'leary", "roget.oleary@gmail.com");

        Wallet wallet1 = new Wallet("ED5C26076CB170553B36A824C163B8B9BFA1135D5655CF61DC36397F59CAB201", 3321.09, 1);
        Wallet wallet2 = new Wallet("6FF52EF30472CAE0B2B3978BB2027D0C3E4F2CF2F21CFEE6F3843BF2EB7001E9", 321.0, 1);
        Wallet wallet3 = new Wallet("55821EEFAA01FEC7D8C4CB12730BE01AEFA2B43A1488850CC3F7BBCCA817CDE6", 600.50, 2);
        Wallet wallet4 = new Wallet("6659580F851AB4E37EE37883237AC002B065DB844A991898E6C7E38B3C56A729", 6900.0, 2);
        Wallet wallet5 = new Wallet("A04F989016E94B21FB862F3963C6A8078639ED0A17EB6F4B516CBCDCD8CDF3C6", 0.0, 3);

        setCustomers(asList(cust1, cust2, cust3));
        setWallets(asList(wallet1, wallet2, wallet3, wallet4, wallet5));
    }

    public List<Customer> getCustomers() {
        return customers;
    }

    public Customer getCustomer(int id) {
        return customers.stream().filter(customer -> customer.getId() == id).findFirst().orElse(null);
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }

    public List<Wallet> getWallets() {
        return wallets;
    }

    public void setWallets(List<Wallet> wallets) {
        this.wallets = wallets;
    }

    public Wallet getWallet(String id) {
        return wallets.stream().filter(wallet -> wallet.getId().equals(id)).findFirst().orElse(null);
    }

    public List<Wallet> getAllCustomerWallets(int id) {
        return wallets.stream().filter(wallet -> wallet.getCustomerId() == id).collect(Collectors.toList());
    }
}
