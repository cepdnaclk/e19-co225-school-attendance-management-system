package com.spincoders.attendancemanagement.repo;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Mother;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Motherrepo extends JpaRepository<Mother, Integer> {
}
