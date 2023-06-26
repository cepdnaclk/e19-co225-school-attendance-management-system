package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Student;
import com.spincoders.attendancemanagement.service.FatherService;
import com.spincoders.attendancemanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/father")
public class FatherCtrl {
    @Autowired
    private FatherService fatherService;
    @Autowired
    private StudentService studentService;

    @PostMapping("/addNew")
    public String add(@RequestBody Father father){
        fatherService.saveFather(father);
        return "New Father is added";
    }

    @GetMapping("getAll")
    public List<Father> getAllFathers(){
        return fatherService.getAllFather();
    }

    @GetMapping("/getbyemail/{email}")
    public ResponseEntity<Map<String, Object>> getUserByUsername(@PathVariable String email) {
        Father father = fatherService.findByEmail(email);
        if (father != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("fatherID", father.getFatherID());
            response.put("name", father.getName());
            response.put("password", father.getPassword());
            response.put("email", father.getEmail());
            response.put("mobile", father.getMobile());
            response.put("job", father.getJob());
            response.put("address", father.getAddress());

            Student student = father.getStudent();
            if (student != null) {
                response.put("studentName", student.getName());
                response.put("studentAddress", student.getAddress());
                response.put("studnetClassroom", student.getaClass());
                response.put("imagelink", student.getImagelink());
                response.put("studentWeight", student.getWeight());
                response.put("studentHeight", student.getHeight());
                response.put("studentID", student.getId());
                response.put("studentMobile", student.getLandPhone());

                // Include other necessary attributes from the Student object
            }

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/getbyID/{id}")
    public ResponseEntity<Father> getUserByUsername(@PathVariable int id) {
        Father user = fatherService.getFatherById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFather(@PathVariable int id, @RequestBody Father updatedFather) {
        fatherService.updateFather(id, updatedFather);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/getFather/{fatherId}/putStudent/{studentId}")
    public ResponseEntity<String> updateStudentForFather(@PathVariable int fatherId, @PathVariable int studentId) {
        Father father = fatherService.getFatherById(fatherId);
        if (father == null) {
            return ResponseEntity.notFound().build();
        }

        Student student = studentService.getStudentById(studentId);
        if (student == null) {
            return ResponseEntity.notFound().build();
        }

        father.setStudent(student);
        fatherService.saveFather(father);

        return ResponseEntity.ok("Student ID updated for Father");
    }


}
