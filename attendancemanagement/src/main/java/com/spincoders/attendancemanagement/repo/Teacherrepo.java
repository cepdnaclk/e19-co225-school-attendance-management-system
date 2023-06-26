package com.spincoders.attendancemanagement.repo;

import com.spincoders.attendancemanagement.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Teacherrepo extends JpaRepository<Teacher, Integer> {

    @Query("SELECT u FROM Teacher u WHERE u.email = :email")
    Teacher findByEmail(@Param("email") String email);
}
