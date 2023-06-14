package com.spincoders.attendancemanagement.model;
import jakarta.persistence.*;

@Entity
@Table(name = "Admin")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "AdminID", nullable = false)
    private int adminID;

    @Column(name = "Name",nullable = false)
    private String name;

    @Column(name = "Username",nullable = false)
    private String username;

    @Column(name = "Password",nullable = false)
    private String password;

    @Column(name = "Email",nullable = false)
    private String email;

    public Admin() {
    }

    public int getAdminID() {
        return adminID;
    }

    public void setAdminID(int adminID) {
        this.adminID = adminID;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

