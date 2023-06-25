package com.studentadd.fullstack.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Classroom")
public class Classroom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ClassID",nullable = false)
    private int classID;
    @Column(name = "ClassName")
    private String className;


    // Student-Class (Many-One)
    @OneToMany(mappedBy = "classroom", cascade = CascadeType.ALL)
    private List<Student> students = new ArrayList<>();

    // Teacher-Class (One-One)
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "teacherID")
    private Teacher teacher;

    // Attendance-Class (One-One)
    @OneToOne(mappedBy = "classroom")
    private Attendence attendence;

    public Classroom() {
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

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Attendence getAttendence() {
        return attendence;
    }

    public void setAttendence(Attendence attendence) {
        this.attendence = attendence;
    }


}