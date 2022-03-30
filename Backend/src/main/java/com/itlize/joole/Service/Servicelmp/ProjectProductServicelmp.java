package com.itlize.joole.Service.Servicelmp;

import com.itlize.joole.Entity.Product;
import com.itlize.joole.Entity.Project;
import com.itlize.joole.Entity.ProjectProduct;
import com.itlize.joole.Repository.ProjectProductRepository;
import com.itlize.joole.Service.ProjectProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectProductServicelmp implements ProjectProductService {
    @Autowired
    ProjectProductRepository projectProductRepository;

    @Override
    public ProjectProduct createProjectProduct(ProjectProduct projectProduct) {
        return projectProductRepository.save(projectProduct);
    }

    @Override
    public ProjectProduct addProductToProject(Project project, Product product) {
        ProjectProduct projectProduct = projectProductRepository.findAllByProductAndProject(product, project);
        if(projectProduct != null){
            return projectProduct;
        }
        ProjectProduct projectProduct1 = new ProjectProduct();
        projectProduct1.setProduct(product);
        projectProduct1.setProject(project);
        return createProjectProduct(projectProduct1);
    }

//    @Override
//    public ProjectProduct addProductToProjectUsingId(Long productId, Long projectId) {
//        ProjectProduct projectProduct = new ProjectProduct();
//        projectProduct.setProduct(productService.);
//        projectProduct.setProject(project);
//        createProjectProduct(projectProduct);
//        return projectProduct;
//    }

    @Override
    public ProjectProduct findById(Long projectProductId) {
        return projectProductRepository.findById(projectProductId).orElse(null);
    }

    @Override
    @Transactional
    public String deleteByProductAndProject(Product product, Project project) {
        ProjectProduct projectProduct = projectProductRepository.findAllByProductAndProject(product, project);
        if(projectProduct == null){
            return "There is no product under project with those ids.";
        }
        projectProductRepository.deleteByProductAndProject(product, project);
        return "The product has been deleted from the project.";
    }

    @Override
    public List<Product> findAllProductByProject(Project project) {
        List<Product> products = new ArrayList<>();
        List<ProjectProduct> projectProducts = projectProductRepository.findAllByProject(project).orElse(null);
        if(projectProducts == null){
            return null;
        }
        for (ProjectProduct projectProduct : projectProducts) {
            products.add(projectProduct.getProduct());
        }
        return products;
    }

    @Override
    public List<Project> findAllProjectByProduct(Product product, String userName) {
        List<Project> projects = new ArrayList<>();
        List<ProjectProduct> projectProducts = projectProductRepository.findAllByProduct(product).orElse(null);
        if(projectProducts == null){
            return null;
        }
        for (ProjectProduct projectProduct : projectProducts) {
            Project project = projectProduct.getProject();
            if(project.getUser().getUsername().equals(userName)){
                projects.add(project);
            }
        }
        return projects;
    }

//    @Override
//    public void deleteByProduct(Product product) {
//        projectProductRepository.deleteByProduct(product);
//    }
//
//    @Override
//    public void deleteByProject(Project project) {
//        projectProductRepository.deleteByProject(project);
//    }


}
