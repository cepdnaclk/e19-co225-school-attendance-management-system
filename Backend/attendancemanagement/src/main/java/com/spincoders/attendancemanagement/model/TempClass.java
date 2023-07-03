package com.spincoders.attendancemanagement.model;

import jakarta.persistence.*;

@Entity
@Table(name = "TempClass")
public class TempClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TempClassID",nullable = false)
    private int tempClassID;

    private String teacherEmail;

    private String tempClassName;

    private int studentID;

    public TempClass() {
    }

    public int getTempClassID() {
        return tempClassID;
    }

    public void setTempClassID(int tempClassID) {
        this.tempClassID = tempClassID;
    }

    public String getTeacherEmail() {
        return teacherEmail;
    }

    public void setTeacherEmail(String teacherEmail) {
        this.teacherEmail = teacherEmail;
    }

    public int getStudentID() {
        return studentID;
    }

    public void setStudentID(int studentID) {
        this.studentID = studentID;
    }

    public String getTempClassName() {
        return tempClassName;
    }

    public void setTempClassName(String tempClassName) {
        this.tempClassName = tempClassName;
    }
}
