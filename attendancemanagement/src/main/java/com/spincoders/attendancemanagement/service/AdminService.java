package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Teacher;

import java.util.List;

public interface AdminService {
    public Admin saveAdmin(Admin admin);
    public List<Admin> getAllAdmin();

    public Admin findByUsername(String username);

}
