package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Guardian;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface GuardianService {

    public Guardian saveGuardian(Guardian guardian);

    public List<Guardian> getAllGuardian();

    public Guardian findByEmail(String email);
}
