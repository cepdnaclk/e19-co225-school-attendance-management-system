package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.repo.Adminrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminImp implements AdminService {

    @Autowired
    private Adminrepo adminrepo;

    @Override
    public Admin saveAdmin(Admin admin) {
        return adminrepo.save(admin);
    }

    @Override
    public List<Admin> getAllAdmin() {
        return adminrepo.findAll();
    }
}
