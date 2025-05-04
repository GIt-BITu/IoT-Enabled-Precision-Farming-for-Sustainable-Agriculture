package com.example.demo.TaskAdmin.controller;

import com.example.demo.TaskAdmin.model.task;
import com.example.demo.TaskAdmin.service.taskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/chiefTechnician")
@CrossOrigin(origins = "http://localhost:5173/")
public class taskController {
    @Autowired
    private taskService service;
    @GetMapping
    public List<task> allTasks() {
         return  service.getAllTasks();
    }
    @GetMapping("/task/{id}")
    public task task(@PathVariable Long id) {
            return service.getTaskById(id);
    }

    @PostMapping("/task/{id}")
    public ResponseEntity<task> updateTask(@PathVariable Long id, @RequestBody Map<String,String> value) {
            task task = service.updateTask(id, value.get("status"));
           return ResponseEntity.ok(task);
    }
    @GetMapping("/PendingTasks")
    public List<task> pendingTasks() {
        return service.getAllTasks();
    }
}
