package webapplication.Registerlogin.Dto;

public class MemberDTO {

    private final int memberid;
    private final String membername;

    private final String email;

    private final String password;

    public MemberDTO(int memberid, String membername, String email, String password) {
        this.memberid = memberid;
        this.membername = membername;
        this.email = email;
        this.password = password;
    }

    public int getMemberid() {
        return memberid;
    }

    public String getMembername() {
        return membername;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String toString() {
        return "MemberDTO{" +
                "memberid=" + memberid +
                ", membername='" + membername+ '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
