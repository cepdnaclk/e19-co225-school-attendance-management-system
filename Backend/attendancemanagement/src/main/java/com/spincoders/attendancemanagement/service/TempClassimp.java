package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.TempClass;
import com.spincoders.attendancemanagement.repo.TempClassRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TempClassimp implements TempClassService{

    @Autowired
    private TempClassRepo tempClassRepo;

    @Override
    public List<TempClass> findByName(String tempClassName) {
        return tempClassRepo.findTempClassByName(tempClassName);
    }
}
