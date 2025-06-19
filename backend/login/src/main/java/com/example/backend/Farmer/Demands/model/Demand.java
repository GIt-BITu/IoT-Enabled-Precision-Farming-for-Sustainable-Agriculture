package com.example.backend.Farmer.Demands.model;

import com.example.backend.Farmer.farmer.model.farmer;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Demand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String location;
    private String description;

    @Column(columnDefinition = "BOOLEAN default false")
    private boolean status;

    private Date createdAt;

    //Sensors
    private boolean tempSensor;
    private boolean irrigationSensor;
    private boolean lightSensor;

    //Actuators
    private boolean tempActuator;
    private boolean irrigationActuator;
    private boolean lightActuator;

    @ManyToOne
    @JoinColumn(name = "farmerId", referencedColumnName = "id")
    private farmer farmer;

    public Demand(){}

    public Demand(String title, String location, String description, boolean status, Date createdAt, boolean tempSensor, boolean irrigationSensor, boolean lightSensor, boolean tempActuator, boolean irrigationActuator, boolean lightActuator, farmer farmer) {
        this.title = title;
        this.location = location;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        this.tempSensor = tempSensor;
        this.irrigationSensor = irrigationSensor;
        this.lightSensor = lightSensor;
        this.tempActuator = tempActuator;
        this.irrigationActuator = irrigationActuator;
        this.lightActuator = lightActuator;
        this.farmer = farmer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public boolean isTempSensor() {
        return tempSensor;
    }

    public void setTempSensor(boolean tempSensor) {
        this.tempSensor = tempSensor;
    }

    public boolean isIrrigationSensor() {
        return irrigationSensor;
    }

    public void setIrrigationSensor(boolean irrigationSensor) {
        this.irrigationSensor = irrigationSensor;
    }

    public boolean isLightSensor() {
        return lightSensor;
    }

    public void setLightSensor(boolean lightSensor) {
        this.lightSensor = lightSensor;
    }

    public boolean isTempActuator() {
        return tempActuator;
    }

    public void setTempActuator(boolean tempActuator) {
        this.tempActuator = tempActuator;
    }

    public boolean isIrrigationActuator() {
        return irrigationActuator;
    }

    public void setIrrigationActuator(boolean irrigationActuator) {
        this.irrigationActuator = irrigationActuator;
    }

    public boolean isLightActuator() {
        return lightActuator;
    }

    public void setLightActuator(boolean lightActuator) {
        this.lightActuator = lightActuator;
    }

    public farmer getFarmer() {
        return farmer;
    }

    public void setFarmer(farmer farmer) {
        this.farmer = farmer;
    }
}
