<<<<<<<< HEAD:backend/login/src/main/java/com/example/backend/GeneralTech/repository/taskRepository.java
package com.example.demo.GeneralTech.repository;

import com.example.demo.GeneralTech.model.task;
========
package com.example.backend.ChiefTech.repository;

import com.example.backend.ChiefTech.model.task;
>>>>>>>> origin/master:backend/login/src/main/java/com/example/backend/ChiefTech/repository/taskRepository.java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface taskRepository extends JpaRepository<task, Long> {

}
