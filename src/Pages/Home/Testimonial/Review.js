import React from 'react';

const Review = ({ review }) => {
    const { name, img, userReview, location } = review;
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex items-center mt-3">
                    <div className="avatar mr-4">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h5>{name}</h5>
                        <h6>{location}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;