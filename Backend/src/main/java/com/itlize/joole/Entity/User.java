package com.itlize.joole.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="user")
@EntityListeners(AuditingEntityListener.class)
public class  User {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "username")
    private String username;

    private String password;

    @CreatedDate
    @Column(name = "user_created_date")
    private Date timeCreated;

    @LastModifiedDate
    @Column(name = "user_modified_date")
    private Date lasUpdated;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @JsonIgnore
    @OneToMany(targetEntity = Project.class,
            cascade = CascadeType.REMOVE,
            fetch = FetchType.LAZY,
            mappedBy = "user")
    private List<Project> projectList;

//    principal.projectList.add(new Projet);

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getTimeCreated() {
        return timeCreated;
    }

    public void setTimeCreated(Date timeCreated) {
        this.timeCreated = timeCreated;
    }

    public Date getLasUpdated() {
        return lasUpdated;
    }

    public void setLasUpdated(Date lasUpdated) {
        this.lasUpdated = lasUpdated;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public List<Project> getProjectList() {
        return projectList;
    }

    public void setProjectList(List<Project> projectList) {
        this.projectList = projectList;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", timeCreated=" + timeCreated +
                ", lasUpdated=" + lasUpdated +
                ", role='" + role + '\'' +
                '}';
    }
}
