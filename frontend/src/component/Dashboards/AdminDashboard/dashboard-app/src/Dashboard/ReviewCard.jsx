import React from 'react';
import StarRating from '../components/common/StarRating.jsx';
import Button from '../components/common/Button.jsx';

const ReviewCard = ({ name, image, review, stars }) => (
    <div className="bg-white p-4 rounded-md shadow-sm">
        <div className="flex items-center mb-3">
            <img src={image} alt={name} className="w-10 h-10 rounded-full mr-3" />
            <span className="font-medium">{name}</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">{review}</p>
        <div className="flex justify-between items-center">
            <StarRating stars={stars} />
            <Button>View</Button>
        </div>
    </div>
);

export default ReviewCard;