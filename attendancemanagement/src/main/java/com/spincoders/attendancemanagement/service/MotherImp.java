package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Mother;
import com.spincoders.attendancemanagement.repo.Motherrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MotherImp implements MotherService {

    @Autowired
    private Motherrepo motherrepo;

    @Override
    public Mother saveMother(Mother mother) {
        return motherrepo.save(mother);
    }

    @Override
    public List<Mother> getAllMother() {
        return motherrepo.findAll();
    }
}
