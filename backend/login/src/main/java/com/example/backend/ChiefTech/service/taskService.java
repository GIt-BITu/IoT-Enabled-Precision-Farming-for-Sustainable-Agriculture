<<<<<<<< HEAD:backend/login/src/main/java/com/example/backend/GeneralTech/service/taskService.java
package com.example.demo.GeneralTech.service;

import com.example.demo.GeneralTech.model.task;
import com.example.demo.GeneralTech.repository.taskRepository;
========
package com.example.backend.ChiefTech.service;

import com.example.backend.ChiefTech.model.task;
import com.example.backend.ChiefTech.repository.taskRepository;
>>>>>>>> origin/master:backend/login/src/main/java/com/example/backend/ChiefTech/service/taskService.java
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

    public task updateTaskStatusAndProgress(Long id, String value, String value1){
        task task=getTaskById(id);
        task.setStatus(value);
        task.setProgress_status(value1);
        return taskRepository.save(task);
    }
    public task update(Long id,String value){
        task task=getTaskById(id);
        task.setProgress_status(value);
        return taskRepository.save(task);
    }


}
