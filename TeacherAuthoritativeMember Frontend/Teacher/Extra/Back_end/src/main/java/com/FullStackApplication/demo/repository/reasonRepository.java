package com.FullStackApplication.demo.repository;

import com.FullStackApplication.demo.model.Reason;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface reasonRepository extends JpaRepository<Reason,Integer> {
    List<Reason> findByDetailCheckedFalse();

}
