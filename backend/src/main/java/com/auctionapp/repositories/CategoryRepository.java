package com.auctionapp.repositories;

import com.auctionapp.domains.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    List< Category > findTop9ByOrderByIdAsc();
}
