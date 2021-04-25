package com.example.demo.controllers;

import com.example.demo.db.MemoryDB;
import com.example.demo.entities.TransferOrder;
import com.example.demo.entities.Wallet;
import com.example.demo.exception.WalletNotFoundException;
import com.example.demo.services.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WalletController {
    private MemoryDB db;
    private WalletService service;

    @Autowired
    public WalletController(MemoryDB db, WalletService service) {
        this.db = db;
        this.service = service;
    }

    @GetMapping("/api/wallet")
    @ResponseBody
    public List<Wallet> getWallets() {
        return db.getWallets();
    }

    @GetMapping("/api/wallet/{id}")
    @ResponseBody
    public Wallet getWallet(@PathVariable(value="id") String id) {
        Wallet wallet = db.getWallet(id);

        if (wallet == null) {
            throw new WalletNotFoundException();
        }

        return db.getWallet(id);
    }

    @PostMapping(
            value= "/api/wallet/transfer",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @ResponseBody
    public void transferMoney(@RequestBody TransferOrder transferOrder) {
        service.executeTransferOrder(transferOrder);
    }

}
