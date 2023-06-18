package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Guardian;
import com.spincoders.attendancemanagement.model.Mother;
import com.spincoders.attendancemanagement.service.GuardianService;
import com.spincoders.attendancemanagement.service.MotherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mother")
public class MotherCtrl {

    @Autowired
    private MotherService motherService;

    @PostMapping("/addNew")
    public String add(@RequestBody Mother mother){
        motherService.saveMother(mother);
        return "New Mother is added";
    }

    @GetMapping("getAll")
    public List<Mother> getAllMothers(){
        return motherService.getAllMother();
    }
}
