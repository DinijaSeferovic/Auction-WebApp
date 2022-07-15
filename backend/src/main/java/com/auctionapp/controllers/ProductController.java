package com.auctionapp.controllers;

<<<<<<< HEAD
import com.auctionapp.dto.ProductDTO;
import com.auctionapp.services.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
=======
import com.auctionapp.domains.Product;
import com.auctionapp.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
>>>>>>> f5b062e... Add product classes

import java.util.List;

@RestController
<<<<<<< HEAD
@RequestMapping("/api/products")
=======
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8080")
>>>>>>> f5b062e... Add product classes
public class ProductController {

    private final ProductService productService;

<<<<<<< HEAD
=======
    @Autowired
>>>>>>> f5b062e... Add product classes
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

<<<<<<< HEAD
    @GetMapping
    public List< ProductDTO > getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/highlight")
    public ProductDTO getHighlightProduct() {
        return productService.getHighlightProduct();
    }

    @GetMapping("/last-chance")
    public List< ProductDTO > getProductsLastChance(@RequestParam int page, @RequestParam int limit) {
        return productService.getProductsLastChance(page, limit);
    }

    @GetMapping("/new-arrivals")
    public List< ProductDTO > getProductsNewArrivals(@RequestParam int page, @RequestParam int limit) {
        return productService.getProductsNewArrivals(page, limit);
    }
=======
    @GetMapping("/products")
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/products/highlight-product")
    public Product getHighlightProduct() {
        return productService.getHighlightProduct();
    }

    @GetMapping("/products/last-chance")
    public List<Product> getProductsLastChance(@RequestParam int page, @RequestParam int limit) {
        return productService.getProductsLastChance(page, limit);
    }

    @GetMapping("/products/new-arrivals")
    public List<Product> getProductsNewArrivals(@RequestParam int page, @RequestParam int limit) {
        return productService.getProductsNewArrivals(page, limit);
    }

    @PostMapping("/product")
    public void postProduct(@RequestBody Product product) {
        productService.addNewProduct(product);
    }
>>>>>>> f5b062e... Add product classes
}
