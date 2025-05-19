package com.example.backend.ChiefTech.repository;

import com.example.backend.ChiefTech.model.report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface reportRepository extends JpaRepository<report, Long> {
    @Query("SELECT r FROM report r WHERE r.task.id = :id")
    report findreportByFK(@Param("id") Long id);
}
