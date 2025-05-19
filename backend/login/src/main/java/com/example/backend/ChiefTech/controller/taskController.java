<<<<<<<< HEAD:backend/login/src/main/java/com/example/backend/GeneralTech/controller/taskController.java
package com.example.demo.GeneralTech.controller;

import com.example.demo.GeneralTech.DTO.connection;
import com.example.demo.GeneralTech.model.devices;
import com.example.demo.GeneralTech.model.report;
import com.example.demo.GeneralTech.model.task;
import com.example.demo.GeneralTech.service.deviceService;
import com.example.demo.GeneralTech.service.reportService;
import com.example.demo.GeneralTech.service.taskService;
import com.example.demo.Farmer.GreenHouse.model.greenhouse;
import com.example.demo.Farmer.GreenHouse.service.greenhouseService;
========
package com.example.backend.ChiefTech.controller;

import com.example.backend.ChiefTech.DTO.connection;
import com.example.backend.ChiefTech.model.devices;
import com.example.backend.ChiefTech.model.report;
import com.example.backend.ChiefTech.model.task;
import com.example.backend.ChiefTech.service.deviceService;
import com.example.backend.ChiefTech.service.reportService;
import com.example.backend.ChiefTech.service.taskService;
import com.example.backend.Farmer.GreenHouse.model.greenhouse;
import com.example.backend.Farmer.GreenHouse.service.greenhouseService;
>>>>>>>> origin/master:backend/login/src/main/java/com/example/backend/ChiefTech/controller/taskController.java
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
    @Autowired
     private greenhouseService greenSer;
    @Autowired
     private deviceService deviceSer;

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
    @GetMapping("/configuration")
    public List<greenhouse> configuration() {
        return greenSer.getAllGreenhouse();
    }
    @GetMapping("/configuration/{id}")
    public List<devices> AllDevices() {
        return deviceSer.getAllDevices() ;
    }

    @PostMapping("/configuration/{id}")
    public ResponseEntity<devices> updateConfiguration(@PathVariable Long id, @RequestBody connection value) {
        devices device =deviceSer.linkDevice(id,value.getId(),value.isStatus());
        return ResponseEntity.ok(device);
    }

    @GetMapping("/Technician")
    public List<greenhouse> technician() {
        return greenSer.getAllGreenhouse();
    }

    @GetMapping("/Technician/{id}")
    public List<devices> AvailableDev(){
        return deviceSer.getAllDevices() ;
    }

    @PostMapping("/Technician/{id}")
    public ResponseEntity<devices> configGreenhouse(@PathVariable Long id, @RequestBody connection value) {

        devices device= deviceSer.linkDevice(id,value.getId(),value.isStatus());
        return ResponseEntity.ok(device);
    }
}
