import React from 'react';
import './Technologies.css'
import chatGpt from '../assets/chat-gpt.png'
import flask from '../assets/flask.png'
import matlab from '../assets/matlab.png'
import openCV from '../assets/OpenCV.png'
import pandas from '../assets/pandas.png'
import python from '../assets/python.png'
import pytorch from '../assets/pytorch.png'
import tensorFlow from '../assets/tensorflow.jpg'
import unity from '../assets/unity.webp'
import veritone from '../assets/veritone.png'

function Technologies() {
    return (
        <div className='section-center main'>
            <h3>Master These Technologies</h3>
            <div className='technologies  '>
                <div>
                    <img src={chatGpt} alt="tech-image" />
                </div>
                <div>
                    <img src={flask} alt="tech-image" />
                </div>
                <div>
                    <img src={matlab} alt="tech-image" />
                </div>
                <div>
                    <img src={openCV} alt="tech-image" />
                </div>
                <div>
                    <img src={pandas} alt="tech-image" />
                </div>
                <div>
                    <img src={python} alt="tech-image" />
                </div>
                <div>
                    <img src={pytorch} alt="tech-image" />
                </div>
                <div>
                    <img src={tensorFlow} alt="tech-image" />
                </div>
                <div>
                    <img src={unity} alt="tech-image" />
                </div>
                <div>
                    <img src={veritone} alt="tech-image" />
                </div>
            </div>
        </div>
    )
}

export default Technologies