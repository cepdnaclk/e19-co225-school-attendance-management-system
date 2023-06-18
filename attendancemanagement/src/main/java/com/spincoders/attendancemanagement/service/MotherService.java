package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Mother;

import java.util.List;

public interface MotherService {

    public Mother saveMother(Mother mother);

    public List<Mother> getAllMother();
}
