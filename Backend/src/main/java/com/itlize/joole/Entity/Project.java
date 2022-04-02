package com.itlize.joole.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "projects")
@EntityListeners(AuditingEntityListener.class)
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "project_id")
    private Long id;

    @Column(nullable = false, unique = true)
    private String projectName;


    @ManyToOne(targetEntity = User.class)
//    @Column(name = "user_id")
    private User user;

    @JsonIgnore
    @OneToMany (targetEntity = ProjectProduct.class,
            cascade = CascadeType.REMOVE,
            fetch = FetchType.LAZY
//            , mappedBy = "projects"               //=> what cost the entityManagerFactory errors
    )
    private List<ProjectProduct> projectProductList;

    @CreatedDate
    @Column(name = "project_created_date")
    private Date timeCreated;

    @LastModifiedDate
    @Column(name = "project_modified_date")
    private Date lastUpdated;

    public Project() {
    }

    public Project(String projectName, User user) {
        this.projectName = projectName;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<ProjectProduct> getProjectProductList() {
        return projectProductList;
    }

    public void setProjectProductList(List<ProjectProduct> projectProductList) {
        this.projectProductList = projectProductList;
    }

    public Date getTimeCreated() {
        return timeCreated;
    }

    public void setTimeCreated(Date timeCreated) {
        this.timeCreated = timeCreated;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(Date lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", projectName='" + projectName + '\'' +
                ", user=" + user +
                ", timeCreated=" + timeCreated +
                ", lastUpdated=" + lastUpdated +
                '}';
    }
}
