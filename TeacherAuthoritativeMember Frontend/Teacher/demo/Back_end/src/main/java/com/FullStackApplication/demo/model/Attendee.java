package com.FullStackApplication.demo.model;



import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;

// To mark attendance and sent emails
@Entity
public class Attendee {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //private String Attendeename;
    private String name;
    private String email;
    @Column(columnDefinition = "varchar(255) default 'Absent'")
    private String markAttendance; // New attribute
    //@Temporal(TemporalType.DATE)
    @CreationTimestamp
    private Date timestamp;

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

//    public String getAttendeename() {
//        return Attendeename;
//    }
//
//    public void setAttendeename(String Attendeename) {
//        this.Attendeename = Attendeename;
//    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMarkAttendance() { // Getter for new attribute
        return markAttendance;
    }

    public void setMarkAttendance(String markattendance) { // Setter for new attribute
        this.markAttendance = markattendance;
    }
}