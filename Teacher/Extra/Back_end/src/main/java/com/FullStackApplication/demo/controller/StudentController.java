package com.FullStackApplication.demo.controller;


import com.FullStackApplication.demo.model.Student;
import com.FullStackApplication.demo.model.User;
import com.FullStackApplication.demo.repository.studentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {

    @Autowired
    private studentRepository studentRepository;

    @GetMapping("/students_get")
    List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    @PostMapping("/student_post")
    Student newStudent(@RequestBody Student newStudent){

        newStudent.setId(null);

        return studentRepository.save(newStudent);
    }
}
