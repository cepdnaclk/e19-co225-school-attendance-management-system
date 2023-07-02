package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.Classroom;
import com.spincoders.attendancemanagement.model.Teacher;
import com.spincoders.attendancemanagement.service.ClassService;
import com.spincoders.attendancemanagement.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/class")
public class ClassCtrl {
    @Autowired
    private ClassService classService;

    @Autowired
    private TeacherService teacherService;

    @PostMapping("/addNew")
    public String createClass(@RequestBody ClassRequest classRequest) {
        String className = classRequest.getClassName();
        String teacherEmail = classRequest.getTeacherEmail();

        Teacher teacher = teacherService.findByEmail(teacherEmail);
        if (teacher == null) {
            return "Teacher is not there";
        }

        // Perform any necessary validation or processing

        Classroom createdClass = new Classroom();
        createdClass.setClassName(className);
        createdClass.setTeacher(teacher);
        classService.saveClass(createdClass);

        return "Created sucessfully";
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

    public static class ClassRequest {
        private String className;
        private String teacherEmail;

        public ClassRequest() {
        }

        public String getClassName() {
            return className;
        }

        public void setClassName(String className) {
            this.className = className;
        }

        public String getTeacherEmail() {
            return teacherEmail;
        }

        public void setTeacherEmail(String teacherEmail) {
            this.teacherEmail = teacherEmail;
        }
        // Add getters and setters
    }
}


