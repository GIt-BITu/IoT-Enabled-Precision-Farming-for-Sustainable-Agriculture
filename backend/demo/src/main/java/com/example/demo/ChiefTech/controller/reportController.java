package com.example.demo.ChiefTech.controller;

import com.example.demo.ChiefTech.service.reportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chiefTechnician")
@CrossOrigin(origins = "http://localhost:5173/")
public class reportController {
    @Autowired
    private reportService service;

}
