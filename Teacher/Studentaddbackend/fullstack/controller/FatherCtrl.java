<<<<<<< Updated upstream
package com.studentadd.fullstack.controller;

import com.studentadd.fullstack.Service.FatherService;
import com.studentadd.fullstack.model.Father;
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

=======
package com.studentadd.fullstack.controller;

import com.studentadd.fullstack.Service.FatherService;
import com.studentadd.fullstack.model.Father;
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

>>>>>>> Stashed changes
}