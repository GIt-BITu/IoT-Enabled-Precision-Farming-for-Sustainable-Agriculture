package com.example.backend.GeneralTech.repository;

import com.example.backend.GeneralTech.model.task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface taskRepository extends JpaRepository<task, Long> {

}
