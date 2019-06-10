import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel, CarouselItem} from "react-bootstrap";
import crash from './Images/crash.jpg'
import callduty from './Images/callduty1.jpg'
import fifa from './Images/fifa.jpg'
import './Styles/carrusel.css'

class Carrusel extends React.Component
{
    render()
    {
        return(
          <div className='carrusel'>

              <Carousel>
            <Carousel.Item>
              <img
                className="d-flex w-100" 
                //src="http://pipsum.com/435x310.jpg"
                src={crash}
                alt="First slide"
                box-shadow='2px 2px 10px #666'
              />
             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-100 ;"
                //src="http://pipsum.com/435x310.jpg"
                src={callduty}
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-100 "
                //src="http://pipsum.com/435x310.jpg"
                src={fifa}
                alt="Third slide"
              />
          
           
            </Carousel.Item>
          </Carousel>
          </div>
            
          );
    }
}
export default Carrusel;