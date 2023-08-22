<<<<<<< Updated upstream
package com.ntxcodes.attendancecount.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ntxcodes.attendancecount.model.Attendance;

public interface AttendanceCountRepository extends JpaRepository<Attendance, Integer> {
    // Repository methods
    long countByAttendanceStatus(boolean attendanceStatus);

    int countByGradeAndAttendanceStatus(String grade, boolean attendanceStatus);

    Attendance findByStudentId(int studentId);
}
>>>>>>> Stashed changes
