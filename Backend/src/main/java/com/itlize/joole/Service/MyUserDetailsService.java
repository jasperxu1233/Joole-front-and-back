package com.itlize.joole.Service;

import com.itlize.joole.Entity.User;
import com.itlize.joole.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;

@Service

public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;



    /*** During login verification, obtain all the user's authority information
     * through username* And return UserDetails to spring's global cache SecurityContextHolder
     * for use by the authorizer*/

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findById(username).orElse(null);
        if(user == null){
            throw new UsernameNotFoundException(username);
        }

        Collection<GrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().name()));

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }
}

