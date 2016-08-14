import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

export default React.createClass({
    getInitialState() {
        return {
            width: 600,
            height: 400
        };
    },
    render() {
        return <Carousel>
            <Carousel.Item>
                <div className="carrousel-img-container">
                    <img className="carrousel-img" width={this.state.width} height={this.state.height} alt="900x500" src="/public/assets/image1.jpg"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carrousel-img-container">
                    <img className="carrousel-img" width={this.state.width} height={this.state.height} alt="900x500" src="/public/assets/image4.jpg"/>
                </div>
                <Carousel.Caption>
                    <h3>Lavado de motor</h3>
                    <p>Antes</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carrousel-img-container">
                    <img className="carrousel-img" width={this.state.width} height={this.state.height} alt="900x500" src="/public/assets/image5.jpg"/>
                </div>
                <Carousel.Caption>
                    <h3>Lavado de motor</h3>
                    <p>Después</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    }
})
