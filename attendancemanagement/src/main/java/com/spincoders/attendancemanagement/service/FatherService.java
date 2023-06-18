package com.spincoders.attendancemanagement.service;

import com.spincoders.attendancemanagement.model.Father;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FatherService {

    public Father saveFather(Father father);

    public List<Father> getAllFather();

}
