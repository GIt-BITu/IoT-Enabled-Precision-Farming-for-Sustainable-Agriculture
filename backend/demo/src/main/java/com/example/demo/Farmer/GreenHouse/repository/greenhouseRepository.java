package com.example.demo.Farmer.GreenHouse.repository;

import com.example.demo.Farmer.GreenHouse.model.greenhouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface greenhouseRepository extends JpaRepository<greenhouse, Long> {
}
