import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../style/Carousel.scss';

const CarouselText = ({items}) => {
    return (
        <div className='carousel'>
            <Carousel controls={false} indicators={false}>
                {
                    items.map((item, key) => {
                        return (
                            <Carousel.Item className="carousel-text" key={key}> {item} </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </div>
    );
};

export default CarouselText;