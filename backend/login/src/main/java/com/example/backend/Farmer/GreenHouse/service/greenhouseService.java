package com.example.backend.Farmer.GreenHouse.service;

import com.example.backend.Farmer.GreenHouse.model.greenhouse;
import com.example.backend.Farmer.GreenHouse.repository.greenhouseRepository;
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
