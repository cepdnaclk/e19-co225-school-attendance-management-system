package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Guardian;
import com.spincoders.attendancemanagement.model.Student;
import com.spincoders.attendancemanagement.service.GuardianService;
import com.spincoders.attendancemanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentCtrl {

    @Autowired
    private StudentService studentService;

    @PostMapping("/addNew")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New Student is added";
    }

    @GetMapping("getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudent();
    }
}
