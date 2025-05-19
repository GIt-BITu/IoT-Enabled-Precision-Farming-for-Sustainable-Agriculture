package com.example.backend.ChiefTech.repository;

import com.example.backend.ChiefTech.model.devices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface deviceRepository extends JpaRepository<devices,Long> {
}
