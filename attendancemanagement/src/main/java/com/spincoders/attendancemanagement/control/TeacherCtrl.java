package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Teacher;
import com.spincoders.attendancemanagement.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teacher")
public class TeacherCtrl {
    @Autowired
    private TeacherService teacherService;

    @PostMapping("/addNew")
    public String add(@RequestBody Teacher teacher){
        teacherService.saveTeacher(teacher);
        return "New Teacher is added";
    }

    @GetMapping("getAll")
    public List<Teacher> getAllTeachers(){
        return teacherService.getAllTeacher();
    }

}
