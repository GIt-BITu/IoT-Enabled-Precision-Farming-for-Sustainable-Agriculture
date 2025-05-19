<<<<<<<< HEAD:backend/login/src/main/java/com/example/backend/GeneralTech/service/deviceService.java
package com.example.demo.GeneralTech.service;

import com.example.demo.GeneralTech.model.devices;
import com.example.demo.GeneralTech.repository.deviceRepository;
import com.example.demo.Farmer.GreenHouse.model.greenhouse;
import com.example.demo.Farmer.GreenHouse.repository.greenhouseRepository;
========
package com.example.backend.ChiefTech.service;

import com.example.backend.ChiefTech.model.devices;
import com.example.backend.ChiefTech.repository.deviceRepository;
import com.example.backend.Farmer.GreenHouse.model.greenhouse;
import com.example.backend.Farmer.GreenHouse.repository.greenhouseRepository;
>>>>>>>> origin/master:backend/login/src/main/java/com/example/backend/ChiefTech/service/deviceService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class deviceService {
    @Autowired
    private deviceRepository repository;
    @Autowired
    private greenhouseRepository greenHouseRepository;

    public devices getDevice(Long id) {
        return repository.findById(id).orElse(null);
    }

    public devices linkDevice(Long id1, Long id2, boolean status) {
        greenhouse greenhouse = greenHouseRepository.getReferenceById(id1);
        devices devices = repository.findById(id2).orElse(null);;
        devices.setStatus(status);
        devices.setGreenhouse(greenhouse);
        return repository.save(devices);
    }
    public List<devices> getAllDevices() {
        return repository.findAll();
    }

}
