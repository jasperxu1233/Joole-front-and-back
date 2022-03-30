package com.itlize.joole.Service;

import com.itlize.joole.Entity.Product;
import com.itlize.joole.Entity.Project;
import com.itlize.joole.Entity.User;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface ProjectService {
    Project creatProject(Project project);

    Project findByProjectId(Long projectId);

    List<Project> findAll();

    List<Project> findAllByUser(User user);

    Project findByProjectName(String projectName);

    void deleteProjectByProjectId(Long projectId, User user);

    String deleteProjectByProjectName(String projectName, User user);

    //update
    Project updateProject(String projectNameNew, Project project);

    Project createProjectByProjectName(String projectName, User user);

    List<Project> deleteAllByUser(User user);
}
