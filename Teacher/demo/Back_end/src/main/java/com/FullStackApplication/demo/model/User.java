//package com.FullStackApplication.demo.model;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//
//import java.sql.Date;
//
//// To mark attendance and sent emails
//@Entity
//public class User {
//    @Id
//    //@GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    //private String username;
//    private String name;
//    private String email;
//    private String markAttendance; // New attribute
//    private Date timestamp;
//
//    public Date getTimestamp() {
//        return timestamp;
//    }
//
//    public void setTimestamp(Date timestamp) {
//        this.timestamp = timestamp;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
////    public String getUsername() {
////        return username;
////    }
////
////    public void setUsername(String username) {
////        this.username = username;
////    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getMarkAttendance() { // Getter for new attribute
//        return markAttendance;
//    }
//
//    public void setMarkAttendance(String markattendance) { // Setter for new attribute
//        this.markAttendance = markattendance;
//    }
//}