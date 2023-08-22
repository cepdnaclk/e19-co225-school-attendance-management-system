package com.FullStackApplication.demo.controller;

import com.FullStackApplication.demo.exception.AttendeeNotFoundException;
import com.FullStackApplication.demo.model.Attendee;
import com.FullStackApplication.demo.repository.AttendeeRepository;
//import com.FullStackApplication.demo.service.StudentService;
import com.FullStackApplication.demo.service.Mailservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class AttendeeController {
    // To add mail button
    private final Mailservice mailservice;

    @Autowired
    private AttendeeRepository attendeeRepository;

    public AttendeeController(Mailservice mailservice) {
        this.mailservice = mailservice;
    }

//    @Autowired
//    private StudentService attendeeService;

    //    @PostMapping("/attendee")
//    Attendee newAttendee(@RequestBody Attendee newAttendee){
//        return attendeeRepository.save(newAttendee);
//    }
//
    @GetMapping("/attendees")
    List<Attendee> getAllAttendees() {
        return attendeeRepository.findAll();
    }
//
//    @GetMapping("/attendee/{id}")
//    Attendee getAttendeeById(@PathVariable Long id){
//        return attendeeRepository.findById(id)
//                .orElseThrow(()->new AttendeeNotFoundException(id));
//    }

//    @GetMapping("/attendeemail")
//    public List<Attendee> getAllAllStudents(){
//        return attendeeService.getAllStudents();
//    }

    @PutMapping("/attendee/{id}")
    Attendee updateAttendee(@RequestBody Attendee newAttendee, @PathVariable long id){
        return attendeeRepository.findById(id)
                .map(attendee->{
                    attendee.setMarkAttendance(newAttendee.getMarkAttendance());

                    if(attendee.getMarkAttendance() == null || attendee.getMarkAttendance().isEmpty()){
                        attendee.setMarkAttendance("absent");
                    }

                    return attendeeRepository.save(attendee);
                })
                .orElseThrow(()->new AttendeeNotFoundException(id));
    }

//    @PutMapping("attendees/{id}")
//    public ResponseEntity<String> updateAttendeeAttendance(@PathVariable Long id, @RequestBody Attendee attendee) {
//        Optional<Attendee> optionalAttendee = attendeeRepository.findById(id);
//        if (optionalAttendee.isPresent()) {
//            Attendee existingAttendee = optionalAttendee.get();
//            existingAttendee.setMarkAttendance(attendee.getMarkAttendance());
//            existingAttendee.setTimestamp(new Date());
//            attendeeRepository.save(existingAttendee);
//            return ResponseEntity.ok("Attendance for attendee " + id + " updated in the database.");
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    //    @PutMapping("attendees/{id}")
//    public ResponseEntity<String> updateAttendeeAttendance(@PathVariable Long id, @RequestBody Attendee attendee) {
//        Optional<Attendee> optionalAttendee = attendeeRepository.findById(id);
//        if (optionalAttendee.isPresent()) {
//            Attendee existingAttendee = optionalAttendee.get();
//            existingAttendee.setMarkAttendance(attendee.getMarkAttendance());
//            existingAttendee.setTimestamp(LocalDate.now()); // Set the current date as the timestamp
//            attendeeRepository.save(existingAttendee);
//            return ResponseEntity.ok("Attendance for attendee " + id + " updated in the database.");
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
    @PutMapping("attendees/{id}")
    public ResponseEntity<String> updateAttendeeAttendance(@PathVariable Long id, @RequestBody Attendee attendee) {
        Optional<Attendee> optionalAttendee = attendeeRepository.findById(id);
        if (optionalAttendee.isPresent()) {
            Attendee existingAttendee = optionalAttendee.get();
            existingAttendee.setMarkAttendance(attendee.getMarkAttendance());

            LocalDate currentDate = LocalDate.now();
            Date sqlDate = Date.valueOf(currentDate); // Convert LocalDate to java.sql.Date

            existingAttendee.setTimestamp(sqlDate);
            attendeeRepository.save(existingAttendee);

            return ResponseEntity.ok("Attendance for attendee " + id + " updated in the database.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //    @PostMapping("/sendMail")
//    @ResponseBody
//    public String sendMail(){
//        mailservice.sendMailToAll();
//        return "Mail sending initiated";
//    }
    @PostMapping("/{attendeeId}/send-email")
    //@PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@PathVariable("attendeeId") Long attendeeId) {
        mailservice.handleButtonClick(attendeeId);
        return ResponseEntity.ok("Email sent");
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<String> updateAttendeeAttendance(@PathVariable Long id, @RequestBody AttendeeAttendanceData data) {
//        // Find the attendee by ID in the database
//        Attendee attendee = attendeeRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Attendee not found with ID: " + id));
//
//        // Update the attendance value for the attendee
//        attendee.setMarkAttendance(data.getMarkAttendance());
//
//        // Update any other properties as needed
//
//        // Save the updated attendee back to the database
//        attendeeRepository.save(attendee);
//
//        return ResponseEntity.ok("Attendance for attendee " + id + " updated successfully.");
//    }
}
