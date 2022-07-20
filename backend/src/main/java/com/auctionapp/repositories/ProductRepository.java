package com.auctionapp.repositories;

import com.auctionapp.domains.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    Page< Product > findByEndDateAfter(LocalDateTime date, Pageable pageable);

    Product findTopByEndDateAfterOrderByEndDateAsc(LocalDateTime date);
<<<<<<< HEAD

    Product findById(UUID id);
}
=======
    Product findById(UUID id);
}
>>>>>>> 60f6f38... Implement product page features
