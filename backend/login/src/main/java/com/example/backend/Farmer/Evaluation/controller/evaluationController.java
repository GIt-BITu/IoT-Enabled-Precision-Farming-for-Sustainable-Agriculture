package com.example.backend.Farmer.Evaluation.controller;

import com.example.backend.Farmer.Evaluation.model.Evaluation;
import com.example.backend.Farmer.Evaluation.service.evaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins =  "http://localhost:5173/")
public class evaluationController {

    @Autowired
    private evaluationService evaluationService;

    @PostMapping("/createEvaluation/{id}")
    public ResponseEntity<Evaluation> createEvaluation(@RequestBody Evaluation evaluation, @PathVariable Long id){
        return ResponseEntity.ok(evaluationService.saveEvaluation(evaluation, id));
    }
}
