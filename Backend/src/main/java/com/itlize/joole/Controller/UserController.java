package com.itlize.joole.Controller;

import com.itlize.joole.Entity.Role;
import com.itlize.joole.Entity.User;
import com.itlize.joole.Service.MyUserDetailsService;
import com.itlize.joole.Service.UserService;
import com.itlize.joole.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private AuthenticationManager myauthenticaitonManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private MyUserDetailsService userDetailsService;

//    @CrossOrigin(origins = "http://localhost:3000/")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) throws Exception {
        try {
            myauthenticaitonManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );
        }
        catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }


        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(user.getUsername());

        final String jwt = jwtTokenUtil.generateToken(userDetails);

        return  new ResponseEntity<>(jwt, HttpStatus.OK);
    }

//    @CrossOrigin(origins = "http://localhost:3000/")
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userService.findByUsername(user.getUsername()) != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        user.setRole(Role.CONSUMER);
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.CREATED);
    }
}
