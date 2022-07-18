package com.auctionapp.services;

import com.auctionapp.domains.Product;
import com.auctionapp.dto.ProductDTO;
import com.auctionapp.repositories.ProductRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ProductService  {

    private final ProductRepository productRepository;

    private final ModelMapper modelMapper = new ModelMapper();

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductDTO getHighlightProduct() {
        return convertEntityToDto(productRepository.findTopByEndDateAfterOrderByEndDateAsc(LocalDateTime.now()));
    }

    public ProductDTO getProduct(UUID id) {
        return convertEntityToDto(productRepository.findById(id));
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