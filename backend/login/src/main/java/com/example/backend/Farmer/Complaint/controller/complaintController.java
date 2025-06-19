package com.example.backend.Farmer.Complaint.controller;

import com.example.backend.Farmer.Complaint.model.Complaint;
import com.example.backend.Farmer.Complaint.service.complaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins =  "http://localhost:5173/")
public class complaintController {

    @Autowired
    private complaintService complaintService;

    @GetMapping("/allComplaint")
    public ResponseEntity<List<Complaint>> getAllComplaint(){
        return ResponseEntity.ok(complaintService.getAllComplaints());
    }

    @PostMapping("/createComplaint/{id}")
    public ResponseEntity<Complaint> createComplaint(@RequestBody Complaint complaint, @PathVariable Long id){
        return ResponseEntity.ok(complaintService.saveComplaint(complaint,id));
    }

    @GetMapping("/complaintDetail/{id}")
    public ResponseEntity<Complaint> getComplaint(@PathVariable Long id){
        return ResponseEntity.ok(complaintService.getComplaint(id));
    }
}
