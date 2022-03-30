package com.itlize.joole.Service;

import com.itlize.joole.Entity.Product;
import com.itlize.joole.Entity.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProductServiceTest {

    @Autowired
    ProductService productService;

//    @Test
//    void createProduct() {
//        Product product1 = new Product();
//
//        product1.setModelYear(2018);
//        product1.setFanSpeedMin(69);
//        product1.setFanSpeedMax(420);
//        product1.setManufacturer("HAOJIE_LLC");
//
//        productService.createProduct(product1);
//    }
//
//    @Test
//    void createProduct2() {
//        Product product2 = new Product();
//
//        product2.setModelYear(2222);
//        product2.setFanSpeedMin(69);
//        product2.setFanSpeedMax(420);
//        product2.setManufacturer("HAOJIE_LLC");
//
//        productService.createProduct(product2);
//    }
//
//    @Test
//    void createProduct3() {
//        Product product3 = new Product();
//
//        product3.setModelYear(3333);
//        product3.setFanSpeedMin(69);
//        product3.setFanSpeedMax(420);
//        product3.setManufacturer("HAOJIE_LLC");
//
//        productService.createProduct(product3);
//    }

//    @Test
//    void findByProductId() {
//        Product product2 = new Product();
//        product2.setId(2L);
//        product2.setModelYear(2002);
//        product2.setFanSpeedMin(22);
//        product2.setFanSpeedMax(122);
//
//        productService.createProduct(product2);
//
//        System.out.println(product2);
//
//        Assertions.assertEquals(productService.findByProductId(2L).getModelYear(), 2002);
//        Assertions.assertEquals(productService.findByProductId(2L).getFanSpeedMin(), 22);
//        Assertions.assertEquals(productService.findByProductId(2L).getFanSpeedMax(), 122);
//    }
//
//    @Test
//    void findAllProduct() {
//        Product product3 = new Product();
//        product3.setId(3L);
//        product3.setModelYear(2003);
//        product3.setFanSpeedMin(33);
//        product3.setFanSpeedMax(133);
//
//        Product product4 = new Product();
//        product4.setId(4L);
//        product4.setModelYear(2004);
//        product4.setFanSpeedMin(44);
//        product4.setFanSpeedMax(144);
//
//        productService.createProduct(product3);
//        productService.createProduct(product4);
//
//        System.out.println("---------------------");
//        System.out.println(productService.findAllProduct());
//
//        Assertions.assertTrue(productService.findAllProduct().size() >= 2);
//        Assertions.assertEquals(productService.findByProductId(3L).getModelYear(), 2003);
//        Assertions.assertEquals(productService.findByProductId(4L).getModelYear(), 2004);
//    }
//
//    @Test
//    void findAllByManufacturer() {
//        Product product5 = new Product();
//        product5.setId(5L);
//        product5.setModelYear(2005);
//        product5.setFanSpeedMin(55);
//        product5.setFanSpeedMax(155);
//        product5.setManufacturer("Vu_LLC");
//
//
//        Product product6 = new Product();
//        product6.setId(6L);
//        product6.setModelYear(2006);
//        product6.setFanSpeedMin(66);
//        product6.setFanSpeedMax(166);
//        product6.setManufacturer("Vu_LLC");
//
//        productService.createProduct(product5);
//        productService.createProduct(product6);
//
//        System.out.println("---------------------");
//        System.out.println(productService.findAllByManufacturer("Vu_LLC"));
//
//        Assertions.assertTrue(productService.findAllByManufacturer("Vu_LLC").size() >= 2);
//        Assertions.assertEquals(productService.findByProductId(5L).getModelYear(), 2005);
//        Assertions.assertEquals(productService.findByProductId(6L).getModelYear(), 2006);
//    }
//
//    @Test
//    void findByFanSpeedMinGreaterThanEqual() {
//        Product product7 = new Product();
//        product7.setId(7L);
//        product7.setModelYear(2007);
//        product7.setFanSpeedMin(77);
//        product7.setFanSpeedMax(177);
//
//        Product product8 = new Product();
//        product8.setId(8L);
//        product8.setModelYear(2008);
//        product8.setFanSpeedMin(888);
//        product8.setFanSpeedMax(1888);
//
//        productService.createProduct(product7);
//        productService.createProduct(product8);
//
//        System.out.println("---------------------");
//        System.out.println(productService.findByFanSpeedMinGreaterThanEqual(70));
//
//        Assertions.assertTrue(productService.findByFanSpeedMinGreaterThanEqual(70).size() >= 2);
//
//        Assertions.assertTrue(productService.findByFanSpeedMinGreaterThanEqual(800).size() == 1);
//    }
//
//    @Test
//    void findByFanSpeedMaxIsLessThanEqual() {
//        Product product9 = new Product();
//        product9.setId(9L);
//        product9.setModelYear(2009);
//        product9.setFanSpeedMin(1);
//        product9.setFanSpeedMax(49);
//
//        Product product10 = new Product();
//        product10.setId(10L);
//        product10.setModelYear(2010);
//        product10.setFanSpeedMin(1);
//        product10.setFanSpeedMax(59);
//
//        productService.createProduct(product9);
//        productService.createProduct(product10);
//
//        System.out.println("---------------------");
//        System.out.println(productService.findByFanSpeedMaxIsLessThanEqual(60));
//
//        Assertions.assertTrue(productService.findByFanSpeedMaxIsLessThanEqual(60).size() >= 2);
//
//        Assertions.assertTrue(productService.findByFanSpeedMaxIsLessThanEqual(50).size() == 1);
//    }
}