package com.itlize.joole.Service.Servicelmp;

import com.itlize.joole.Entity.Product;
import com.itlize.joole.Entity.Project;
import com.itlize.joole.Entity.User;
import com.itlize.joole.Repository.ProjectProductRepository;
import com.itlize.joole.Repository.ProjectRepository;
import com.itlize.joole.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectServicelmp implements ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    ProjectProductRepository projectProductRepository;

    @Override
    public Project creatProject(Project project) {//test_1

//        Project projectfromDB = projectRepository.findById(projectNew.getId());
//        if(projectfromDB == null){
//            System.out.println("no this project");
              return projectRepository.save(project);
//        }
//        return projectRepository.save(project);
//
//        System.out.println("delete the project " + project.getProjectName());
    }

    @Override
    public Project createProjectByProjectName(String projectName, User user) {
        Project project = new Project();
        project.setProjectName(projectName);

        Project projectfromDB = projectRepository.findByProjectName(projectName);
        if(projectfromDB != null){
            System.out.println("This project already existed");
            return projectfromDB;
        }
        project.setUser(user);
        user.getProjectList().add(project);
        return projectRepository.save(project);
    }

    @Override
    public Project findByProjectId(Long projectId) {
        return projectRepository.findById(projectId).orElse(null);
    }

    @Override
    public List<Project> findAll() {
        return projectRepository.findAll();
    }

    @Override
    public List<Project> findAllByUser(User user) {
        return projectRepository.findAllByUser(user).orElse(null);
    }

    @Override
    public Project findByProjectName(String projectName) {
        return projectRepository.findByProjectName(projectName);
    }

    @Override
    @Transactional
    public void deleteProjectByProjectId(Long id, User user) {
        Project project = projectRepository.getById(id);
        if(project == null || !project.getUser().getUsername().equals(user.getUsername())){
            System.out.println("no this project under the current user");
        }
        user.getProjectList().remove(project);
        projectProductRepository.deleteAllByProject(project);
        projectRepository.deleteProjectById(id);
        System.out.println("delete the project " + project.getProjectName());
    }

    @Override
    @Transactional
    public String deleteProjectByProjectName(String projectName, User user) {
        Project project = projectRepository.findByProjectName(projectName);
        if(project == null || !project.getUser().getUsername().equals(user.getUsername())){
            return "no this project under the current user";
        }
        user.getProjectList().remove(project);
        projectProductRepository.deleteAllByProject(project);
        projectRepository.deleteByProjectName(projectName);
        return "delete the project " + project.getProjectName();
    }

    @Override
    @Transactional
    public List<Project> deleteAllByUser(User user) {
        Optional<List<Project>> projects = projectRepository.findAllByUser(user);
        if(!projects.isPresent() || projects.get().size() == 0){
            return null;
        }
        user.setProjectList(null);
        for(Project project : projects.get()){
            projectProductRepository.deleteAllByProject(project);
        }
        return projectRepository.deleteAllByUser(user).orElse(null);
    }

    //new
    @Override
    public Project updateProject(String projectNameNew, Project project) {
        project.setProjectName(projectNameNew);
        return projectRepository.save(project);
    }
}
