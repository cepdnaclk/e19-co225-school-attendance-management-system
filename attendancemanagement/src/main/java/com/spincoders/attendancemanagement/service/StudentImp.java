package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Student;
import com.spincoders.attendancemanagement.repo.Studentrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentImp implements StudentService{

    @Autowired
    private Studentrepo studentrepo;

    @Override
    public Student saveStudent(Student student) {
        return studentrepo.save(student);
    }

    @Override
    public List<Student> getAllStudent() {
        return studentrepo.findAll();
    }

    @Override
    public void deleteStudentById(int id) {
        studentrepo.deleteById(id);
    }

    @Override
    public Student getStudentById(int studentId) {
        return studentrepo.findByID(studentId);
    }
}
