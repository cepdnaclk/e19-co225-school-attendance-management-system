package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Guardian;
import com.spincoders.attendancemanagement.model.Student;
import com.spincoders.attendancemanagement.service.GuardianService;
import com.spincoders.attendancemanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/guardian")
public class GuardianCtrl {

    @Autowired
    private GuardianService guardianService;
    @Autowired
    private StudentService studentService;

    @PostMapping("/addNew")
    public String add(@RequestBody Guardian guardian){
        guardianService.saveGuardian(guardian);
        return "New Guardian is added";
    }

    @GetMapping("getAll")
    public List<Guardian> getAllGuardians(){
        return guardianService.getAllGuardian();
    }

    @GetMapping("/getbyemail/{email}")
    public ResponseEntity<Map<String, Object>> getUserByUsername(@PathVariable String email) {
        Guardian guardian = guardianService.findByEmail(email);
        if (guardian != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("guardianID", guardian.getGuardianID());
            response.put("name", guardian.getName());
            response.put("password", guardian.getPassword());
            response.put("email", guardian.getEmail());
            response.put("mobile", guardian.getMobile());
            response.put("job", guardian.getJob());
            //response.put("address", guardian.getAddress());

            Student student = guardian.getStudent();
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
    public ResponseEntity<Guardian> getUserByUsername(@PathVariable int id) {
        Guardian user = guardianService.getGuardianById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateGuardian(@PathVariable int id, @RequestBody Guardian updatedGuardian) {
        guardianService.updateGuardian(id, updatedGuardian);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/getFather/{fatherId}/putStudent/{studentId}")
    public ResponseEntity<String> updateStudentForFather(@PathVariable int guardianId, @PathVariable int studentId) {
        Guardian guardian = guardianService.getGuardianById(guardianId);
        if (guardian == null) {
            return ResponseEntity.notFound().build();
        }

        Student student = studentService.getStudentById(studentId);
        if (student == null) {
            return ResponseEntity.notFound().build();
        }

        guardian.setStudent(student);
        guardianService.saveGuardian(guardian);

        return ResponseEntity.ok("Student ID updated for Father");
    }

}
