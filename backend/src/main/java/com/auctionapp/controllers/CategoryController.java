package com.auctionapp.controllers;

import com.auctionapp.domains.Category;
import com.auctionapp.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8080")
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/category/main-categories")
    public List<Category> getMainCategories() {
        return categoryService.getMainCategories();
    }

    @GetMapping("/categories")
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }
}
