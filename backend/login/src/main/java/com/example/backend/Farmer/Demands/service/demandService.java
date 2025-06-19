package com.example.backend.Farmer.Demands.service;

import com.example.backend.Farmer.Demands.model.Demand;
import com.example.backend.Farmer.Demands.repository.demandRepository;
import com.example.backend.Farmer.GreenHouse.model.greenhouse;
import com.example.backend.Farmer.GreenHouse.repository.greenhouseRepository;
import com.example.backend.Farmer.farmer.model.farmer;
import com.example.backend.Farmer.farmer.repository.farmerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class demandService {

    @Autowired
    private demandRepository demandRepository;

    @Autowired
    private farmerRepository farmerRepository;

    @Autowired
    private greenhouseRepository greenhouseRepository;

    public List<Demand> getAllDemands(){
        return demandRepository.findAll();
    }

    public Demand getDemand(Long id){
        return demandRepository.findById(id).orElseThrow(() -> new RuntimeException("could not found demand with id: " + id));
    }

    public Demand saveDemand(Demand demand, Long id){
        farmer farmer1 = farmerRepository.findById(id).orElseThrow(() -> new RuntimeException("farmer not found with id: " + id));
        demand.setFarmer(farmer1);
        demand.setCreatedAt(new Date());
        Demand savedDemand = demandRepository.save(demand);

        greenhouse greenhouse1 = new greenhouse();

        greenhouse1.setLocation(savedDemand.getLocation());
        greenhouse1.setOwner(farmer1.getUsername());
        greenhouse1.setFarmer(farmer1);

        greenhouseRepository.save(greenhouse1);

        return savedDemand;
    }


}
