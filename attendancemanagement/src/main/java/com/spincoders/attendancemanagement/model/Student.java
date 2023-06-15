package com.spincoders.attendancemanagement.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "StudentID")
    private int studnetID;


    // Student-Admin (Many-One)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "AdminID")
    private Admin admin;

    // Student-Teacher (Many-One)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TeacherID")
    private Teacher teacher;

    // Mother-Student (One-One)
    @OneToOne(mappedBy = "student")
    private Mother mother;

    // Father-Student (One-One)
    @OneToOne(mappedBy = "student")
    private Father father;

    // Guardian-Student (One-One)
    @OneToOne(mappedBy = "student")
    private Guardian guardian;

    // Student-Class (Many-One)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "classID")
    private Class aClass;

    // Attendance-Student (One-One)
    @OneToOne(mappedBy = "student")
    private Attendence attendence;

    @Column(name = "Name")
    private String name;

    @Column(name = "Address")
    private String address;

    @Column(name = "Land_Phone")
    private String landPhone;

    @Column(name = "Weight")
    private String weight;

    @Column(name = "Height")
    private String height;

    @Column(name = "Images")
    private String imagelink;

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
        return imagelink;
    }

    public void setImages(String images) {
        this.imagelink = images;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Mother getMother() {
        return mother;
    }

    public void setMother(Mother mother) {
        this.mother = mother;
    }

    public Father getFather() {
        return father;
    }

    public void setFather(Father father) {
        this.father = father;
    }

    public Guardian getGuardian() {
        return guardian;
    }

    public void setGuardian(Guardian guardian) {
        this.guardian = guardian;
    }

    public Class getaClass() {
        return aClass;
    }

    public void setaClass(Class aClass) {
        this.aClass = aClass;
    }

    public String getImagelink() {
        return imagelink;
    }

    public void setImagelink(String imagelink) {
        this.imagelink = imagelink;
    }

    public Attendence getAttendence() {
        return attendence;
    }

    public void setAttendence(Attendence attendence) {
        this.attendence = attendence;
    }
}
