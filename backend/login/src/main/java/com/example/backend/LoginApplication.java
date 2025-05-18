package com.example.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {
		"com.example.backend",
		"com.example.backend.reviews",
		"com.example.backend.login",
		"com.example.backend.Farmer",
		"com.example.backend.ChiefTech",
		"com.example.backend.Admin"
})
public class LoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginApplication.class, args);
	}

}
