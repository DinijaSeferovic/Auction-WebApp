package com.auctionapp.dto;

import com.auctionapp.domains.Category;
import com.auctionapp.domains.Subcategory;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    private UUID id;

    private String name;

    private Category category;

    private Subcategory subcategory;

    private String description;

    private String imagePath;

    private Integer sellerId;

    private Double startPrice;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    private Integer buyerId;
}
