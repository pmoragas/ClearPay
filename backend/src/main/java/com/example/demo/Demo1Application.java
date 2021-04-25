package com.example.demo;

import com.example.demo.db.MemoryDB;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Demo1Application {
    private MemoryDB db;

    public Demo1Application(MemoryDB db) {
        this.db = db;
        this.db.setInitialDB();
    }

    public static void main(String[] args) {
        SpringApplication.run(Demo1Application.class, args);
    }
}
