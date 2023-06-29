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
