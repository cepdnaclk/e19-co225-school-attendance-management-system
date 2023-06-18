package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Teacher;
import com.spincoders.attendancemanagement.repo.Teacherrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherImp implements TeacherService{

    @Autowired
    private Teacherrepo teacherrepo;

    @Override
    public Teacher saveTeacher(Teacher teacher) {
        return teacherrepo.save(teacher);
    }

    @Override
    public List<Teacher> getAllTeacher() {
        return teacherrepo.findAll();
    }


}
