package com.itlize.joole.Service.Servicelmp;

import com.itlize.joole.Entity.User;
import com.itlize.joole.Repository.UserRepository;
import com.itlize.joole.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class UserServicelmp implements UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    //@Lazy
    private PasswordEncoder passwordEncoder;

    @Override
    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User findByUsername(String username) {
        return userRepository.findById(username).orElse(null);
    }

//    new
    @Override
    public void updateUser(User userUpdated) {
        User userFromDB = userRepository.findById(userUpdated.getUsername()).orElse(null);
        userFromDB.setPassword(userUpdated.getPassword());
        userFromDB.setRole(userUpdated.getRole());
        userRepository.save(userFromDB);
    }

    //new
    @Override
    @Transactional
    public void deleteByUsername(String username) {
        userRepository.deleteByUsername(username);
    }


}

