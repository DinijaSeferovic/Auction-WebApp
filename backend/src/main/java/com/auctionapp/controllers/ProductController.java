package com.auctionapp.controllers;

import com.auctionapp.domains.Product;
import com.auctionapp.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8080")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

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
}
