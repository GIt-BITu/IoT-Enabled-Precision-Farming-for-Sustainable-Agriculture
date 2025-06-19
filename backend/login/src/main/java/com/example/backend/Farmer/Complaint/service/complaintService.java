package com.example.backend.Farmer.Complaint.service;

import com.example.backend.Farmer.Complaint.model.Complaint;
import com.example.backend.Farmer.Complaint.repository.complaintRepository;
import com.example.backend.Farmer.farmer.model.farmer;
import com.example.backend.Farmer.farmer.repository.farmerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class complaintService {
    @Autowired
    private complaintRepository complaintRepository;

    @Autowired
    private farmerRepository farmerRepository;

    public List<Complaint> getAllComplaints(){
        return complaintRepository.findAll();
    }

    public Complaint getComplaint(Long id){
        return complaintRepository.findById(id).orElseThrow(() -> new RuntimeException("could not found complaint with id: " + id));
    }

    public Complaint saveComplaint(Complaint complaint, Long id){
        farmer farmerr = farmerRepository.findById(id).orElseThrow(() -> new RuntimeException("farmer not found with id: " + id));
        complaint.setFarmer(farmerr);
        complaint.setCreatedAt(new Date());
        return complaintRepository.save(complaint);
    }




}
