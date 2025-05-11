package com.example.backend.reviews.service;

import com.example.backend.reviews.dto.ReviewDTO;
import com.example.backend.reviews.dto.ReviewResponseDTO;
import com.example.backend.reviews.exception.ResourceNotFoundException;
import com.example.backend.reviews.model.Review;
import com.example.backend.reviews.repository.ReviewRepository;
import com.example.backend.reviews.util.ReviewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final ReviewMapper reviewMapper;

    public Page<ReviewResponseDTO> getAllReviews(Pageable pageable) {
        return reviewRepository.findAllByOrderByCreatedAtDesc(pageable)
                .map(reviewMapper::toResponseDTO);
    }

    public List<ReviewResponseDTO> getAllReviews() {
        return reviewRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(reviewMapper::toResponseDTO)
                .collect(Collectors.toList());
    }

    public ReviewResponseDTO getReviewById(Long id) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with id: " + id));
        return reviewMapper.toResponseDTO(review);
    }

    @Transactional
    public ReviewResponseDTO createReview(ReviewDTO reviewDTO) {
        Review review = reviewMapper.toEntity(reviewDTO);
        Review savedReview = reviewRepository.save(review);
        return reviewMapper.toResponseDTO(savedReview);
    }

    @Transactional
    public ReviewResponseDTO updateReview(Long id, ReviewDTO reviewDTO) {
        Review existingReview = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with id: " + id));

        reviewMapper.updateReviewFromDTO(reviewDTO, existingReview);
        Review updatedReview = reviewRepository.save(existingReview);
        return reviewMapper.toResponseDTO(updatedReview);
    }

    @Transactional
    public void deleteReview(Long id) {
        if (!reviewRepository.existsById(id)) {
            throw new ResourceNotFoundException("Review not found with id: " + id);
        }
        reviewRepository.deleteById(id);
    }

    public List<ReviewResponseDTO> getReviewsByStars(Integer stars) {
        return reviewRepository.findByStars(stars).stream()
                .map(reviewMapper::toResponseDTO)
                .collect(Collectors.toList());
    }

    public Page<ReviewResponseDTO> getReviewsByStars(Integer stars, Pageable pageable) {
        return reviewRepository.findByStarsOrderByCreatedAtDesc(stars, pageable)
                .map(reviewMapper::toResponseDTO);
    }
}