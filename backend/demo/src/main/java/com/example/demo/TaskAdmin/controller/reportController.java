package com.example.demo.TaskAdmin.controller;

import com.example.demo.TaskAdmin.model.report;
import com.example.demo.TaskAdmin.service.reportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chiefTechnician")
@CrossOrigin(origins = "http://localhost:5173/")
public class reportController {
    @Autowired
    private reportService service;

}
