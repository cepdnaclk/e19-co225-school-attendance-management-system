<<<<<<< Updated upstream
package com.ntxcodes.attendancecount.service;
import com.ntxcodes.attendancecount.repository.AttendanceCountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.HashMap;

@Service
public class AttendanceService {
    private final AttendanceCountRepository attendanceCountRepository;

    @Autowired
    public AttendanceService(AttendanceCountRepository attendanceCountRepository) {
        this.attendanceCountRepository = attendanceCountRepository;
    }

    //Total attendance of the school at the day
    public long getPresentStudentCount() {
        return attendanceCountRepository.countByAttendanceStatus(true);
    }

    public long getAbsentStudentCount() {
        return attendanceCountRepository.countByAttendanceStatus(false);
    }

        //Attendance count of a grade
    public Map<Boolean, Integer> countsByGradeAndStatus(String grade) {
        int presentCount = attendanceCountRepository.countByGradeAndAttendanceStatus(grade, true);
        int absentCount = attendanceCountRepository.countByGradeAndAttendanceStatus(grade, false);

        Map<Boolean, Integer> attendanceCounts = new HashMap<>();
        attendanceCounts.put(true, presentCount);
        attendanceCounts.put(false, absentCount);

        return attendanceCounts;
    }

    //Attendance status of a given student at that day.
    public Attendance getStudentAttendance(int studentId) {
        return attendanceCountRepository.findByStudentId(studentId);
    }

}

