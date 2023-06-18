package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Classroom;
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


}
