package com.itlize.joole.Service;

import com.itlize.joole.Entity.Project;
import com.itlize.joole.Entity.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ProjectServiceTest {

    @Autowired
    ProjectService projectService;
    @Autowired
    UserService userService;

//    @Test
//    void creatProject() {
//        User user1 = userService.findByUsername("cccc");

//        Project project1 = new Project();
//        project1.setProjectName("project.test1");
//        project1.setUser(user1);
//        projectService.creatProject(project1);

//        Project project2 = new Project();
//        project2.setProjectName("project.test2");
//        project2.setUser(user1);
//        projectService.creatProject(project2);

//        Project project3 = new Project();
//        project3.setProjectName("project.test3");
//        project3.setUser(user1);
//        projectService.creatProject(project3);

//        System.out.println(project1);
//        System.out.println(project2);
//        System.out.println(project3);

//        Assertions.assertNotNull(project1);
//        Assertions.assertNotNull(project2);
//        Assertions.assertNotNull(project3);
//    }
//
//    @Test
//  //  @Transactional
//    void findByProjectId() {
// //       User user3 = new User("project.user3", "333", "basic");
// //       userService.createUser(user3);
//  //      user3 = userService.findByUsername("project.user3");
//
//         User userTester = userService.findByUsername("test1");
//
//        Project project4 = new Project();
//        project4.setProjectName("project.test4");
//
//        project4.setUser(userTester);
//
//        projectService.creatProject(project4);
//
////        Project project4 = projectService.findByProjectId(334L);
//
////        System.out.println(project3);
//        System.out.println(project4);
//
//        Assertions.assertEquals(project4.getProjectName(),  projectService.findByProjectId(project4.getId()).getProjectName());
//       // Assertions.assertEquals(project3.getId(), project4.getId());
//      //  Assertions.assertEquals(project3.getUser().toString(), project4.getUser().toString());
//    }
//
//    @Test
//    void findAllByUser() {
//        User user5 = new User("project.user5", "555", "basic");
//        userService.createUser(user5);
//
//        Project project5 = new Project();
//        project5.setProjectName("project.test5");
//        project5.setId(5L);
//        project5.setUser(user5);
//
//        projectService.creatProject(project5);
//
//        Project project6 = new Project();
//        project6.setProjectName("project.test6");
//        project6.setId(6L);
//        project6.setUser(user5);
//
//        projectService.creatProject(project6);
//
//        Assertions.assertEquals(projectService.findAllByUser(new User("project.user5", "555", "basic")).size(), 2);
//    }
//
//    @Test
//    @Transactional
//    void deleteProjectByProjectId() {
//        User user7 = new User("project.user7", "777", "basic");
//        userService.createUser(user7);
//
//        Project project7 = new Project(7L,"project.test7", user7);
//        projectService.creatProject(project7);
//        Assertions.assertEquals(projectService.findAllByUser(user7).size(), 1);
//
//        projectService.deleteProjectByProjectId(7L);
//        Assertions.assertEquals(projectService.findAllByUser(user7).size(), 0);
//    }

//    @Test
//    void updateProject() {
//        User user8 = new User("project.user8", "888", "basic");
//        userService.createUser(user8);
//
//        Project project8 = new Project(8L,"project.test8", user8);
//        projectService.creatProject(project8);
//
//        project8.setProjectName("project.test8 NEW NAME");
//        projectService.updateProject(project8);
//        Assertions.assertEquals(projectService.findByProjectId(project8.getId()).getProjectName(), "project.test8 NEW NAME");
//    }
}