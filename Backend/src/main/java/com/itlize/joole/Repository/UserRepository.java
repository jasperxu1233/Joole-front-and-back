package com.itlize.joole.Repository;

import com.itlize.joole.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    //new
    void deleteByUsername (String username);

}