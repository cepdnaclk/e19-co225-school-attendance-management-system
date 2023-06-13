package webapplication.Registerlogin.Service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import webapplication.Registerlogin.Dto.MemberDTO;
import webapplication.Registerlogin.Entity.Member;
import webapplication.Registerlogin.Repo.MemberRepo;
import webapplication.Registerlogin.Service.MemberService;

@Service
public class MemberIMPL implements MemberService {

    private final MemberRepo memberRepo;

    private final PasswordEncoder passwordEncoder;

    public MemberIMPL(MemberRepo memberRepo, PasswordEncoder passwordEncoder) {
        this.memberRepo = memberRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public String addMember(MemberDTO memberDTO) {
        Member member = new Member(
                memberDTO.getMemberid(),
                memberDTO.getMembername(),
                memberDTO.getEmail(),

                this.passwordEncoder.encode(memberDTO.getPassword())
        );
        memberRepo.save(member);



        return member.getMembername();
    }
}
