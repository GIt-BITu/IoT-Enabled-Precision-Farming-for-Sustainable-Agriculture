package com.example.backend.reviews.util;

import com.example.backend.reviews.dto.ReviewDTO;
import com.example.backend.reviews.dto.ReviewResponseDTO;
import com.example.backend.reviews.model.Review;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-05-18T18:28:35+0100",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.15 (Arch Linux)"
)
@Component
public class ReviewMapperImpl implements ReviewMapper {

    @Override
    public Review toEntity(ReviewDTO reviewDTO) {
        if ( reviewDTO == null ) {
            return null;
        }

        Review.ReviewBuilder review = Review.builder();

        review.id( reviewDTO.getId() );
        review.name( reviewDTO.getName() );
        review.review( reviewDTO.getReview() );
        review.stars( reviewDTO.getStars() );
        review.image( reviewDTO.getImage() );

        return review.build();
    }

    @Override
    public ReviewResponseDTO toResponseDTO(Review review) {
        if ( review == null ) {
            return null;
        }

        ReviewResponseDTO.ReviewResponseDTOBuilder reviewResponseDTO = ReviewResponseDTO.builder();

        reviewResponseDTO.id( review.getId() );
        reviewResponseDTO.name( review.getName() );
        reviewResponseDTO.review( review.getReview() );
        reviewResponseDTO.stars( review.getStars() );
        reviewResponseDTO.image( review.getImage() );
        reviewResponseDTO.createdAt( review.getCreatedAt() );

        return reviewResponseDTO.build();
    }

    @Override
    public void updateReviewFromDTO(ReviewDTO dto, Review review) {
        if ( dto == null ) {
            return;
        }

        review.setId( dto.getId() );
        review.setName( dto.getName() );
        review.setReview( dto.getReview() );
        review.setStars( dto.getStars() );
        review.setImage( dto.getImage() );
    }
}
