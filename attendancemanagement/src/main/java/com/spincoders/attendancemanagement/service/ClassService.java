package com.spincoders.attendancemanagement.service;
import com.spincoders.attendancemanagement.model.Classroom;

import java.util.List;

public interface ClassService {

    public Classroom saveClass(Classroom classroom);

    public List<Classroom> getAllClass();


}
