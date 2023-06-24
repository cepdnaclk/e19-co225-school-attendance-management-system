package com.spincoders.attendancemanagement.control;
import com.spincoders.attendancemanagement.model.Student;
import com.spincoders.attendancemanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000")
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

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable int id) {
        studentService.deleteStudentById(id);
        return ResponseEntity.noContent().build();
    }
}
