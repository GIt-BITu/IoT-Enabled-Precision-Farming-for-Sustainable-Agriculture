package com.example.backend.GeneralTech.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="data")
public class data {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "data")
    private float data;
    @Column(name = "date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "id_device")
    devices device;


    public data( float data, Date date, devices device) {
        this.data = data;
        this.date = date;
        this.device = device;
    }
    public data() {}

    public Long getId() {
        return id;
    }

    public float getData() {
        return data;
    }

    public Date getDate() {
        return date;
    }

    public devices getDevice() {
        return device;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setData(float data) {
        this.data = data;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setDevice(devices device) {
        this.device = device;
    }
}
