package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Classroom;
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

   /* @PutMapping("/users/{name}/username")
    public ResponseEntity<Classroom> updateUserUsername(@PathVariable String name, @RequestBody Teacher teacher) {
        Classroom updatedUser = classService.updateTeachetID(name, teacher);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }*/
}
