package com.example.backend.reviews.repository;

import com.example.backend.reviews.model.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    Page<Review> findAllByOrderByCreatedAtDesc(Pageable pageable);
    List<Review> findAllByOrderByCreatedAtDesc();
    List<Review> findByStars(Integer stars);
    Page<Review> findByStarsOrderByCreatedAtDesc(Integer stars, Pageable pageable);
}