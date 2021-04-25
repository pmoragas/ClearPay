package com.example.demo.entities;

public class Wallet {
    private String id;
    private Double amount;
    private int customerId;

    public Wallet(String id, Double amount, int customerId) {
        this.id = id;
        this.amount = amount;
        this.customerId = customerId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }
}
