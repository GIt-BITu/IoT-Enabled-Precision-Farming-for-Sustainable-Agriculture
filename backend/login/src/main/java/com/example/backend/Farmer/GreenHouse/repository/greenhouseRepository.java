package com.example.backend.Farmer.GreenHouse.repository;

import com.example.backend.Farmer.GreenHouse.model.greenhouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface greenhouseRepository extends JpaRepository<greenhouse, Long> {
}
