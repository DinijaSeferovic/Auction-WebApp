package com.auctionapp.controllers;

import com.auctionapp.dto.CategoryDTO;
import com.auctionapp.services.CategoryService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:8080")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/main")
    public List<CategoryDTO> getMainCategories() {
        return categoryService.getMainCategories();
    }

    @GetMapping
    public List<CategoryDTO> getCategories() {
        return categoryService.getCategories();
    }
}
