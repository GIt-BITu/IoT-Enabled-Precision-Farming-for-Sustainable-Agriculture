import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import ReviewCard from '../Dashboard/ReviewCard';
import { reviewsData } from './reviewsData';

const ReviewsContent = () => {
    return (
        <>
            <SectionHeader title="Recent Reviews">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviewsData.map(review => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </div>
            </SectionHeader>
        </>
    );
};

export default ReviewsContent;