package com.studentadd.fullstack.Service;

import com.studentadd.fullstack.model.Father;
import com.studentadd.fullstack.repository.Fatherrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FatherImp implements FatherService {

    @Autowired
    private Fatherrepo fatherrepo;

    @Override
    public Father saveFather(Father father) {
        return fatherrepo.save(father);
    }

    @Override
    public List<Father> getAllFather() {
        return fatherrepo.findAll();
    }

    @Override
    public Father findByEmail(String email) {
        return fatherrepo.findByEmail(email);
    }
}