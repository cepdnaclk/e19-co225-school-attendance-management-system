package com.spincoders.attendancemanagement.repo;

import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Studentrepo extends JpaRepository<Student,Integer> {

    @Query("SELECT u FROM Student u WHERE u.studnetID = :studnetID")
    Student findByID(@Param("studnetID") int studnetID);
}
