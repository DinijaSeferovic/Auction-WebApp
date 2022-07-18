package com.auctionapp.domains;

import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Category {
    @Id @Type(type = "pg-uuid")
    @Column(nullable = false)
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private String name;
}
