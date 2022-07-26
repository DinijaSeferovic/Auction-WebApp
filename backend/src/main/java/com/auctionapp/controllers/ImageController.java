package com.auctionapp.controllers;

import com.auctionapp.dto.ImageDTO;
import com.auctionapp.services.ImageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/images")
public class ImageController {

    private final ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping("/{id}")
    public List< ImageDTO > getImagesByProduct(@PathVariable UUID id) {
        return imageService.getImagesByProductId(id);
    }
}
