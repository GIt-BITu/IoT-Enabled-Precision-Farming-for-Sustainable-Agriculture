package com.example.demo.TaskAdmin.repository;

import com.example.demo.TaskAdmin.model.task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface taskRepository extends JpaRepository<task, Long> {

}
