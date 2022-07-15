package com.auctionapp.domains;

import javax.persistence.*;

@Entity
@Table
public class Subcategory {
    @Id
    @SequenceGenerator(
            name = "subcategory_sequence",
            sequenceName = "subcategory_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "subcategory_sequence"
    )
    private Integer id;
    private String name;
    private Integer categoryId;

    public Subcategory() {
    }

    public Subcategory(Integer id, String name, Integer categoryId) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
    }

    public Subcategory(String name, Integer categoryId) {
        this.name = name;
        this.categoryId = categoryId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }
}

