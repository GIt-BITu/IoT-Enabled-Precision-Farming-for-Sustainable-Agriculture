package com.example.backend.Farmer.GreenHouse.controller;

import com.example.backend.Farmer.GreenHouse.model.greenhouse;
import com.example.backend.Farmer.GreenHouse.service.greenhouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class greenhouseController {

    @Autowired
    private greenhouseService greenhouseService;

    @GetMapping("/AllGreenhouse")
    public List<greenhouse> getAllGreenhouse() {
        return greenhouseService.getAllGreenhouse();
    }
}