package com.spincoders.attendancemanagement.control;
import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Student;
import com.spincoders.attendancemanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
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

    @GetMapping("/getbyID/{id}")
    public ResponseEntity<Student> getUserByUsername(@PathVariable int id) {
        Student user = studentService.getStudentById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
