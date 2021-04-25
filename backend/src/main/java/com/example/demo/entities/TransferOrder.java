package com.example.demo.entities;

public class TransferOrder {
    private String originWalletId;
    private String destinationWalletId;
    private Double amount;

    public String getOriginWalletId() {
        return originWalletId;
    }

    public void setOriginWalletId(String originWalletId) {
        this.originWalletId = originWalletId;
    }

    public String getDestinationWalletId() {
        return destinationWalletId;
    }

    public void setDestinationWalletId(String destinationWalletId) {
        this.destinationWalletId = destinationWalletId;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
