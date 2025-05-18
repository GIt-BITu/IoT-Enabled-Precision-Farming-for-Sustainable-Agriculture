import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ stars }) => (
    <div className="flex">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={16}
                fill={i < stars ? "#FFD700" : "none"}
                stroke={i < stars ? "#FFD700" : "#CBD5E0"}
            />
        ))}
    </div>
);

export default StarRating;