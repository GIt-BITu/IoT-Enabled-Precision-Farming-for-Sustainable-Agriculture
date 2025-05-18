package com.example.demo.GeneralTech.repository;

import com.example.demo.GeneralTech.model.task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface taskRepository extends JpaRepository<task, Long> {

}
