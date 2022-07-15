package com.auctionapp.services;

import com.auctionapp.domains.Category;
import com.auctionapp.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getMainCategories() {
        return categoryRepository.findTop9ByOrderByIdAsc();
    }

    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

}
