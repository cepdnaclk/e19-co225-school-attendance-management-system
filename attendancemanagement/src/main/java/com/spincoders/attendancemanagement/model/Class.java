package com.spincoders.attendancemanagement.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Class")
public class Class {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ClassID",nullable = false)
    private int classID;
    @Column(name = "ClassName",nullable = false)
    private String className;

    @Column(name = "TeacherID")
    //Add the relationship
    private int teacherID;

    public Class() {
    }

    public int getClassID() {
        return classID;
    }

    public void setClassID(int classID) {
        this.classID = classID;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public int getTeacherID() {
        return teacherID;
    }

    public void setTeacherID(int teacherID) {
        this.teacherID = teacherID;
    }
}
