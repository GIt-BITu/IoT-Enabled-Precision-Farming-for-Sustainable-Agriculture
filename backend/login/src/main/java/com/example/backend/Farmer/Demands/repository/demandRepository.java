package com.example.backend.Farmer.Demands.repository;

import com.example.backend.Farmer.Demands.model.Demand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface demandRepository extends JpaRepository<Demand, Long> {
}
