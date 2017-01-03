import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const zonaServicio = 'Zonas de Servicio';
const servicios = 'Servicios';
const comodin = 'Comodin';

export default React.createClass({
    render() {
        return <div className="data-info-container middle-container">
            <Row>
                <Col xs={12} md={4} className="afiche-container">
                    <img src="/assets/afiche-lavacar1.jpeg" />
                </Col>
                <Col xs={12} md={4} className="afiche-container">
                    <img src="/assets/afiche-lavacar2.jpeg" />
                </Col>
                <Col xs={12} md={4} className="afiche-container">
                    <img src="/assets/afiche-lavacar3.jpg" />
                </Col>
            </Row>
        </div>
    }
})
