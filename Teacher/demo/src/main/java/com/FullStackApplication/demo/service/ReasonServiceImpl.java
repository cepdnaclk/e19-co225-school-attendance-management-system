package com.FullStackApplication.demo.service;

import com.FullStackApplication.demo.model.Reason;
import com.FullStackApplication.demo.repository.reasonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReasonServiceImpl implements reasonService{

    @Autowired
    private reasonRepository reasonRepository;

    public List<Reason> getReasonWithDetailsUnchecked() {
        return reasonRepository.findByDetailCheckedFalse();
    }
    @Override
    public Reason saveReason(Reason reason) {
        return reasonRepository.save(reason);
    }

    @Override
    public List<Reason> getAllReason() {
        return reasonRepository.findAll();
    }
}
