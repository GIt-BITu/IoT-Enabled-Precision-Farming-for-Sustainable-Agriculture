package com.example.demo.TaskAdmin.controller;

import com.example.demo.TaskAdmin.model.report;
import com.example.demo.TaskAdmin.model.task;
import com.example.demo.TaskAdmin.service.reportService;
import com.example.demo.TaskAdmin.service.taskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class taskController {
    @Autowired
    private taskService service;
    @Autowired
    private reportService reportSer;
    @GetMapping("/chiefTechnician")
    public List<task> allTasks() {
         return  service.getAllTasks();
    }
    @GetMapping("/task/{id}")
    public task task(@PathVariable Long id) {
            return service.getTaskById(id);
    }

    @PostMapping("/task/{id}")
    public ResponseEntity<task> updateTask(@PathVariable Long id, @RequestBody Map<String,String> value) {
            task task = service.updateTaskStatusAndProgress(id, value.get("status"),value.get("progress_status"));
            return ResponseEntity.ok(task);

    }
    @GetMapping("/PendingTasks")
    public List<task> pendingTasks() {
        return service.getAllTasks();
    }
    @GetMapping("/updateTask/{id}")
    public task updateStatus(@PathVariable Long id) {
        return service.getTaskById(id);
    }
    @PostMapping("/updateTask/{id}")
    public ResponseEntity<Map<String,Object>> updateTaskStatus(@PathVariable Long id , @RequestBody  Map<String,String> value)  {
        task task = service.update(id,value.get("progress_status"));
        report report=reportSer.createReport(id,value.get("title"),value.get("description"));

        Map<String,Object> map=new HashMap<>();
        map.put("report",report);
        map.put("task",task);
        return ResponseEntity.ok(map);
    }

    @GetMapping("/Completed-Tasks")
    public List<task> completedTasks() {
        return service.getAllTasks();
    }
    @GetMapping("/report/{id}")
    public report report(@PathVariable Long id) {
        return reportSer.getReport(id);
    }

}
