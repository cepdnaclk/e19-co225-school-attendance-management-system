package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Guardian;
import com.spincoders.attendancemanagement.repo.Guardianrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GuardianImp implements GuardianService{

    @Autowired
    private Guardianrepo guardianrepo;

    @Override
    public Guardian saveGuardian(Guardian guardian) {
        return guardianrepo.save(guardian);
    }

    @Override
    public List<Guardian> getAllGuardian() {
        return guardianrepo.findAll();
    }

    @Override
    public Guardian findByEmail(String email) {
        return guardianrepo.findByEmail(email);
    }

    @Override
    public void updateGuardian(int id, Guardian updatedGuardian) {
        Optional<Guardian> optionalGuardian = guardianrepo.findById(id);
        if (optionalGuardian.isPresent()) {
            Guardian guardian = optionalGuardian.get();
            guardian.setName(updatedGuardian.getName());
            guardian.setEmail(updatedGuardian.getEmail());
            guardian.setJob(updatedGuardian.getJob());
            guardian.setMobile(updatedGuardian.getMobile());
            //guardian.setAddress(updatedGuardian.getAddress());
            guardianrepo.save(guardian);
        } else {
            throw new IllegalArgumentException("Father not found with ID: " + id);
        }
    }

    @Override
    public Guardian getGuardianById(int guardianId) {
        return guardianrepo.findByID(guardianId);
    }
}
