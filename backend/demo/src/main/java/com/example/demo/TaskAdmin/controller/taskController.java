package com.example.demo.TaskAdmin.controller;

import com.example.demo.TaskAdmin.model.task;
import com.example.demo.TaskAdmin.service.taskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/chiefTechnician")
@CrossOrigin(origins = "http://localhost:5173/")
public class taskController {
    @Autowired
    private taskService service;
    @GetMapping
    public List<task> recentTasks() {
        List<task> allTasks= service.getAllTasks();
        List<task> recentTasks = new ArrayList<>();
        if (allTasks.size()>3) {
            for (int i = 1; i <= 3; i++) {
                recentTasks.add(allTasks.get(allTasks.size() - i));
            }
        }else {
            recentTasks =allTasks;
        }
        return recentTasks;
    }
    @GetMapping("/task/{id}")
    public task task(@RequestParam("id") Long id) {
            return service.getTaskById(id);
    }
}
