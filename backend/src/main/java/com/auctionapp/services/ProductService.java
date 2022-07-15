package com.auctionapp.services;

import com.auctionapp.domains.Product;
import com.auctionapp.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService  {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getHighlightProduct() {
        return productRepository.findTopByOrderByIdDesc();
    }

    public void addNewProduct(Product product) {
    }
    public List<Product> getProductsLastChance(int page, int limit) {
        Pageable paging = PageRequest.of(page, limit, Sort.by(Sort.Order.asc("endDate")));
        Page<Product> pagedResult = productRepository.findAll(paging);
        return pagedResult.toList();
    }

    public List<Product> getProductsNewArrivals(int page, int limit) {
        Pageable paging = PageRequest.of(page, limit, Sort.by(Sort.Order.desc("startDate")));
        Page<Product> pagedResult = productRepository.findAll(paging);
        return pagedResult.toList();
    }
}
