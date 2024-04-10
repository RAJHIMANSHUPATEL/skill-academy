import React from 'react';
import './Recruiters.css';
import recruiters from '../data/recruitersUrl';

function Recruiters() {

    
    return (
        <div className="recruiters section section-center">
            <h3>Our Top Recruiters</h3>
            <hr />
            <div className="recruiter-info">
                {
                    recruiters.map((recruiter) => {
                        const { id, url, title } = recruiter;
                        return (
                            <div key={id} >
                                <img src={url} alt={title} />
                            </div>
                        )
                    })
                }
            </div>
    </div>
    )
}

export default Recruiters