package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Guardian;
import com.spincoders.attendancemanagement.model.Mother;
import com.spincoders.attendancemanagement.service.AdminService;
import com.spincoders.attendancemanagement.service.GuardianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/guardian")
public class GuardianCtrl {

    @Autowired
    private GuardianService guardianService;

    @PostMapping("/addNew")
    public String add(@RequestBody Guardian guardian){
        guardianService.saveGuardian(guardian);
        return "New Guardian is added";
    }

    @GetMapping("getAll")
    public List<Guardian> getAllGuardians(){
        return guardianService.getAllGuardian();
    }

    @GetMapping("/getbyemail/{email}")
    public ResponseEntity<Guardian> getUserByUsername(@PathVariable String email) {
        Guardian user = guardianService.findByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
