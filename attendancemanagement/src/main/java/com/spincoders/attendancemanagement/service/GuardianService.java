package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Guardian;
import com.spincoders.attendancemanagement.model.Mother;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface GuardianService {

    public Guardian saveGuardian(Guardian guardian);

    public List<Guardian> getAllGuardian();

    public Guardian findByEmail(String email);
}
