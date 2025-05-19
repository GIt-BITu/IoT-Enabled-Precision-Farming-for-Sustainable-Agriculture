<<<<<<<< HEAD:backend/login/src/main/java/com/example/backend/GeneralTech/repository/reportRepository.java
package com.example.demo.GeneralTech.repository;

import com.example.demo.GeneralTech.model.report;
========
package com.example.backend.ChiefTech.repository;

import com.example.backend.ChiefTech.model.report;
>>>>>>>> origin/master:backend/login/src/main/java/com/example/backend/ChiefTech/repository/reportRepository.java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface reportRepository extends JpaRepository<report, Long> {
    @Query("SELECT r FROM report r WHERE r.task.id = :id")
    report findreportByFK(@Param("id") Long id);
}
