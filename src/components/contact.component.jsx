import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FontAwesome from 'react-fontawesome';

export default React.createClass({
    render() {
        return <div className="data-info-container middle-container contact-info-container">
            <p>Realizamos limpiezas y lavados de carros a domicilio, si desea utilizar nuestros servicios o desea más información, abajo estan los datos de contacto.</p>
            <Row>
                <Col xs={4} md={4} xsOffset={5} mdOffset={5} >
                    <Row>
                        <Col xs={12} md={12}>
                            <h4>Wilbert Ramírez</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="contact-icon-container">
                                <FontAwesome name="phone"/>&nbsp;
                            </div>
                            <a href="tel:83336777">83336777</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="contact-icon-container">
                                <FontAwesome name="envelope"/>&nbsp;
                            </div>
                            <a href="mailto:1958wilbert@gmail.com">1958wilbert@gmail.com</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="contact-icon-container">
                                <FontAwesome name="facebook-official"/>
                            </div>
                            <a href="https://www.facebook.com/Auto-Lavado-San-Antonio-Curridabat-1743735082571501/"><span>Página Oficial</span></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    }
})
