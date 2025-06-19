package com.example.backend.Farmer.Complaint.repository;

import com.example.backend.Farmer.Complaint.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface complaintRepository extends JpaRepository<Complaint, Long> {
}
