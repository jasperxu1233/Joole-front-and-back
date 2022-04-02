package com.itlize.joole.Service;

import com.itlize.joole.Entity.Product;
import com.itlize.joole.Entity.Project;
import com.itlize.joole.Entity.ProjectProduct;
import com.itlize.joole.Entity.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.annotation.Transient;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProjectProductServiceTest {

    @Autowired
    UserService userService;
    @Autowired
    ProjectService projectService;
    @Autowired
    ProductService productService;
    @Autowired
    ProjectProductService projectProductService;

//    @Test
//    void createProjectProduct() {
//        User user1 = userService.findByUsername("cccc");
//        Project project1 = projectService.findByProjectName("project.test1");
//        Project project2 = projectService.findByProjectName("project.test2");
//
//        Product product1 = productService.findByProductId(1L);
//        Product product2 = productService.findByProductId(2L);
//        Product product3 = productService.findByProductId(3L);
//
//
//        ProjectProduct projectProduct1 = new ProjectProduct(product1, project1);
//        ProjectProduct projectProduct2 = new ProjectProduct(product2, project1);
//
//
//        ProjectProduct projectProduct3 = new ProjectProduct(product3, project2);
//
//
//        projectProductService.createProjectProduct(projectProduct1);
//        projectProductService.createProjectProduct(projectProduct2);
//        projectProductService.createProjectProduct(projectProduct3);
//
//        Assertions.assertNotNull(projectProduct1);
//        Assertions.assertNotNull(projectProduct2);
//        Assertions.assertNotNull(projectProduct3);
//    }
//
//    @Test
//    void findById() {
//        User user2 = new User("projectProduct.user2", "222", "basic");
//        userService.createUser(user2);
//        Project project2 = new Project(22L, "projectProduct.test2", user2);
//        projectService.creatProject(project2);
//        Product product2 = new Product();
//        product2.setId(1234L);
//        product2.setFanSpeedMax(100);
//        productService.createProduct(product2);
//
//        ProjectProduct projectProduct2 = new ProjectProduct(2L, product2, project2);
//        projectProductService.createProjectProduct(projectProduct2);
//
//        System.out.println("---------------------");
//        System.out.println(projectProductService.findById(2L));
//
////        Assertions.assertTrue(projectProductService.findById(2L).getProduct().getId() == 1234L);
//    }
//
//    @Test
//    @Transactional
//    void deleteByProductIdAndProjectId() {
//        User user3 = new User("projectProduct.user3", "333", "basic");
//        userService.createUser(user3);
//        Project project3 = new Project(33L, "projectProduct.test3", user3);
//        projectService.creatProject(project3);
//        Product product3 = new Product();
//        product3.setId(12345L);
//        product3.setFanSpeedMax(100);
//        productService.createProduct(product3);
//
//        ProjectProduct projectProduct3 = new ProjectProduct(3L, product3, project3);
//        projectProductService.createProjectProduct(projectProduct3);
//
//        System.out.println("---------------------");
//        System.out.println(projectProductService.findById(3L));
//
////        Assertions.assertTrue(projectProductService.findById(3L).getProduct().getId() == 12345L);
//
////        projectProductService.deleteByProductIdAndProjectId(12345L, 33L);
//
////        Assertions.assertNull(projectProductService.findById(3L));
//    }
//
//    @Test
//    @Transactional
//    void deleteByProductIdAndProjectId2() {
//        projectProductService.deleteByProductIdAndProjectId(3L, 10L);
//    }
//
//
//    @Test
//    void findByProjectId() {
//        User user4 = new User("projectProduct.user4", "444", "basic");
//        userService.createUser(user4);
//        Project project4 = new Project(44L, "projectProduct.test4", user4);
//        projectService.creatProject(project4);
//        Product product4 = new Product();
//        product4.setId(123456L);
//        product4.setFanSpeedMax(100);
//        productService.createProduct(product4);
//
//        ProjectProduct projectProduct4 = new ProjectProduct(4L, product4, project4);
////        projectProductService.createProjectProduct(projectProduct4);
//
//        System.out.println("---------------------");
//        System.out.println(projectProductService.findByProjectId(44L));
////        Assertions.assertEquals(projectProductService.findByProjectId(44L).size(), 1);
//    }
//
//    @Test
//    void findByProductId() {
//        User user5 = new User("projectProduct.user5", "555", "basic");
//        userService.createUser(user5);
//        Project project5 = new Project(55L, "projectProduct.test5", user5);
//        projectService.creatProject(project5);
//        Product product5 = new Product();
//        product5.setId(12345678L);
//        product5.setFanSpeedMax(100);
//        productService.createProduct(product5);
//
//        ProjectProduct projectProduct5 = new ProjectProduct(5L, product5, project5);
//        projectProductService.createProjectProduct(projectProduct5);
//
//        System.out.println("---------------------");
//        System.out.println(projectProductService.findByProductId(12345678L));
//        Assertions.assertEquals(projectProductService.findByProductId(12345678L).size(), 1);
//    }

//    @Test
//    @Transactional
//    void deleteByProduct() {
//        User user6 = new User("projectProduct.user6", "6666", "basic");
//        userService.createUser(user6);
//        Project project6 = new Project(66L, "projectProduct.test6", user6);
//        projectService.creatProject(project6);
//        Product product6 = new Product();
//        product6.setId(123L);
//        product6.setFanSpeedMax(100);
//        productService.createProduct(product6);
//
//        ProjectProduct projectProduct6 = new ProjectProduct(69L, product6, project6);
//        projectProductService.createProjectProduct(projectProduct6);

//        Product productTobeDeleted = projectProductService.findByProductId(12345678L).get(0).getProduct();
//        projectProductService.deleteByProduct(productTobeDeleted);
//    }
}