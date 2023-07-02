package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Mother;

import java.util.List;

public interface MotherService {

    public Mother saveMother(Mother mother);

    public List<Mother> getAllMother();

    public Mother findByEmail(String email);

    void updateMother(int id, Mother updatedMother);

    Mother getMotherById(int motherID);
}
