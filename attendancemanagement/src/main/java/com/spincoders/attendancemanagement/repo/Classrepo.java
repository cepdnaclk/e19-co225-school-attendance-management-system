package com.spincoders.attendancemanagement.repo;

import com.spincoders.attendancemanagement.model.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Classrepo extends JpaRepository<Classroom, Integer> {
    /*Classroom findByName(String name);*/
}
