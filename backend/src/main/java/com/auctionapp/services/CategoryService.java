package com.auctionapp.services;

import com.auctionapp.domains.Category;
import com.auctionapp.dto.CategoryDTO;
import com.auctionapp.repositories.CategoryRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    private final ModelMapper modelMapper = new ModelMapper();

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List< CategoryDTO > getMainCategories(){
        return categoryRepository.findTop9ByOrderByIdAsc()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    public List< CategoryDTO > getCategories(){
        return categoryRepository.findAll()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    private CategoryDTO convertEntityToDto(Category category){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        CategoryDTO categoryDTO = modelMapper.map(category, CategoryDTO.class);
        return categoryDTO;
    }

}
