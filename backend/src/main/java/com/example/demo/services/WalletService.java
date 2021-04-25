package com.example.demo.services;

import com.example.demo.db.MemoryDB;
import com.example.demo.entities.TransferOrder;
import com.example.demo.entities.Wallet;
import com.example.demo.exception.CircularTransferException;
import com.example.demo.exception.InvalidAmountException;
import com.example.demo.exception.WalletNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WalletService {
    private MemoryDB db;

    @Autowired
    public WalletService(MemoryDB db) {
        this.db = db;
    }

    public void executeTransferOrder(TransferOrder transferOrder) {
        Wallet originWallet = db.getWallet(transferOrder.getOriginWalletId());
        Wallet destinationWallet = db.getWallet(transferOrder.getDestinationWalletId());

        if (originWallet.getId().equals(destinationWallet.getId())) {
            throw new CircularTransferException();
        }

        if (transferOrder.getAmount() <= 0) {
            throw new InvalidAmountException();
        }

        if (originWallet == null || destinationWallet == null) {
            throw new WalletNotFoundException();
        }

        if (originWallet.getAmount() < transferOrder.getAmount()) {
            throw new InvalidAmountException();
        }

        originWallet.setAmount(originWallet.getAmount() - transferOrder.getAmount());
        destinationWallet.setAmount(destinationWallet.getAmount() + transferOrder.getAmount());
    }
}
