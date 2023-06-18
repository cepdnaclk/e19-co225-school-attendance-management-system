package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Guardian;
import com.spincoders.attendancemanagement.repo.Guardianrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
