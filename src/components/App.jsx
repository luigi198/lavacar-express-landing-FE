import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Header from './header.component.jsx';
import Footer from './footer.component.jsx';
import ImgCarrousel from './imgCarrousel.component.jsx';

export default React.createClass({
    render() {
        return <Grid>
            <Header></Header>

            <ImgCarrousel></ImgCarrousel>

            {this.props.children}

            <Footer></Footer>
        </Grid>
    }
})
