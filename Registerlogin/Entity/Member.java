package webapplication.Registerlogin.Entity;

import jakarta.persistence.*;


@Entity
@Table(name="member")
public class Member {
   @Id
    @Column(name= "member_Id",length=45)
   @GeneratedValue(strategy = GenerationType.AUTO)
    private int memberid;

   @Column(name= "member_name",length = 255)
    private String membername;

   @Column(name= "email",length=255)
    private String email;

   @Column(name= "password",length=255)
    private String password;

    public Member(int memberid, String membername, String email, String password) {
        this.memberid = memberid;
        this.membername = membername;
        this.email = email;
        this.password = password;
    }

    public Member() {
    }

    public int getMemberid() {
        return memberid;
    }

    public void setMemberid(int memberid) {
        this.memberid = memberid;
    }

    public String getMembername() {
        return membername;
    }

    public void setMembername(String membername) {
        this.membername = membername;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Member{" +
                "memberid=" + memberid +
                ", membername='" + membername + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
