package com.example.backend.ChiefTech.repository;

import com.example.backend.ChiefTech.model.task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface taskRepository extends JpaRepository<task, Long> {

}
