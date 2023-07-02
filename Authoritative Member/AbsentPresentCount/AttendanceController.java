<<<<<<< Updated upstream
package com.ntxcodes.attendancecount.controller;

import com.ntxcodes.attendancecount.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin
public class AttendanceController {
    @Autowired
    private final AttendanceService attendanceService;

    @Autowired
    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    @GetMapping("/presentCount")
    public long getPresentStudentCount() {
        return attendanceService.getPresentStudentCount();
    }

    @GetMapping("/absentCount")
    public long getAbsentStudentCount() {
        return attendanceService.getAbsentStudentCount();
    }
}
=======
package com.ntxcodes.attendancecount.controller;

import com.ntxcodes.attendancecount.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin
public class AttendanceController {
    @Autowired
    private final AttendanceService attendanceService;

    @Autowired
    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    //To get the total present count
    @GetMapping("/presentCount")
    public long getPresentStudentCount() {
        return attendanceService.getPresentStudentCount();
    }
    //To get the totala absent count of the school
    @GetMapping("/absentCount")
    public long getAbsentStudentCount() {
        return attendanceService.getAbsentStudentCount();
    }

    //Attendance of a class on that day
    @GetMapping("/gradeBasedAttendanceCount")
    public ResponseEntity<Map<Boolean, Integer>> getAttendanceCounts(@RequestParam String grade) {
        Map<Boolean, Integer> attendanceCounts = attendanceService.countsByGradeAndStatus(grade);
        return ResponseEntity.ok(attendanceCounts);
    }

    //To return the present status of given student
     @GetMapping("/studentAttendance")
     public ResponseEntity<Attendance> getStudentAttendance(@RequestParam int studentId) {
        Attendance attendance = attendanceService.getStudentAttendance(studentId);
        if (attendance != null) {
            return ResponseEntity.ok(attendance);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
>>>>>>> Stashed changes
