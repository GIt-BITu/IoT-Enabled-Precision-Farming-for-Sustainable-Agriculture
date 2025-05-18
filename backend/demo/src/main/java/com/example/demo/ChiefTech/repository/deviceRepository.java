package com.example.demo.ChiefTech.repository;

import com.example.demo.ChiefTech.model.devices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface deviceRepository extends JpaRepository<devices,Long> {
}
