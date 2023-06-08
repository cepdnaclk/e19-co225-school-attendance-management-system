package com.spincoders.attendancemanagement.repo;

import com.spincoders.attendancemanagement.model.Guardian;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Guardianrepo extends JpaRepository<Guardian, Integer> {


}
