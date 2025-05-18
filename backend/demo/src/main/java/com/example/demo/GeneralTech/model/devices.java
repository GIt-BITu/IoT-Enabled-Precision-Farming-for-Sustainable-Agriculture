package com.example.demo.GeneralTech.model;

import com.example.demo.Farmer.GreenHouse.model.greenhouse;
import jakarta.persistence.*;

@Entity
@Table(name = "devices")
public class devices {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "type")
    private String type;
    @Column(name = "role")
    private String role;
    @Column(name ="status",columnDefinition = "BOOLEAN default false")
    private Boolean status;

    @ManyToOne
    @JoinColumn(name = "id_greenhouse")
    private greenhouse greenhouse;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public Boolean getStatus() {
        return status;
    }
    public void setStatus(Boolean status) {
        this.status = status;
    }
    public greenhouse getGreenhouse() {
        return greenhouse;
    }
    public void setGreenhouse(greenhouse greenhouse) {
        this.greenhouse = greenhouse;
    }
    public devices(){}
    public devices(String type, String role,boolean status, greenhouse greenhouse) {
        this.type = type;
        this.role = role;
        this.status = status;
        this.greenhouse = greenhouse;
    }
}
