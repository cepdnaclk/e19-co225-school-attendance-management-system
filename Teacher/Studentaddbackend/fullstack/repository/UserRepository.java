package com.studentadd.fullstack.repository;

import com.studentadd.fullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    // Model class and type of the primary key

}
