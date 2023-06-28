package com.FullStackApplication.demo.controller;

import com.FullStackApplication.demo.exception.UserNotFoundException;
import com.FullStackApplication.demo.model.User;
import com.FullStackApplication.demo.repository.UserRepository;
//import com.FullStackApplication.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

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

}
