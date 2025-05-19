<<<<<<<< HEAD:backend/login/src/main/java/com/example/backend/GeneralTech/controller/reportController.java
package com.example.demo.GeneralTech.controller;

import com.example.demo.GeneralTech.service.reportService;
========
package com.example.backend.ChiefTech.controller;

import com.example.backend.ChiefTech.service.reportService;
>>>>>>>> origin/master:backend/login/src/main/java/com/example/backend/ChiefTech/controller/reportController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chiefTechnician")
@CrossOrigin(origins = "http://localhost:5173/")
public class reportController {
    @Autowired
    private reportService service;

}
