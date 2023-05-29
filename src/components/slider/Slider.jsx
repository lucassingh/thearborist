import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';
import CardItem from '../card/CardItem';
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const CustomButtonGroupAsArrows = ({ next, previous, goToSlide, ...rest }) => {

    const { carouselState: { currentSlide } } = rest;

    return (
        <div style={{marginTop: '30px'}}>
            <FiArrowLeft style={{cursor:'pointer'}} size={30} className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            <FiArrowRight style={{cursor:'pointer'}} size={30} onClick={() => goToSlide(currentSlide + 1)} />
        </div>
    );
};

const Slider = () => {

    const { t } = useTranslation("global");

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={true}
            className=""
            containerClass="container-padding-bottom"
            customButtonGroup={<CustomButtonGroupAsArrows />}
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={5}
        >
            <CardItem title={t('cardsSlider.title1')} text={t('cardsSlider.text1')} />
            <CardItem title={t('cardsSlider.title2')} text={t('cardsSlider.text2')} />
            <CardItem title={t('cardsSlider.title3')} text={t('cardsSlider.text3')} />
            <CardItem title={t('cardsSlider.title4')} text={t('cardsSlider.text4')} />         
        </Carousel>
    )
}

export default Slider