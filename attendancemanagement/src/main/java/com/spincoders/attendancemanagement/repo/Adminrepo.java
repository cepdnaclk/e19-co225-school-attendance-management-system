package com.spincoders.attendancemanagement.repo;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Adminrepo extends JpaRepository<Admin, Integer> {

    @Query("SELECT u FROM Admin u WHERE u.username = :username")
    Admin findByUsername(@Param("username") String username);

}
