package com.spincoders.attendancemanagement.repo;

import com.spincoders.attendancemanagement.model.Classroom;
import com.spincoders.attendancemanagement.model.TempClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TempClassRepo extends JpaRepository<TempClass, Integer> {

    @Query("SELECT u FROM TempClass u WHERE u.tempClassName = :tempClassName")
    List<TempClass> findTempClassByName(@Param("tempClassName") String tempClassName);
}