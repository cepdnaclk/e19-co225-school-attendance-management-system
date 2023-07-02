package com.FullStackApplication.demo.service;

import com.FullStackApplication.demo.model.Attendee;
import com.FullStackApplication.demo.repository.AttendeeRepository;
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
    private AttendeeRepository attendeeRepository;

//    public void sendMailToAll() {
//        List<Attendee> attendees = attendeeRepository.findAll();
//
//        for(Attendee attendee: attendees){
//            String to = attendee.getEmail();
//            String subject = "Daily attendance";
//            String text = attendee.getName()+" is "+ attendee.getMarkAttendance() + " " + attendee.getTimestamp();
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
    public void sendMailToAttendee(Attendee attendee) {
        String to = attendee.getEmail();
        String subject = "Daily attendance";
        String text = attendee.getName() + " is " + attendee.getMarkAttendance() + " on  " + attendee.getTimestamp();

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("testprojectspringboot@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);

        mailSender.send(message);

        System.out.println("Mail sent successfully to attendee: " + attendee.getName());
    }

    public void handleButtonClick(Long attendeeId) {
        Attendee attendee = attendeeRepository.findById(attendeeId).orElse(null);

        if (attendee != null) {
            sendMailToAttendee(attendee);
        } else {
            System.out.println("Attendee with ID: " + attendeeId + " not found");
        }
    }

}

