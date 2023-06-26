package com.spincoders.attendancemanagement.repo;

import com.spincoders.attendancemanagement.model.Guardian;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Guardianrepo extends JpaRepository<Guardian, Integer> {

    @Query("SELECT u FROM Guardian u WHERE u.email = :email")
    Guardian findByEmail(@Param("email") String email);

}