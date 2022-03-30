package com.itlize.joole.Service;

import com.itlize.joole.Entity.Product;
import com.itlize.joole.Entity.User;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    Product createProduct(Product product);

    Product findByProductId(Long productId);

    List<Product> findAllProduct();

    List<Product> findAllByManufacturer(String manufacturer);

    List<Product> findByFanSpeedMinGreaterThanEqual(double fanSpeedMin);
    //need to change powerMin type to int in Product class

    List<Product> findByFanSpeedMaxIsLessThanEqual(double fanSpeedMax);
    //need to change fanSpeedMax type to int in Product class

    //update
    void updateProduct(Product product);

    //delete
    void deleteProduct(Product product);
}
