package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Attendence;
import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Student;

import java.util.List;

public interface AttendanceService {

    public Attendence saveAttendence(Attendence attendence);

    public List<Attendence> findAbsentStudent(int studentID);

    public List<Attendence> findAbsentStudentNote(int studentID);

    public void updateReason(int id, Attendence attendence);

    // Not Implemented
    public Attendence getAById(int attendenceId);

    public Long findAllDays(int studentID, int year);

    public Integer findAllAbsentDays(int studentID, int year);

    public Boolean todatAttendence(int studentID, int year, int month, int date);

    public List<String> findAbsMonth(int studentID, int year);

    public void updateAbsentNote(int id, Attendence attendence);

    public Integer findAllStudentAbsent();

    public Integer findAllStudentPresence();

    public List<String> findMonthAbsence(int year);

}
