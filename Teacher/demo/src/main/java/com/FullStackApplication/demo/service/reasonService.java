package com.FullStackApplication.demo.service;

import com.FullStackApplication.demo.model.Reason;
import java.util.List;

public interface reasonService {

    public Reason saveReason(Reason reason);
    public List<Reason> getAllReason();

    List<Reason> getReasonWithDetailsUnchecked();

}
