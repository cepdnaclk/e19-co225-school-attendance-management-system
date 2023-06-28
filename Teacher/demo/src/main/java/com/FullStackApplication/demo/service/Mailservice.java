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

    public void sendMailToAll() {
        List<User> users = userRepository.findAll();

        for(User user: users){
            String to = user.getEmail();
            String subject = "Daily attendance";
            String text = user.getName()+" is "+ user.getMarkAttendance() + " today";

            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("testprojectspringboot@gmail.com");
            message.setTo(to);
            message.setSubject(subject);
            message.setText(text);

            mailSender.send(message);
        }

        System.out.println("Mail sent successfully to all records");
    }
}

