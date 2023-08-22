package com.studentadd.fullstack.model;


import jakarta.persistence.*;

@Entity
public class Father {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "FatherID")
    private int fatherID;
    @Column(name = "Name")
    private String name;

    @Column(name = "Password")
    private String password;

    @Column(name = "Email")
    private String email;

    @Column(name = "Mobile")
    private String mobile;

    @Column(name = "Job")
    private String job;

    // Father-Student (One-One)
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "studnetID")
    private Student student;

    public Father() {
    }

    public int getFatherID() {
        return fatherID;
    }

    public void setFatherID(int fatherID) {
        this.fatherID = fatherID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
