package com.studentadd.fullstack.Service;

import com.studentadd.fullstack.model.Father;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FatherService {

    public Father saveFather(Father father);



    public List<Father> getAllFather();

    public Father findByEmail(String email);

}