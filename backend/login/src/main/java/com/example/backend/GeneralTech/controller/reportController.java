package com.example.backend.GeneralTech.controller;

import com.example.backend.GeneralTech.service.reportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chiefTechnician")
@CrossOrigin(origins = "http://localhost:5173/")
public class reportController {
    @Autowired
    private reportService service;

}
