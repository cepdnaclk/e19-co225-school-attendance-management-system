package com.spincoders.attendancemanagement.model;
import jakarta.persistence.*;

@Entity
@Table(name = "Attendence")
public class Attendence {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "AttendenceID")
    private int attendenceID;

    @Column(name = "Year")
    private int year;

    @Column(name = "Month")
    private int month;

    @Column(name = "Date")
    private int date;

    @Column(name = "Presence")
    private boolean presence;

    @Column(name = "Note")
    private String note;

    // Attendance-Student (One-One)
/*    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "studnetID")
    private Student student;*/

 /*  // Attendance-Class (One-One)
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "classID")
    private Classroom classroom;*/

    private int studentID;
    private int classID;

    public Attendence() {
    }

    public int getAttendenceID() {
        return attendenceID;
    }

    public void setAttendenceID(int attendenceID) {
        this.attendenceID = attendenceID;
    }


    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getDate() {
        return date;
    }

    public void setDate(int date) {
        this.date = date;
    }

    public boolean isPresence() {
        return presence;
    }

    public void setPresence(boolean presence) {
        this.presence = presence;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getStudentID() {
        return studentID;
    }

    public void setStudentID(int studentID) {
        this.studentID = studentID;
    }

    public int getClassID() {
        return classID;
    }

    public void setClassID(int classID) {
        this.classID = classID;
    }
}
