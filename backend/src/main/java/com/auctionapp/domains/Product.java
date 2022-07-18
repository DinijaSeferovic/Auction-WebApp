package com.auctionapp.domains;

import lombok.*;
import org.hibernate.annotations.Formula;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Product {
    @Id @Type(type = "pg-uuid")
    @Column(nullable = false)
    @GeneratedValue
    private UUID id;
    @Column(nullable = false)
    private String name;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;
    @ManyToOne
    @JoinColumn(name = "subcategory_id", referencedColumnName = "id")
    private Subcategory subcategory;
    @Column(nullable = false)
    private String description;
    @Column
    private String imagePath;
    @Column
    private UUID sellerId;
    @Column(nullable = false)
    private Double startPrice;
    @Column(columnDefinition = "TIMESTAMP", nullable = false)
    private LocalDateTime startDate;
    @Column(columnDefinition = "TIMESTAMP", nullable = false)
    private LocalDateTime endDate;
    @Column
    private UUID buyerId;
}


