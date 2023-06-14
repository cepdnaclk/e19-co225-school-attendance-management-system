package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Admin;

import java.util.List;

public interface AdminService {
    public Admin saveAdmin(Admin admin);
    public List<Admin> getAllAdmin();

}
