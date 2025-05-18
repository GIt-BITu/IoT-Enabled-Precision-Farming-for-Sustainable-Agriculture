package com.example.demo.Farmer.GreenHouse.service;

import com.example.demo.Farmer.GreenHouse.model.greenhouse;
import com.example.demo.Farmer.GreenHouse.repository.greenhouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class greenhouseService {
    @Autowired
    private greenhouseRepository repo;

    public List<greenhouse> getAllGreenhouse() {
        return repo.findAll();
    }
    public greenhouse getGreenhouseById(Long id) {
        return repo.findById(id).orElse(null);
    }
}
