package webapplication.Registerlogin.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import webapplication.Registerlogin.Entity.Member;

@EnableJpaRepositories
@Repository
public interface MemberRepo extends JpaRepository <Member, Integer>{
    


}
