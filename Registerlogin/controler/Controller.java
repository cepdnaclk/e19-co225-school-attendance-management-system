package webapplication.Registerlogin.controler;

import org.springframework.web.bind.annotation.*;
import webapplication.Registerlogin.Dto.MemberDTO;
import webapplication.Registerlogin.Service.MemberService;


@RestController
@CrossOrigin
@RequestMapping("api/v1/controller")


public class Controller {
    private final MemberService memberService;

    public Controller(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping(path = "/save" )
    public String saveMember(@RequestBody MemberDTO memberDTO){
        return memberService.addMember(memberDTO);
    }





}
