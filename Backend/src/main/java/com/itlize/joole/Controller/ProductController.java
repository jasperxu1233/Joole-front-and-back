package com.itlize.joole.Controller;

import com.itlize.joole.Entity.Product;
import com.itlize.joole.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/getAllProduct")
    public ResponseEntity<?> getAllProducts() {     //all users can get all products from the product pool.
        List<Product> products = productService.findAllProduct();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    //couldnt test
    @GetMapping("/search")     //all users can search products from the product pool.
    public ResponseEntity<?> searchProduct(@RequestParam(name = "manufacturer") String manufacturer) {
        List<Product> products = productService.findAllByManufacturer(manufacturer);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    //add several search: airflow,
    //by range
    //and retrieve a list
}
