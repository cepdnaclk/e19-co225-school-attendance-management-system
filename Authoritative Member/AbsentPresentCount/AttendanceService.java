package com.ntxcodes.attendancecount.service;
import com.ntxcodes.attendancecount.repository.AttendanceCountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AttendanceService {
    private final AttendanceCountRepository attendanceCountRepository;

    @Autowired
    public AttendanceService(AttendanceCountRepository attendanceCountRepository) {
        this.attendanceCountRepository = attendanceCountRepository;
    }

    public long getPresentStudentCount() {
        return attendanceCountRepository.countByAttendanceStatus(true);
    }

    public long getAbsentStudentCount() {
        return attendanceCountRepository.countByAttendanceStatus(false);
    }

}
