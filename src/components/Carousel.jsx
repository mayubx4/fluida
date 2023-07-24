import React from 'react';
import clsx from 'clsx';
import { Typography, Grid } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Thumbs,EffectFade } from 'swiper';
import useStyles from '../themes/CarouselStyles';
import unsplash1 from '../assets/images/unsplash1.png';
import github from '../assets/images/githubBlack.svg';
import github1 from '../assets/images/github.svg';
import mimi from '../assets/images/mimi.jpg';
import surface from '../assets/images/surface.jpg';

SwiperCore.use([Navigation, Autoplay, Thumbs,EffectFade]);
const CarouselSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.heading}>Lorem ipsum dolor sit amet</Typography>
        <Typography className={classes.subHeading}>Lorem ipsum dolor sit amet, consectetur</Typography>
      </div>
      <div>
        <Swiper effect="fade"
          loop="true"
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          <SwiperSlide className={classes.swiper}>
            <img src={unsplash1} alt="swiper" className={classes.imgSwiper} />            
          </SwiperSlide>
          <SwiperSlide className={classes.swiper}>
            <img src={mimi} alt="swiper" className={classes.imgSwiper} />
          </SwiperSlide>
          <SwiperSlide className={classes.swiper}>
            <img src={surface} alt="swiper" className={classes.imgSwiper} />
          </SwiperSlide>
        </Swiper>
        <div className={classes.founderBo} style={{backgroundColor:'#fcebde'}}>
        <div className={classes.swiperFooter}>
              <div className={classes.swiperTitle}> John Doe, Co-founder </div>
              <div className={classes.swiperBody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuxsod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </div>
              <div>
                <img src={github} alt="git" height="21px" />
              </div>
              <div className={clsx('swiper-button-next', classes.swiperNav, classes.swipeNxt)} />
              <div className={clsx('swiper-button-prev', classes.swiperNav, classes.swipePrev)} />
            </div>
        </div>
        <Swiper effect="fade"
          loop="true"
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          <SwiperSlide className={classes.swiper}>
            

            <div className={classes.founderBoxes}>
              <Grid container spacing={8} justify="center">
                <Grid item xs={6} lg={4}>
                  <div className={classes.founderBox}>
                    <img src={unsplash1} alt="swiper" className={classes.founderImg} />
                    <div className={classes.swiperFooter1}>
                      <div className={classes.swiperTitle1}> John Doe, Co-founder </div>
                      <div>
                        <img src={github1} alt="git" height="21px" />
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6} lg={4}>
                  <div className={classes.founderBox}>
                    <img src={surface} alt="swiper" className={classes.founderImg} />
                    <div className={classes.swiperFooter1}>
                      <div className={classes.swiperTitle1}> John Doe, Co-founder </div>
                      <div>
                        <img src={github1} alt="git" height="21px" />
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={7} lg={4}>
                  <div className={classes.founderBox}>
                    <img src={mimi} alt="swiper" className={classes.founderImg} />
                    <div className={classes.swiperFooter1}>
                      <div className={classes.swiperTitle1}> John Doe, Co-founder </div>
                      <div>
                        <img src={github1} alt="git" height="21px" />
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.swiper}>
           
            <div className={classes.founderBoxes}>
              <Grid container spacing={8} justify="center">
                <Grid item xs={6} lg={4}>
                  <div className={classes.founderBox}>
                    <img src={surface} alt="swiper" className={classes.founderImg} />
                    <div className={classes.swiperFooter1}>
                      <div className={classes.swiperTitle1}> John Doe, Co-founder </div>
                      <div>
                        <img src={github1} alt="git" height="21px" />
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6} lg={4}>
                  <div className={classes.founderBox}>
                    <img src={mimi} alt="swiper" className={classes.founderImg} />
                    <div className={classes.swiperFooter1}>
                      <div className={classes.swiperTitle1}> John Doe, Co-founder </div>
                      <div>
                        <img src={github1} alt="git" height="21px" />
                      </div>
                    </div>
                  </div>
                </Grid>
                {/* <Grid item xs={3} /> */}
                <Grid item xs={7} lg={4}>
                  <div className={classes.founderBox}>
                    <img src={unsplash1} alt="swiper" className={classes.founderImg} />
                    <div className={classes.swiperFooter1}>
                      <div className={classes.swiperTitle1}> John Doe, Co-founder </div>
                      <div>
                        <img src={github1} alt="git" height="21px" />
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.swiper}>
            
            <div className={classes.founderBoxes}>
              <Grid container spacing={8} justify="center">
                <Grid item xs={6} lg={4}>
                  <div className={classes.founderBox}>
                    <img src={mimi} alt="swiper" className={classes.founderImg} />
                    <div className={classes.swiperFooter1}>
                      <div className={classes.swiperTitle1}> John Doe, Co-founder </div>
                      <div>
                        <img src={github1} alt="git" height="21px" />
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6} lg={4}>
                  <div className={classes.founderBox}>
                    <img src={unsplash1} alt="swiper" className={classes.founderImg} />
                    <div className={classes.swiperFooter1}>
                      <div className={classes.swiperTitle1}> John Doe, Co-founder </div>
                      <div>
                        <img src={github1} alt="git" height="21px" />
                      </div>
                    </div>
                  </div>
                </Grid>
                {/* <Grid item xs={3} /> */}
                <Grid item xs={7} lg={4}>
                  <div className={classes.founderBox}>
                    <img src={surface} alt="swiper" className={classes.founderImg} />
                    <div className={classes.swiperFooter1}>
                      <div className={classes.swiperTitle1}> John Doe, Co-founder </div>
                      <div>
                        <img src={github1} alt="git" height="21px" />
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselSection;
