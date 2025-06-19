package com.example.backend.GeneralTech.service;

import com.example.backend.GeneralTech.model.data;
import com.example.backend.GeneralTech.model.devices;
import com.example.backend.GeneralTech.repository.dataRepository;
import com.example.backend.GeneralTech.repository.deviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class dataService {
    @Autowired
    private dataRepository repository;

    @Autowired
    private deviceRepository devRep;

    public List<data> findAll() {
        return repository.findAll();
    }

    public data putData(float donne,Long id) {
        devices devices = devRep.getReferenceById(id);
        Date current=new Date();
        data info=new data();
        info.setDate(current);
        info.setData(donne);
        info.setDevice(devices);
        return   repository.save(info);

    }

    public List<data> getData(Long id){
        return repository.findByGreenhouseId(id);
    }



}