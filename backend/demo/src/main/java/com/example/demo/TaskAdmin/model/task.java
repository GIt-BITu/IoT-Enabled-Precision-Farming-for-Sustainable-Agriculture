package com.example.demo.TaskAdmin.model;

import com.example.demo.Admin.model.admin;
import jakarta.persistence.*;

import java.lang.String;


@Entity
@Table(name= "Tasks")
public class task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name = "description")
    private String description;
    @Column(name = "title")
    private String title;
    @Column(name = "date")
    private String date;
    @Column(name = "location")
    private String location;

    @ManyToOne
    @JoinColumn(name = "idAdmin" ,referencedColumnName = "id")
    private admin chief;


    public task() {}
    public task(Long id, String description, String title, String date, String location, admin chief) {
        this.id = id;
        this.description = description;
        this.title = title;
        this.date = date;
        this.location = location;
        this.chief = chief;
    }
    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDate() {
        return date;
    }
    public void setString(String date) {
        this.date = date;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public admin getChief() {
        return chief;
    }
    public void setChief(admin chief) {
        this.chief = chief;
    }

}
