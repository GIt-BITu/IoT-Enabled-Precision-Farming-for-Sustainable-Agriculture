package com.example.backend.Farmer.Evaluation.model;

import com.example.backend.Farmer.farmer.model.farmer;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Evaluation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "INT default 0")
    private int starNumber;

    private String description;
    private Date createdAt;

    @ManyToOne
    @JoinColumn(name = "farmer_Id", referencedColumnName = "id")
    private farmer farmer;

    public Evaluation(){}

    public Evaluation(int starNumber, String description, Date createdAt, farmer farmer) {
        this.starNumber = starNumber;
        this.description = description;
        this.createdAt = createdAt;
        this.farmer = farmer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getStarNumber() {
        return starNumber;
    }

    public void setStarNumber(int starNumber) {
        this.starNumber = starNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
