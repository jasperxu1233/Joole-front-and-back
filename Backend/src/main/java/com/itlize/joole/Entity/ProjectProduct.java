package com.itlize.joole.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="projectProduct")
@EntityListeners(AuditingEntityListener.class)
public class ProjectProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "project_product_id")
    private Long id;

    @CreatedDate
    @Column(name = "project_product_created_date")
    private Date timeCreated;

    @LastModifiedDate
    @Column(name = "project_product_modified_date")
    private Date lastUpdated;

//    @JsonIgnore
    @ManyToOne(targetEntity = Product.class, cascade = CascadeType.DETACH)
//    @Column(name = "product")
    private Product product;


//    @JsonIgnore
    @ManyToOne(targetEntity = Project.class, cascade = CascadeType.DETACH)
//    @Column(name = "project")
    private Project project;

    public ProjectProduct() {
    }

    public ProjectProduct(Long id, Product product, Project project) {
        this.id = id;
        this.product = product;
        this.project = project;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    @Override
    public String toString() {
        return "ProjectProduct{" +
                "id=" + id +
                ", timeCreated=" + timeCreated +
                ", lastUpdated=" + lastUpdated +
                ", product=" + product +
                ", project=" + project +
                '}';
    }
}
