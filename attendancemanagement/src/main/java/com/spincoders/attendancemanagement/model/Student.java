package com.spincoders.attendancemanagement.model;

import jakarta.persistence.*;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "StudentID")
    private int studnetID;

    // TO DO: Include the reationship type
    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "address_id", referencedColumnName = "id")
    private int adminID;

    @Column(name = "ClassID",nullable = true)
    private int classID;

    @Column(name = "Name")
    private String name;

    @Column(name = "Address")
    private String address;

    @Column(name = "Father_Name")
    private String fatherName;

    @Column(name = "Father_Mobile")
    private String fatherMobile;

    @Column(name = "Father_Job")
    private String fatherJob;

    @Column(name = "Father_Email")
    private String fatherEmail;

    @Column(name = "Mother_Name")
    private String motherName;

    @Column(name = "Mother_Mobile")
    private String motherMobile;

    @Column(name = "Mother_Job")
    private String motherJob;

    @Column(name = "Guardian_Name")
    private String guardianName;

    @Column(name = "Guardian_Mobile")
    private String guardianMobile;

    @Column(name = "Guardian_Job")
    private String guardianJob;

    @Column(name = "Guardian_Email")
    private String guardianEmail;

    @Column(name = "Land_Phone")
    private String landPhone;

    @Column(name = "Weight")
    private String weight;

    @Column(name = "Height")
    private String height;

    @Column(name = "Images")
    private String images;

    public Student() {
    }

    public int getId() {
        return studnetID;
    }

    public void setId(int id) {
        this.studnetID = id;
    }

    public int getStudnetID() {
        return studnetID;
    }

    public void setStudnetID(int studnetID) {
        this.studnetID = studnetID;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getFatherMobile() {
        return fatherMobile;
    }

    public void setFatherMobile(String fatherMobile) {
        this.fatherMobile = fatherMobile;
    }

    public String getFatherJob() {
        return fatherJob;
    }

    public void setFatherJob(String fatherJob) {
        this.fatherJob = fatherJob;
    }

    public String getFatherEmail() {
        return fatherEmail;
    }

    public void setFatherEmail(String fatherEmail) {
        this.fatherEmail = fatherEmail;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getMotherMobile() {
        return motherMobile;
    }

    public void setMotherMobile(String motherMobile) {
        this.motherMobile = motherMobile;
    }

    public String getMotherJob() {
        return motherJob;
    }

    public void setMotherJob(String motherJob) {
        this.motherJob = motherJob;
    }

    public String getGuardianName() {
        return guardianName;
    }

    public void setGuardianName(String guardianName) {
        this.guardianName = guardianName;
    }

    public String getGuardianMobile() {
        return guardianMobile;
    }

    public void setGuardianMobile(String guardianMobile) {
        this.guardianMobile = guardianMobile;
    }

    public String getGuardianJob() {
        return guardianJob;
    }

    public void setGuardianJob(String guardianJob) {
        this.guardianJob = guardianJob;
    }

    public String getGuardianEmail() {
        return guardianEmail;
    }

    public void setGuardianEmail(String guardianEmail) {
        this.guardianEmail = guardianEmail;
    }

    public String getLandPhone() {
        return landPhone;
    }

    public void setLandPhone(String landPhone) {
        this.landPhone = landPhone;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }
}
