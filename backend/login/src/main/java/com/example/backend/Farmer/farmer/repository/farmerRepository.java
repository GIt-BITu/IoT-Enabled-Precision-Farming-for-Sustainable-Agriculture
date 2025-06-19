package com.example.backend.Farmer.farmer.repository;

import com.example.backend.Farmer.farmer.model.farmer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface farmerRepository extends JpaRepository<farmer, Long> {
}