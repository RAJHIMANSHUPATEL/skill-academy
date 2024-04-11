import React from 'react';
import { FaComments } from 'react-icons/fa';
import reviews from '../data/reviews'
import './Review.css'

function Reviews() {
    return (
        <div className="reviews section ">
            <h3>Reviews from Our Students</h3>
            <div className="cards section-center">
                {
                    reviews.map((person) => {
                        const { review, id, name, company } = person;
                        return (
                            <div key={id} className='review-card'>
                                <FaComments className='profile-img' />
                                <h4 className="name">{name}</h4>
                                <h5>Placed At</h5>
                                <p className='company'>{company}</p>
                                <p className="review">
                                    {review.substring(0, 100)}...
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Reviews