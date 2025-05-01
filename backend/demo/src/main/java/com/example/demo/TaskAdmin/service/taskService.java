package com.example.demo.TaskAdmin.service;

import com.example.demo.TaskAdmin.model.task;
import com.example.demo.TaskAdmin.repository.taskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class taskService {
    @Autowired
    private taskRepository taskRepository;

    public List<task> getAllTasks() {
        return taskRepository.findAll();
    }

    public void saveStudent(task task){
        taskRepository.save(task);
    }

    public task getTaskById(Long id){
        return taskRepository.findById(id).orElse(null);
    }

    public void deleteStudent(Long id){
        taskRepository.deleteById(id);
    }
}
