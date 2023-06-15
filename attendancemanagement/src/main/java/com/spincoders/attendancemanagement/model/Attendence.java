package com.spincoders.attendancemanagement.model;
import jakarta.persistence.*;

@Entity
@Table(name = "Attendence")
public class Attendence {

    @Id
    @Column(name = "Year")
    private int year;

    @Id
    @Column(name = "Month")
    private int month;

    @Id
    @Column(name = "Date")
    private int date;

    @Column(name = "Presence")
    private boolean presence;

    @Column(name = "Note")
    private String note;

    // Attendance-Student (One-One)
    @Id
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "studnetID")
    private Student student;

   // Attendance-Class (One-One)
    @Id
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "classID")
    private Class aClass;

    public Attendence() {
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

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Class getaClass() {
        return aClass;
    }

    public void setaClass(Class aClass) {
        this.aClass = aClass;
    }
}
