package com.itlize.joole.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping("/hello")
    public String HelloWorld() {
        return "Hello World, I'm from Vu and Haojie project!"; 
    }
}
