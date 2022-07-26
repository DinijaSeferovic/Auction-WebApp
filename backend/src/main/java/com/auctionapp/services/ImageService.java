package com.auctionapp.services;

import com.auctionapp.domains.Image;
import com.auctionapp.dto.ImageDTO;
import com.auctionapp.repositories.ImageRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ImageService {

    private final ImageRepository imageRepository;

    private final ModelMapper modelMapper = new ModelMapper();

    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    public List< ImageDTO > getImagesByProductId(UUID id){
        return imageRepository.findByProductId(id)
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    private ImageDTO convertEntityToDto(Image image){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        ImageDTO imageDTO = modelMapper.map(image, ImageDTO.class);
        return imageDTO;
    }
}
