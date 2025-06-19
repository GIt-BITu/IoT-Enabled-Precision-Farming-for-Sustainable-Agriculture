package com.example.backend.Farmer.Evaluation.repository;

import com.example.backend.Farmer.Evaluation.model.Evaluation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface evaluationRepository extends JpaRepository<Evaluation, Long> {
}
