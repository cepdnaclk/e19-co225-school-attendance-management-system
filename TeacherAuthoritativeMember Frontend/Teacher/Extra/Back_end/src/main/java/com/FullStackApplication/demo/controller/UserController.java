package com.FullStackApplication.demo.controller;

import com.FullStackApplication.demo.exception.UserNotFoundException;
import com.FullStackApplication.demo.model.User;
import com.FullStackApplication.demo.repository.UserRepository;
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
public class UserController {
    // To add mail button
    private final Mailservice mailservice;

    @Autowired
    private UserRepository userRepository;

    public UserController(Mailservice mailservice) {
        this.mailservice = mailservice;
    }

//    @Autowired
//    private StudentService userService;

//    @PostMapping("/user")
//    User newUser(@RequestBody User newUser){
//        return userRepository.save(newUser);
//    }
//
    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
//
//    @GetMapping("/user/{id}")
//    User getUserById(@PathVariable Long id){
//        return userRepository.findById(id)
//                .orElseThrow(()->new UserNotFoundException(id));
//    }

//    @GetMapping("/usermail")
//    public List<User> getAllAllStudents(){
//        return userService.getAllStudents();
//    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable long id){
        return userRepository.findById(id)
                .map(user->{
                    user.setMarkAttendance(newUser.getMarkAttendance());

                    if(user.getMarkAttendance() == null || user.getMarkAttendance().isEmpty()){
                        user.setMarkAttendance("absent");
                    }

                    return userRepository.save(user);
                })
                .orElseThrow(()->new UserNotFoundException(id));
    }

//    @PutMapping("users/{id}")
//    public ResponseEntity<String> updateUserAttendance(@PathVariable Long id, @RequestBody User user) {
//        Optional<User> optionalUser = userRepository.findById(id);
//        if (optionalUser.isPresent()) {
//            User existingUser = optionalUser.get();
//            existingUser.setMarkAttendance(user.getMarkAttendance());
//            existingUser.setTimestamp(new Date());
//            userRepository.save(existingUser);
//            return ResponseEntity.ok("Attendance for user " + id + " updated in the database.");
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

//    @PutMapping("users/{id}")
//    public ResponseEntity<String> updateUserAttendance(@PathVariable Long id, @RequestBody User user) {
//        Optional<User> optionalUser = userRepository.findById(id);
//        if (optionalUser.isPresent()) {
//            User existingUser = optionalUser.get();
//            existingUser.setMarkAttendance(user.getMarkAttendance());
//            existingUser.setTimestamp(LocalDate.now()); // Set the current date as the timestamp
//            userRepository.save(existingUser);
//            return ResponseEntity.ok("Attendance for user " + id + " updated in the database.");
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
    @PutMapping("users/{id}")
    public ResponseEntity<String> updateUserAttendance(@PathVariable Long id, @RequestBody User user) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setMarkAttendance(user.getMarkAttendance());

            LocalDate currentDate = LocalDate.now();
            Date sqlDate = Date.valueOf(currentDate); // Convert LocalDate to java.sql.Date

            existingUser.setTimestamp(sqlDate);
            userRepository.save(existingUser);

            return ResponseEntity.ok("Attendance for user " + id + " updated in the database.");
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
    @PostMapping("/{userId}/send-email")
    //@PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@PathVariable("userId") Long userId) {
        mailservice.handleButtonClick(userId);
        return ResponseEntity.ok("Email sent");
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<String> updateUserAttendance(@PathVariable Long id, @RequestBody UserAttendanceData data) {
//        // Find the user by ID in the database
//        User user = userRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + id));
//
//        // Update the attendance value for the user
//        user.setMarkAttendance(data.getMarkAttendance());
//
//        // Update any other properties as needed
//
//        // Save the updated user back to the database
//        userRepository.save(user);
//
//        return ResponseEntity.ok("Attendance for user " + id + " updated successfully.");
//    }
}
