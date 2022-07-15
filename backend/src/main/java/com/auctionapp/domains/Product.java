package com.auctionapp.domains;

<<<<<<< HEAD
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


=======
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table
public class Product {
    @Id
    @SequenceGenerator(
            name = "product_sequence",
            sequenceName = "product_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "product_sequence"
    )
    private Integer id;
    private String name;
    private Integer categoryId;
    private Integer subcategoryId;
    private String description;
    private String image;
    private Integer sellerId;
    private Double startPrice;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime startDate;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime endDate;
    private Boolean active;
    private Boolean sold;
    private String size;
    private String color;
    private Integer buyerId;

    public Product() {
    }

    public Product(String name, Integer categoryId, Integer subcategoryId, String description, String image, Integer sellerId, Double startPrice, LocalDateTime startDate, LocalDateTime endDate, Boolean active, Boolean sold, String size, String color, Integer buyerId) {
        this.name = name;
        this.categoryId = categoryId;
        this.subcategoryId = subcategoryId;
        this.description = description;
        this.image = image;
        this.sellerId = sellerId;
        this.startPrice = startPrice;
        this.startDate = startDate;
        this.endDate = endDate;
        this.active = active;
        this.sold = sold;
        this.size = size;
        this.color = color;
        this.buyerId = buyerId;
    }

    public Product(Integer id, String name, Integer categoryId, Integer subcategoryId, String description, String image, Integer sellerId, Double startPrice, LocalDateTime startDate, LocalDateTime endDate, Boolean active, Boolean sold, String size, String color, Integer buyerId) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.subcategoryId = subcategoryId;
        this.description = description;
        this.image = image;
        this.sellerId = sellerId;
        this.startPrice = startPrice;
        this.startDate = startDate;
        this.endDate = endDate;
        this.active = active;
        this.sold = sold;
        this.size = size;
        this.color = color;
        this.buyerId = buyerId;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public Integer getSubcategoryId() {
        return subcategoryId;
    }

    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public Integer getSellerId() {
        return sellerId;
    }

    public Double getStartPrice() {
        return startPrice;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public Boolean getActive() {
        return active;
    }

    public Boolean getSold() {
        return sold;
    }

    public String getSize() {
        return size;
    }

    public String getColor() {
        return color;
    }

    public Integer getBuyerId() {
        return buyerId;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public void setSubcategoryId(Integer subcategoryId) {
        this.subcategoryId = subcategoryId;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setSellerId(Integer sellerId) {
        this.sellerId = sellerId;
    }

    public void setStartPrice(Double startPrice) {
        this.startPrice = startPrice;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public void setSold(Boolean sold) {
        this.sold = sold;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setBuyerId(Integer buyerId) {
        this.buyerId = buyerId;
    }
}
>>>>>>> f5b062e... Add product classes
