package com.itlize.joole.Repository;

import com.itlize.joole.Entity.Product;
import com.itlize.joole.Entity.Project;
import com.itlize.joole.Entity.ProjectProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProjectProductRepository extends JpaRepository<ProjectProduct, Long> {
    void deleteByProductAndProject(Product product, Project project);

    Optional<List<ProjectProduct>> findAllByProject(Project project);

    Optional<List<ProjectProduct>> findAllByProduct(Product product);

    void deleteAllByProject(Project project);

    ProjectProduct findAllByProductAndProject(Product product, Project project);

//    void deleteByProduct(Product product);
//
//    void deleteByProject(Project project);
}
