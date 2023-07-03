package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Attendence;
import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Student;
import com.spincoders.attendancemanagement.repo.Attendancerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Service
public class AttendanceImp implements AttendanceService{

    @Autowired
    private Attendancerepo attendancerepo;

    @Override
    public Attendence saveAttendence(Attendence attendence) {
        return attendancerepo.save(attendence);
    }

    @Override
    public List<Attendence> findAbsentStudent(int studentID) {
        return attendancerepo.findAbsentStudent(studentID);
    }

    @Override
    public List<Attendence> findAbsentStudentNote(int studentID) {
        return attendancerepo.findAbsentNote(studentID);
    }

    @Override
    public void updateReason(int id, Attendence updatedAttendence) {
        Optional<Attendence> optionalAttendence = attendancerepo.findById(id);
        if (optionalAttendence.isPresent()) {
            Attendence attendence = optionalAttendence.get();
            attendence.setNote(updatedAttendence.getNote());
            attendancerepo.save(attendence);
        } else {
            throw new IllegalArgumentException("Father not found with ID: " + id);
        }
    }

    @Override
    public Attendence getAById(int fatherId) {
        return null;
    }

    @Override
    public Long findAllDays(int studentID, int year) {
        return attendancerepo.findAllDays(studentID,year);
    }

    @Override
    public Integer findAllAbsentDays(int studentID, int year) {
        return attendancerepo.findAllAbsentDays(studentID,year);
    }

    @Override
    public Boolean todatAttendence(int studentID, int year, int month, int date) {
        return attendancerepo.findToday(studentID,year,month,date);
    }

    @Override
    public List<String> findAbsMonth(int studentID, int year) {
        return attendancerepo.findByMonth(studentID,year);
    }

    @Override
    public void updateAbsentNote(int id, Attendence attendence) {
        Attendence existingAttendence = attendancerepo.findById(id).orElse(null);
        if (existingAttendence != null) {
            existingAttendence.setNote(attendence.getNote());
            attendancerepo.save(existingAttendence);
        }
    }

    @Override
    public Integer findAllStudentAbsent() {
        return attendancerepo.findAllStudentAbsent();
    }

    @Override
    public Integer findAllStudentPresence() {
        return attendancerepo.findAllStudentPresence();
    }

    @Override
    public List<String> findMonthAbsence(int year) {
        return attendancerepo.findMonthAbsence(year);
    }


}
