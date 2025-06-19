package com.example.backend.GeneralTech.repository;

import com.example.backend.GeneralTech.model.data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface dataRepository extends JpaRepository<data,Long> {
    @Query("SELECT d FROM data d WHERE d.device.greenhouse.id = :greenhouseId")
    List<data> findByGreenhouseId(@Param("greenhouseId") Long greenhouseId);
}
