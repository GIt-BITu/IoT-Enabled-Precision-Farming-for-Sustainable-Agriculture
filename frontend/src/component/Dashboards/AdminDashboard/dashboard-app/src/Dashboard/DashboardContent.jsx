import React from 'react';
import StatCard from './StatCard.jsx';
import ChartSection from './ChartSection.jsx';
import ReviewCard from './ReviewCard.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import { chartData, reviewsData } from './dashboardData.jsx';

const DashboardContent = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <StatCard title="Visitors (Today +1)" value="+20K" />
                <StatCard title="New Users (+3.5% +1)" value="+4.5K" />
                <StatCard title="Income (+32.8% +1)" value="+$150K" color="green" />
            </div>

            <ChartSection data={chartData} />

            <SectionHeader title="Recent Reviews" buttonText="View All">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviewsData.map(review => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </div>
            </SectionHeader>
        </>
    );
};

export default DashboardContent;