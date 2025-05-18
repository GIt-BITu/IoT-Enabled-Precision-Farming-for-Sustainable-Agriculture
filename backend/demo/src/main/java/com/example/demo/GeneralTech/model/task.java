package com.example.demo.GeneralTech.model;

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
    @Column(name = "status",columnDefinition = " VARCHAR(255) default 'not accepted'")
    private String status ;

    @Column(name = "ProgressStatus",columnDefinition = "VARCHAR(255) default 'Pending' ")
    private String Progress_status;

    @ManyToOne
    @JoinColumn(name = "idAdmin" ,referencedColumnName = "id")
    private admin chief;


    public task() {}
    public task(Long id, String description, String title, String date, String location, admin chief,String status, String Progress_status) {
        this.id = id;
        this.description = description;
        this.title = title;
        this.date = date;
        this.location = location;
        this.chief = chief;
        this.status = status;
        this.Progress_status = Progress_status;
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

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getProgress_status() {
        return Progress_status;
    }
    public void setProgress_status(String progress_status) {
        this.Progress_status = progress_status;
    }
}
