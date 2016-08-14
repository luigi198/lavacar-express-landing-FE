import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FontAwesome from 'react-fontawesome';

export default React.createClass({
    render() {
        return <div className="data-info-container footer-container">
            <Row>
                <Col xs={4} md={4}>
                    <FontAwesome name="phone"/>&nbsp;
                    Tel:&nbsp;<a href="tel:83336777">83336777</a>
                </Col>
                <Col xs={4} md={4} className="footer-center">
                    <a href="https://www.facebook.com/Auto-Lavado-San-Antonio-Curridabat-1743735082571501/"><FontAwesome name="facebook-official"/></a>
                </Col>
                <Col xs={4} md={4} className="footer-right">
                    <FontAwesome name="envelope"/>&nbsp;
                    Correo:&nbsp;<a href="mailto:1958wilbert@gmail.com">1958wilbert@gmail.com</a>
                </Col>
            </Row>
        </div>;
    }
})
