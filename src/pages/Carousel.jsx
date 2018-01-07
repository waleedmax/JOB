import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import './Carousel.css';
 
class DemoCarousel extends Component {
    render() {
        return (
    
            <Carousel showArrows={true}>

                <div>

                    <img src="http://lorempixel.com/900/500/sports/1/" />

                    <p className="legend">Legend 1</p>

                </div>

                <div>

                    <img src="http://lorempixel.com/900/500/sports/2/" />

                    <p className="legend">Legend 2</p>

                </div>

                <div>

                    <img src="http://lorempixel.com/900/500/sports/3/" />

                    <p className="legend">Legend 3</p>

                </div>

           
              

            </Carousel>
        );
    }
}
 

export default DemoCarousel 