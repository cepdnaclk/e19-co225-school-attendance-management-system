package com.FullStackApplication.demo.controller;

import com.FullStackApplication.demo.model.Reason;
import com.FullStackApplication.demo.service.reasonService;
import com.FullStackApplication.demo.repository.reasonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reason")
@CrossOrigin
public class ReasonController {

    @Autowired
    private reasonService reasonservice;

    @Autowired
    private reasonRepository reasonRepository;

    @GetMapping("/getUnchecked")
    public List<Reason> getReasonWithDetailUnchecked() {
        return reasonservice.getReasonWithDetailsUnchecked();
    }

    @PutMapping("/updateDetailChecked/{id}")
    public ResponseEntity<String> updateDetailChecked(@PathVariable int id) {
        Optional<Reason> optionalReason = reasonRepository.findById(id);
        if (optionalReason.isPresent()) {
            Reason reason = optionalReason.get();
            reason.setDetailChecked(true);
            reasonRepository.save(reason);
            return new ResponseEntity<>("DetailChecked value updated for student with ID " + id, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Student not found with ID " + id, HttpStatus.NOT_FOUND);
        }
    }


}
