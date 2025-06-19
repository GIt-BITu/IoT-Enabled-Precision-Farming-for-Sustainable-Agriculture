package com.example.backend.Farmer.Complaint.model;

import com.example.backend.Farmer.farmer.model.farmer;
import jakarta.persistence.*;


import java.util.Date;

@Entity
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String type;
    private String description;

    @Column(columnDefinition = "BOOLEAN default false")
    private boolean status;

    private Date createdAt;

    @ManyToOne
    @JoinColumn(name = "farmer_id", referencedColumnName = "id")
    private farmer farmer;

    public Complaint(){}

    public Complaint(String title, String type, String description, boolean status, Date createdAt, farmer farmer) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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

    public farmer getFarmer() {
        return farmer;
    }

    public void setFarmer(farmer farmer) {
        this.farmer = farmer;
    }
}
