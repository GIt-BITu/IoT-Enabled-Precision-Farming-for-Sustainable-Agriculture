package com.example.backend.GeneralTech.repository;

import com.example.backend.GeneralTech.model.devices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface deviceRepository extends JpaRepository<devices,Long> {
}
