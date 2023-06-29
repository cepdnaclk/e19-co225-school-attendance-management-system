package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Guardian;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface GuardianService {

    public Guardian saveGuardian(Guardian guardian);

    public List<Guardian> getAllGuardian();

    public Guardian findByEmail(String email);

    void updateGuardian(int id, Guardian updatedGuardian);

    Guardian getGuardianById(int guardianId);
}
