package com.example.backend.Farmer.GreenHouse.model;

import com.example.backend.Farmer.farmer.model.farmer;
import jakarta.persistence.*;

@Entity
@Table(name = "greenhouse")
public class greenhouse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "location")
    private String location;

    @Column(name="owner")
    private String owner;

    @ManyToOne
    @JoinColumn(name = "id_farmer")
    private farmer farmer;

    public void setId(Long id) {
        this.id = id;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public void setFarmer(farmer farmer) {
        this.farmer = farmer;
    }
    public Long getId() {
        return id;
    }
    public String getLocation() {
        return location;
    }
    public farmer getFarmer() {
        return farmer;
    }

    public String getOwner() {
        return owner;
    }
    public void setOwner(String owner) {
        this.owner = owner;
    }

    public greenhouse() {}

    public greenhouse(String location,String owner) {
        this.location = location;
        this.owner = owner;
    }
}
