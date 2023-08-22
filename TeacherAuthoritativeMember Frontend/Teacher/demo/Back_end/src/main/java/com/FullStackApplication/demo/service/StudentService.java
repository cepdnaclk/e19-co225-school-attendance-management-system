//package com.FullStackApplication.demo.service;
//
//// StudentService.java
//
//import com.FullStackApplication.demo.model.User;
//import com.FullStackApplication.demo.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class StudentService {
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private Mailservice mailService;
//
//    public List<User> getAllStudents(){
//        return userRepository.findAll();
//    }
//
//    public List<User> getStudentsByPresentOrAbsentState(String markAttendance) {
//        return userRepository.findBymarkAttendance(markAttendance);
//    }
//
//    public void sendEmailsToUsers(){
//        List<User> user_absent = getStudentsByPresentOrAbsentState("absent");
//        List<User> user_present = getStudentsByPresentOrAbsentState("present");
//
//        for (User user : user_absent) {
//            String emailText = "Dear " + user.getUsername() + ",\n\n";
//            emailText += "You are marked as absent today.";
//
//            mailService.sendMail(user.getEmail(), "Attendance Status", emailText);
//        }
//
//        for (User user : user_present) {
//            String emailText = "Dear " + user.getUsername() + ",\n\n";
//            emailText += "You are marked as present today.";
//
//            mailService.sendMail(user.getEmail(), "Attendance Status", emailText);
//        }
//
//    }
//}
