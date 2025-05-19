<<<<<<<< HEAD:backend/login/src/main/java/com/example/backend/GeneralTech/repository/deviceRepository.java
package com.example.demo.GeneralTech.repository;

import com.example.demo.GeneralTech.model.devices;
========
package com.example.backend.ChiefTech.repository;

import com.example.backend.ChiefTech.model.devices;
>>>>>>>> origin/master:backend/login/src/main/java/com/example/backend/ChiefTech/repository/deviceRepository.java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface deviceRepository extends JpaRepository<devices,Long> {
}
