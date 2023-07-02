package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Attendence;
import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Student;
import com.spincoders.attendancemanagement.service.AttendanceService;
import com.spincoders.attendancemanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/attendance")
public class AttendanceCtrl {

    @Autowired
    private AttendanceService attendanceService;


    @PostMapping("/addNew")
    public String add(@RequestBody Attendence attendence){
        attendanceService.saveAttendence(attendence);
        return "New Attendence is added";
    }

    @GetMapping("/absent/{studentId}")
    public ResponseEntity<List<Attendence>> getAbsentStudents(@PathVariable int studentId) {
        List<Attendence> absentStudents = attendanceService.findAbsentStudent(studentId);
        if (!absentStudents.isEmpty()) {
            return ResponseEntity.ok(absentStudents);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/absentNote/{studentId}")
    public ResponseEntity<List<Attendence>> getAbsentStudentNotes(@PathVariable int studentId) {
        List<Attendence> absentStudents = attendanceService.findAbsentStudentNote(studentId);
        if (!absentStudents.isEmpty()) {
            return ResponseEntity.ok(absentStudents);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getbyID/{id}")
    public ResponseEntity<Attendence> getUserByUsername(@PathVariable int id) {
        Attendence user = attendanceService.getAById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateFather(@PathVariable int id, @RequestBody Attendence attendence) {
        attendanceService.updateReason(id, attendence);
        return ResponseEntity.noContent().build();
    }



}
