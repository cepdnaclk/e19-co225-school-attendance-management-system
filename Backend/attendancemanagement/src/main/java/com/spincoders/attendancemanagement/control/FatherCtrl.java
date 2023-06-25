package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.service.FatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/getbyemail/{email}")
    public ResponseEntity<Father> getUserByUsername(@PathVariable String email) {
        Father user = fatherService.findByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
