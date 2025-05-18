package com.example.demo.ChiefTech.repository;

import com.example.demo.ChiefTech.model.task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface taskRepository extends JpaRepository<task, Long> {

}
