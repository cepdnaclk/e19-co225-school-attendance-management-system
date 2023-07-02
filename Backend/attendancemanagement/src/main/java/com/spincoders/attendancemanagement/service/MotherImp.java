package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Mother;
import com.spincoders.attendancemanagement.repo.Motherrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public Mother findByEmail(String email) {
        return motherrepo.findByEmail(email);
    }

    @Override
    public void updateMother(int id, Mother updatedMother) {
        Optional<Mother> optionalMother = motherrepo.findById(id);
        if (optionalMother.isPresent()) {
            Mother mother = optionalMother.get();
            mother.setName(updatedMother.getName());
            mother.setEmail(updatedMother.getEmail());
            mother.setJob(updatedMother.getJob());
            mother.setMobile(updatedMother.getMobile());
            //mother.setAddress(updatedMother.getAddress());
            motherrepo.save(mother);
        } else {
            throw new IllegalArgumentException("Father not found with ID: " + id);
        }
    }

    @Override
    public Mother getMotherById(int motherID) {
        return motherrepo.findByID(motherID);
    }
}
