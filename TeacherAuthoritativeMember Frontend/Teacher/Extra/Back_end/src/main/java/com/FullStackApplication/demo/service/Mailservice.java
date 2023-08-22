package com.FullStackApplication.demo.service;

import com.FullStackApplication.demo.model.User;
import com.FullStackApplication.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Mailservice {
    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private UserRepository userRepository;

//    public void sendMailToAll() {
//        List<User> users = userRepository.findAll();
//
//        for(User user: users){
//            String to = user.getEmail();
//            String subject = "Daily attendance";
//            String text = user.getName()+" is "+ user.getMarkAttendance() + " " + user.getTimestamp();
//
//            SimpleMailMessage message = new SimpleMailMessage();
//            message.setFrom("testprojectspringboot@gmail.com");
//            message.setTo(to);
//            message.setSubject(subject);
//            message.setText(text);
//
//            mailSender.send(message);
//        }
//
//        System.out.println("Mail sent successfully to all records");
//    }
//
//    public void handleButtonClick(){
//        sendMailToAll();
//    }
    public void sendMailToUser(User user) {
        String to = user.getEmail();
        String subject = "Daily attendance";
        String text = user.getName() + " is " + user.getMarkAttendance() + " " + user.getTimestamp();

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("testprojectspringboot@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);

        mailSender.send(message);

        System.out.println("Mail sent successfully to user: " + user.getName());
    }

    public void handleButtonClick(Long userId) {
        User user = userRepository.findById(userId).orElse(null);

        if (user != null) {
            sendMailToUser(user);
        } else {
            System.out.println("User with ID: " + userId + " not found");
        }
    }

}

