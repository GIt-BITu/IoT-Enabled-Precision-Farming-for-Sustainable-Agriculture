package com.example.backend.Admin.model;
import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
@Table(name = "admin")
public class admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name = "name")
    private String name;
    @Column(name= "username")
    private String username;
    @Column(name="email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name="Region")
    private String region;
    @Column(name = "dateOfBirth")
    private String dateOfBirth;
    @Column(name = "ProfilePic")
    private String profilePic;


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getUsername() {
        return username;
    }


    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getRegion() {
        return region;
    }
    public void setRegion(String region) {
        this.region = region;
    }
    public String getDateOfBirth() {
        return dateOfBirth;
    }
    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    public String getProfilePic() {
        return profilePic;
    }
    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }
    public admin() {}
    public admin(String name, String username, String email, String password, String region, String dateOfBirth, String profilePic) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.region = region;
        this.dateOfBirth = dateOfBirth;
        this.profilePic = profilePic;
    }
}
