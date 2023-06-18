package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.service.AdminService;
import com.spincoders.attendancemanagement.service.FatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/father")
public class FatherCtrl {
    @Autowired
    private FatherService fatherService;

    @PostMapping("/addNew")
    public String add(@RequestBody Father father){
        fatherService.saveFather(father);
        return "New Father is added";
    }

    @GetMapping("getAll")
    public List<Father> getAllFathers(){
        return fatherService.getAllFather();
    }

}
