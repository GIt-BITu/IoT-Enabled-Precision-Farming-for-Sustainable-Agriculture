<<<<<<<< HEAD:backend/login/src/main/java/com/example/backend/GeneralTech/model/report.java
package com.example.demo.GeneralTech.model;
========
package com.example.backend.ChiefTech.model;
>>>>>>>> origin/master:backend/login/src/main/java/com/example/backend/ChiefTech/model/report.java

import jakarta.persistence.*;

@Entity
@Table(name="reports")
public class report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name="description")
    private String description;

    @OneToOne
    @JoinColumn(name = "id_task",referencedColumnName = "id")
    private task task;

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
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public task getTask() {
        return task;
    }
    public void setTask(task task) {
        this.task = task;
    }

    public report() {}
    public report(String title, String description, task task) {
        this.title = title;
        this.description = description;
        this.task = task;
    }
}
