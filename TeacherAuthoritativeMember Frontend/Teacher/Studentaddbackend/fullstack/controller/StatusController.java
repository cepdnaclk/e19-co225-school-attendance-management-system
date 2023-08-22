<<<<<<< Updated upstream
package com.studentadd.fullstack.controller;

import com.studentadd.fullstack.exception.UserNotFoundException;
import com.studentadd.fullstack.model.Status;
import com.studentadd.fullstack.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StatusController {
    @Autowired
    //create statusRepository instance
    private StatusRepository statusRepository;

    @GetMapping("/status/{id}")
    Status getUserById(@PathVariable Long id){
        return statusRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }
    @GetMapping("/statusall")
    List<Status> getAllStatus(){
        return statusRepository.findAll();
    }

}
=======
package com.studentadd.fullstack.controller;

import com.studentadd.fullstack.exception.UserNotFoundException;
import com.studentadd.fullstack.model.Status;
import com.studentadd.fullstack.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StatusController {
    @Autowired
    //create statusRepository instance
    private StatusRepository statusRepository;

    @GetMapping("/status/{id}")
    Status getUserById(@PathVariable Long id){
        return statusRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }
    @GetMapping("/statusall")
    List<Status> getAllStatus(){
        return statusRepository.findAll();
    }

}
>>>>>>> Stashed changes
