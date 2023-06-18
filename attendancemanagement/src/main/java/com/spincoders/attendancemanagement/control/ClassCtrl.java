package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Classroom;
import com.spincoders.attendancemanagement.service.AdminService;
import com.spincoders.attendancemanagement.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/class")
public class ClassCtrl {
    @Autowired
    private ClassService classService;

    @PostMapping("/addNew")
    public String add(@RequestBody Classroom classroom){
        classService.saveClass(classroom);
        return "New Class is added";
    }

    @GetMapping("getAll")
    public List<Classroom> getAllClasses(){
        return classService.getAllClass();
    }
}
