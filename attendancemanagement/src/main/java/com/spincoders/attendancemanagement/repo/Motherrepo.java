package com.spincoders.attendancemanagement.repo;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Mother;
import com.spincoders.attendancemanagement.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Motherrepo extends JpaRepository<Mother, Integer> {

    @Query("SELECT u FROM Mother u WHERE u.email = :email")
    Mother findByEmail(@Param("email") String email);
}
