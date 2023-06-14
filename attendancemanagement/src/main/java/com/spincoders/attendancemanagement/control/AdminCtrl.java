package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminCtrl {

    @Autowired
    private AdminService adminService;

    @PostMapping("/addNew")
    public String add(@RequestBody Admin admin){
        adminService.saveAdmin(admin);
        return "New Admin is added";
    }

    @GetMapping("getAll")
    public List<Admin> getAllAdmins(){
        return adminService.getAllAdmin();
    }



}
