package com.auctionapp.services;

import com.auctionapp.domains.Product;
<<<<<<< HEAD
import com.auctionapp.dto.ProductDTO;
import com.auctionapp.repositories.ProductRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
=======
import com.auctionapp.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
>>>>>>> f5b062e... Add product classes
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
=======
import java.util.List;
>>>>>>> f5b062e... Add product classes

@Service
public class ProductService  {

    private final ProductRepository productRepository;

<<<<<<< HEAD
    private final ModelMapper modelMapper = new ModelMapper();

=======
    @Autowired
>>>>>>> f5b062e... Add product classes
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

<<<<<<< HEAD
    public ProductDTO getHighlightProduct() {
        return convertEntityToDto(productRepository.findTopByEndDateAfterOrderByEndDateAsc(LocalDateTime.now()));
    }

    public List< ProductDTO > getProductsLastChance(int page, int limit){
        Pageable paging = PageRequest.of(page, limit, Sort.by(Sort.Order.asc("endDate")));
        Page< Product > pagedResult = productRepository.findByEndDateAfter(LocalDateTime.now(), paging);
        return pagedResult
                .toList()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    public List< ProductDTO > getProductsNewArrivals(int page, int limit){
        Pageable paging = PageRequest.of(page, limit, Sort.by(Sort.Order.desc("startDate")));
        Page< Product > pagedResult = productRepository.findByEndDateAfter(LocalDateTime.now(), paging);
        return pagedResult
                .toList()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    public List< ProductDTO > getProducts(){
        return productRepository.findAll()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    private ProductDTO convertEntityToDto(Product product){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        ProductDTO productDTO = modelMapper.map(product, ProductDTO.class);
        return productDTO;
    }
}

=======
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
>>>>>>> f5b062e... Add product classes
