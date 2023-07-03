<<<<<<< Updated upstream
package com.studentadd.fullstack.model;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TeacherID")
    private int teacherID;

    @Column(name = "Name")
    private String name;

    @Column(name = "Email")
    private String email;

    @Column(name = "Mobile")
    private String mobile;

    @Column(name = "Password")
    private String password;

    public Teacher(){

    }

    // Student-Teacher (Many-One)
    @OneToMany(mappedBy = "teacher", cascade = CascadeType.ALL)
    private List<Student> students = new ArrayList<>();


    // Teacher-Admin (Many-One)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "AdminID")
    private Admin admin;

    // Teacher-Class (One-One)
    @OneToOne(mappedBy = "teacher")
    private Classroom classroom;

    public int getTeacherID() {
        return teacherID;
    }

    public void setTeacherID(int teacherID) {
        this.teacherID = teacherID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public Classroom getaClass() {
        return classroom;
    }

    public void setaClass(Classroom classroom) {
        this.classroom = classroom;
    }
=======
package com.studentadd.fullstack.model;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TeacherID")
    private int teacherID;

    @Column(name = "Name")
    private String name;

    @Column(name = "Email")
    private String email;

    @Column(name = "Mobile")
    private String mobile;

    @Column(name = "Password")
    private String password;

    public Teacher(){

    }

    // Student-Teacher (Many-One)
    @OneToMany(mappedBy = "teacher", cascade = CascadeType.ALL)
    private List<Student> students = new ArrayList<>();


    // Teacher-Admin (Many-One)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "AdminID")
    private Admin admin;

    // Teacher-Class (One-One)
    @OneToOne(mappedBy = "teacher")
    private Classroom classroom;

    public int getTeacherID() {
        return teacherID;
    }

    public void setTeacherID(int teacherID) {
        this.teacherID = teacherID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public Classroom getaClass() {
        return classroom;
    }

    public void setaClass(Classroom classroom) {
        this.classroom = classroom;
    }
>>>>>>> Stashed changes
}