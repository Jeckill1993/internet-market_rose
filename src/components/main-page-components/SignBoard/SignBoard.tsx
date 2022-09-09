import React from 'react';
import {Link} from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y, Lazy} from "swiper";

import 'swiper/css';

import classes from './SignBoard.module.css';

const SignBoard = () => {
    return (
        <section className={classes.signboard}>
            <Swiper
                modules={[Lazy, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className={classes.signboard_content}>
                        <Link to={'#'} className={[classes.signboard_content__bg, classes.signboard_content__bg_1].join(' ')}></Link>
                        <div className={classes.signboard_link}>
                            <Link to={'#'}><h1 className={classes.signboard_link__title}>Test 1</h1></Link>
                            <Link to={'#'} className={classes.signboard_link__text}>Go to...</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.signboard_content}>
                        <Link to={'#'} className={[classes.signboard_content__bg, classes.signboard_content__bg_2].join(' ')}></Link>
                        <div className={classes.signboard_link}>
                            <Link to={'#'}><h1 className={classes.signboard_link__title}>Test 2</h1></Link>
                            <Link to={'#'} className={classes.signboard_link__text}>Go to...</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.signboard_content}>
                        <Link to={'#'} className={[classes.signboard_content__bg, classes.signboard_content__bg_1].join(' ')}></Link>
                        <div className={classes.signboard_link}>
                            <Link to={'#'}><h1 className={classes.signboard_link__title}>Test 3</h1></Link>
                            <Link to={'#'} className={classes.signboard_link__text}>Go to...</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.signboard_content}>
                        <Link to={'#'} className={[classes.signboard_content__bg, classes.signboard_content__bg_2].join(' ')}></Link>
                        <div className={classes.signboard_link}>
                            <Link to={'#'}><h1 className={classes.signboard_link__title}>Test 4</h1></Link>
                            <Link to={'#'} className={classes.signboard_link__text}>Go to...</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default SignBoard;