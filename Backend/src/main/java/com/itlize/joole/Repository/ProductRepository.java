package com.itlize.joole.Repository;

import com.itlize.joole.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findAll();

    //Optional: will return objects or null, prevent throwing Exception
    Optional<List<Product>> findAllByManufacturer(String manufacturer);

    Optional<List<Product>> findByFanSpeedMinGreaterThanEqual(double fanSpeedMin);

    Optional<List<Product>> findByFanSpeedMaxIsLessThanEqual(double fanSpeedMax);

    //new
    void deleteById(Long id);
}
