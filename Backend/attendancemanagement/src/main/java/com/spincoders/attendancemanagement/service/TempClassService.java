package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.TempClass;
import com.spincoders.attendancemanagement.repo.TempClassRepo;

import java.util.List;

public interface TempClassService {

    public List<TempClass> findByName(String tempClassName);
}
