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
    public Attendence getAById(int attendenceId);

}
