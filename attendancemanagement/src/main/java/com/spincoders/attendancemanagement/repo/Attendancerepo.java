package com.spincoders.attendancemanagement.repo;

import com.spincoders.attendancemanagement.model.Admin;
import com.spincoders.attendancemanagement.model.Attendence;
import com.spincoders.attendancemanagement.model.Father;
import com.spincoders.attendancemanagement.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Attendancerepo extends JpaRepository<Attendence, Integer> {

    @Query("SELECT u FROM Attendence u WHERE u.studentID = :studentid and u.presence = false and u.note is NULL ")
    List<Attendence> findAbsentStudent(@Param("studentid") int studentid);

    @Query("SELECT u FROM Attendence u WHERE u.studentID = :studentid and u.presence = false and u.note is not NULL ")
    List<Attendence> findAbsentNote(@Param("studentid") int studentid);

    @Query("SELECT u FROM Attendence u WHERE u.attendenceID = :attendenceid")
    Attendence findByID(@Param("attendenceid") int attendenceid);

}
