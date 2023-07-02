package com.FullStackApplication.demo.repository;

import com.FullStackApplication.demo.model.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AttendeeRepository extends JpaRepository<Attendee, Long> {
    // Model class and type of the primary key
    List<Attendee> findBymarkAttendance(String markAttendance);
}
