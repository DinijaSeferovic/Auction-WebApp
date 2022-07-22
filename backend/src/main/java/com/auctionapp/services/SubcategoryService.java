package com.auctionapp.services;

import com.auctionapp.repositories.SubcategoryRepository;
import org.springframework.stereotype.Service;

@Service
public class SubcategoryService {

    private final SubcategoryRepository subcategoryRepository;

    public SubcategoryService(SubcategoryRepository subcategoryRepository) {
        this.subcategoryRepository = subcategoryRepository;
    }
}
