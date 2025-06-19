package com.example.backend.Farmer.Evaluation.service;

import com.example.backend.Farmer.Evaluation.model.Evaluation;
import com.example.backend.Farmer.Evaluation.repository.evaluationRepository;
import com.example.backend.Farmer.farmer.model.farmer;
import com.example.backend.Farmer.farmer.repository.farmerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class evaluationService {

    @Autowired
    private evaluationRepository evaluationRepository;

    @Autowired
    private farmerRepository farmerRepository;

    public Evaluation saveEvaluation(Evaluation evaluation, Long id){
        farmer farmerr = farmerRepository.findById(id).orElseThrow(() -> new RuntimeException("farmer not found with id: " + id));
        evaluation.setFarmer(farmerr);
        evaluation.setCreatedAt(new Date());

        return evaluationRepository.save(evaluation);
    }
}
