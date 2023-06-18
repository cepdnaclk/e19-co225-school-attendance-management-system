package com.spincoders.attendancemanagement.service;
import com.spincoders.attendancemanagement.model.Classroom;
import com.spincoders.attendancemanagement.model.Teacher;

import java.util.List;

public interface ClassService {

    public Classroom saveClass(Classroom classroom);

    public List<Classroom> getAllClass();

/*    public Classroom findByName(String name);

    public Classroom updateTeachetID(String name, Teacher teacher);*/


}
