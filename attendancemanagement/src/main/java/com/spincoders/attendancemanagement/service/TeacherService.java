package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Teacher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TeacherService {

    public Teacher saveTeacher(Teacher teacher);

    public List<Teacher> getAllTeacher();

}
