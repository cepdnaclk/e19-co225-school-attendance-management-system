package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.repo.Fatherrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FatherImp implements FatherService {

    @Autowired
    private Fatherrepo fatherrepo;

    @Override
    public Father saveFather(Father father) {
        return fatherrepo.save(father);
    }

    @Override
    public List<Father> getAllFather() {
        return fatherrepo.findAll();
    }

    @Override
    public Father findByEmail(String email) {
        return fatherrepo.findByEmail(email);
    }

    @Override
    public void updateFather(int id, Father updatedFather) {
        Optional<Father> optionalFather = fatherrepo.findById(id);
        if (optionalFather.isPresent()) {
            Father father = optionalFather.get();
            father.setName(updatedFather.getName());
            father.setEmail(updatedFather.getEmail());
            father.setJob(updatedFather.getJob());
            father.setMobile(updatedFather.getMobile());
            father.setAddress(updatedFather.getAddress());
            fatherrepo.save(father);
        } else {
            throw new IllegalArgumentException("Father not found with ID: " + id);
        }
    }

    @Override
    public Father getFatherById(int fatherId) {
        return fatherrepo.findByID(fatherId);
    }


}
