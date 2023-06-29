package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);

    public List<Student> getAllStudent();

    public void deleteStudentById(int id);

    Student getStudentById(int studentId);
}
