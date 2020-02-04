import React, { Fragment } from 'react';
import SlickSlider from '../shared/slider/SlickSlider';
import MainSlider from '../shared/slider/MainSlider';
import ProductSectionContainer from '../../containers/products/ProductSectionContainer';
import ResponsiveDialog from '../shared/dialog/CustomDialog';
import { TextField } from '@material-ui/core';

function HomePage(props) {
    return (
        <Fragment>
            <SlickSlider settings={{ slidesToShow: 1, dots: false, arrows: true, slidesToScroll: 1, autoplay: true }}>
                <MainSlider />
                <MainSlider />
            </SlickSlider>
            <ProductSectionContainer isFullWidth>
            </ProductSectionContainer>
            {/* <ResponsiveDialog title="Thong tin san pham" /> */}
    
        <ResponsiveDialog render={(attrs)=>(
            <TextField label="Email" placeholder="Email..."/>
        )}/>
        <ProductSectionContainer isFullWidth slickSettings={{
                slidesToShow: 5, centerMode: true,
                rows: 2,
                dots: false, slidesToScroll: 4, autoplay: true
            }}>
        </ProductSectionContainer>
        </Fragment>
    )
}

export default HomePage;