package com.example.demo.controllers;

import com.example.demo.db.MemoryDB;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Wallet;
import com.example.demo.exception.CustomerNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {
    private MemoryDB db;

    @Autowired
    public CustomerController(MemoryDB db) {
        this.db = db;
    }

    @GetMapping("/api/customer")
    @ResponseBody
    public List<Customer> getCustomers() {
        return db.getCustomers();
    }

    @GetMapping("/api/customer/{id}")
    @ResponseBody
    public Customer getCustomer(@PathVariable(value="id") int id) {
        Customer customer = db.getCustomer(id);

        if (customer == null) {
            throw new CustomerNotFoundException();
        }

        return customer;
    }

    @GetMapping("/api/customer/{id}/wallet")
    @ResponseBody
    public List<Wallet> getCustomerWallets(@PathVariable(value="id") int id) {
        Customer customer = db.getCustomer(id);

        if (customer == null) {
            throw new CustomerNotFoundException();
        }

        return db.getAllCustomerWallets(id);
    }
}
