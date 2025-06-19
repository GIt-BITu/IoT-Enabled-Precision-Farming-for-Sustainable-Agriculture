package com.example.backend.Farmer.Demands.controller;

import com.example.backend.Farmer.Demands.model.Demand;
import com.example.backend.Farmer.Demands.service.demandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins =  "http://localhost:5173/")
public class demandController {

    @Autowired
    private demandService demandService;

    @GetMapping("/allDemands")
    public ResponseEntity<List<Demand>> getAllDemands(){
        return ResponseEntity.ok(demandService.getAllDemands());
    }

    @PostMapping("/createDemand/{id}")
    public ResponseEntity<Demand> createDemand(@RequestBody Demand demand, @PathVariable Long id){
        return ResponseEntity.ok(demandService.saveDemand(demand,id));
    }

    @GetMapping("/demandDetail/{id}")
    public ResponseEntity<Demand> getDemand(@PathVariable Long id){
        return ResponseEntity.ok(demandService.getDemand(id));
    }
}
