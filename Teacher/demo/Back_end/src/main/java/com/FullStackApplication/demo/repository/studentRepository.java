package com.FullStackApplication.demo.repository;

import com.FullStackApplication.demo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface studentRepository extends JpaRepository<Student,Long> {
}
