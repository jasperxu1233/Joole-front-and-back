package com.itlize.joole.Service.Servicelmp;

import com.itlize.joole.Entity.Product;
import com.itlize.joole.Entity.Project;
import com.itlize.joole.Entity.User;
import com.itlize.joole.Repository.ProductRepository;
import com.itlize.joole.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServicelmp implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product findByProductId(Long productId) {
        return productRepository.findById(productId).orElse(null);
    }

    @Override
    public List<Product> findAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> findAllByManufacturer(String manufacturer) {
        return productRepository.findAllByManufacturer(manufacturer).orElse(null);
    }

    @Override
    public List<Product> findByFanSpeedMinGreaterThanEqual(double fanSpeedMin) {
        return productRepository.findByFanSpeedMinGreaterThanEqual(fanSpeedMin).orElse(null);
    }

    @Override
    public List<Product> findByFanSpeedMaxIsLessThanEqual(double fanSpeedMax) {
        return productRepository.findByFanSpeedMaxIsLessThanEqual(fanSpeedMax).orElse(null);
    }

    //new
    @Override
    public void updateProduct(Product productUpdated) {
        Product productFromDB = productRepository.findById(productUpdated.getId()).orElse(null);
        productFromDB.setManufacturer(productUpdated.getManufacturer());
        productFromDB.setSeries(productUpdated.getSeries());
        productFromDB.setModel(productUpdated.getModel());
        productFromDB.setUseType(productUpdated.getUseType());
        productFromDB.setApplication(productUpdated.getApplication());
        productFromDB.setMountingLocation(productUpdated.getMountingLocation());
        productFromDB.setAccessories(productUpdated.getAccessories());
        productFromDB.setModelYear(productUpdated.getModelYear());
        productFromDB.setAirflow(productUpdated.getAirflow());
        productFromDB.setPowerMax(productUpdated.getPowerMax());
        productFromDB.setPowerMin(productUpdated.getPowerMin());
        productFromDB.setOperatingVoltageMax(productUpdated.getOperatingVoltageMax());
        productFromDB.setOperatingVoltageMin(productUpdated.getOperatingVoltageMin());
        productFromDB.setFanSpeedMax(productUpdated.getFanSpeedMax());
        productFromDB.setFanSpeedMin(productUpdated.getFanSpeedMin());
        productFromDB.setNumberOfFanSpeeds(productUpdated.getNumberOfFanSpeeds());
        productFromDB.setSoundAtMaxSpeed(productUpdated.getSoundAtMaxSpeed());
        productFromDB.setFanSweepDiameter(productUpdated.getFanSweepDiameter());
        productFromDB.setHeightMax(productUpdated.getHeightMax());
        productFromDB.setHeightMin(productUpdated.getHeightMin());
        productFromDB.setWeight(productUpdated.getWeight());

        productRepository.save(productFromDB);
    }

    //new
    @Override
    public void deleteProduct(Product product) {
        productRepository.deleteById(product.getId());
    }
}
