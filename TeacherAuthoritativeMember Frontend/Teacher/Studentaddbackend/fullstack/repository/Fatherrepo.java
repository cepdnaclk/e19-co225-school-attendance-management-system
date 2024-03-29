<<<<<<< Updated upstream
package com.studentadd.fullstack.repository;

import com.studentadd.fullstack.model.Father;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Fatherrepo extends JpaRepository<Father, Integer> {

    @Query("SELECT u FROM Father u WHERE u.email = :email")
    Father findByEmail(@Param("email") String email);
}
=======
package com.studentadd.fullstack.repository;

import com.studentadd.fullstack.model.Father;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Fatherrepo extends JpaRepository<Father, Integer> {

    @Query("SELECT u FROM Father u WHERE u.email = :email")
    Father findByEmail(@Param("email") String email);
}
>>>>>>> Stashed changes
