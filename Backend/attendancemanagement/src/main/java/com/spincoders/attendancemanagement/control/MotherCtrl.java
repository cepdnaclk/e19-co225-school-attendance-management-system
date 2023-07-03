package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Mother;
import com.spincoders.attendancemanagement.model.Student;
import com.spincoders.attendancemanagement.service.MotherService;
import com.spincoders.attendancemanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/mother")
public class MotherCtrl {

    @Autowired
    private MotherService motherService;
    @Autowired
    private StudentService studentService;

    @PostMapping("/addNew")
    public String add(@RequestBody Mother mother){
        motherService.saveMother(mother);
        return "New Mother is added";
    }

    @GetMapping("getAll")
    public List<Mother> getAllMothers(){
        return motherService.getAllMother();
    }


    @GetMapping("/getbyemail/{email}")
    public ResponseEntity<Map<String, Object>> getUserByUsername(@PathVariable String email) {
        Mother mother = motherService.findByEmail(email);
        if (mother != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("motherID", mother.getMotherID());
            response.put("name", mother.getName());
            response.put("password", mother.getPassword());
            response.put("email", mother.getEmail());
            response.put("mobile", mother.getMobile());
            response.put("job", mother.getJob());
            response.put("address", mother.getEmail());

            Student student = mother.getStudent();
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
    public ResponseEntity<Mother> getUserByUsername(@PathVariable int id) {
        Mother user = motherService.getMotherById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateMother(@PathVariable int id, @RequestBody Mother updatedMother) {
        motherService.updateMother(id, updatedMother);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/getFather/{fatherId}/putStudent/{studentId}")
    public ResponseEntity<String> updateStudentForMother(@PathVariable int motherId, @PathVariable int studentId) {
        Mother mother = motherService.getMotherById(motherId);
        if (mother == null) {
            return ResponseEntity.notFound().build();
        }

        Student student = studentService.getStudentById(studentId);
        if (student == null) {
            return ResponseEntity.notFound().build();
        }

        mother.setStudent(student);
        motherService.saveMother(mother);

        return ResponseEntity.ok("Student ID updated for Father");
    }
}
