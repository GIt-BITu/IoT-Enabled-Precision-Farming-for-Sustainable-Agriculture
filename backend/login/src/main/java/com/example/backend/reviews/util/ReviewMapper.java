package com.example.backend.reviews.util;

import com.example.backend.reviews.dto.ReviewDTO;
import com.example.backend.reviews.dto.ReviewResponseDTO;
import com.example.backend.reviews.model.Review;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review toEntity(ReviewDTO reviewDTO);

    ReviewResponseDTO toResponseDTO(Review review);

    void updateReviewFromDTO(ReviewDTO dto, @MappingTarget Review review);
}