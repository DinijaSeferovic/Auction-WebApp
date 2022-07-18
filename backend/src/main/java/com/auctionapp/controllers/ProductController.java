package com.auctionapp.controllers;

import com.auctionapp.dto.ProductDTO;
import com.auctionapp.services.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List< ProductDTO > getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/highlight")
    public ProductDTO getHighlightProduct() {
        return productService.getHighlightProduct();
    }

    @GetMapping("/{id}")
    public ProductDTO getProduct(@PathVariable UUID id) {
        return productService.getProduct(id);
    }

    @GetMapping("/last-chance")
    public List< ProductDTO > getProductsLastChance(@RequestParam int page, @RequestParam int limit) {
        return productService.getProductsLastChance(page, limit);
    }

    @GetMapping("/new-arrivals")
    public List< ProductDTO > getProductsNewArrivals(@RequestParam int page, @RequestParam int limit) {
        return productService.getProductsNewArrivals(page, limit);
    }
}