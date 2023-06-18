package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Classroom;
import com.spincoders.attendancemanagement.model.Teacher;
import com.spincoders.attendancemanagement.repo.Classrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassImp implements ClassService {

    @Autowired
    private Classrepo classrepo;

    @Override
    public Classroom saveClass(Classroom classroom) {
        return classrepo.save(classroom);
    }

    @Override
    public List<Classroom> getAllClass() {
        return classrepo.findAll();
    }

 /*   @Override
    public Classroom findByName(String name) {
        return classrepo.findByName(name);
    }*/
/*
    @Override
    public Classroom updateTeachetID(String name, Teacher teacher) {
        Classroom user = classrepo.findByName(name);
        if (user != null) {
            user.setTeacher(teacher);
            return classrepo.save(user);
        } else {
            return null; // or throw an exception if desired
        }
    }*/


}
