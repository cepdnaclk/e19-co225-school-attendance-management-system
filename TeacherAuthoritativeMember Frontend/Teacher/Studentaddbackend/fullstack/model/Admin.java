<<<<<<< Updated upstream
package com.studentadd.fullstack.model;


import jakarta.persistence.*;
import java.util.*;

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

    @Column(name = "Role")
    private String role;

    // Student-Admin (Many-One)
    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL)
    private List<Student> students = new ArrayList<>();

    // Teacher-Admin (Many-One)
    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL)
    private List<Teacher> teachers = new ArrayList<>();

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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public List<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<Teacher> teachers) {
        this.teachers = teachers;
    }
}
=======
package com.studentadd.fullstack.model;


import jakarta.persistence.*;
import java.util.*;

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

    @Column(name = "Role")
    private String role;

    // Student-Admin (Many-One)
    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL)
    private List<Student> students = new ArrayList<>();

    // Teacher-Admin (Many-One)
    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL)
    private List<Teacher> teachers = new ArrayList<>();

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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public List<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<Teacher> teachers) {
        this.teachers = teachers;
    }
}
>>>>>>> Stashed changes
