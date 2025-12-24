import React from 'react';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "./LandingPage.module.css";

export const SwiperSlider = () => {
    const images = [
        {"imgUrl": "https://img1.hkrtcdn.com/19091/bnr_1909070_o.jpg"},
        {"imgUrl": "https://img1.hkrtcdn.com/18903/bnr_1890260_o.jpg"},
        {"imgUrl": "https://img5.hkrtcdn.com/19091/bnr_1909074_o.jpg"},
        {"imgUrl": "https://img3.hkrtcdn.com/19242/bnr_1924152_o.jpg"},
        {"imgUrl": "https://img1.hkrtcdn.com/19201/bnr_1920050_o.jpg"},
        {"imgUrl": "https://img9.hkrtcdn.com/19339/bnr_1933808_o.jpg"},
        {"imgUrl": "https://img6.hkrtcdn.com/14609/bnr_1460845_o.png"},
        {"imgUrl": "https://img5.hkrtcdn.com/18548/bnr_1854724_o.jpg"}
    ]
  return (
    <div>
        <Carousel
            interval = {5000}
            autoPlay= {true}
            infiniteLoop = {false}
            indicators = {false}
            cycleNavigation = {false}
            NavButton={({onClick, className, style, next, prev}) => {
                return (
                    <div onClick={onClick} className={className}>
                        {next && <ArrowForwardIosIcon sx={{color: "rgb(119,156,191)", backgroundColor: "transparent", width: "60px", height:"60px", marginTop: "130px", marginBottom: "135.5px", paddingRight: "30px",cursor: "pointer" }}/>}
                        {prev && <ArrowBackIosIcon sx={{color: "rgb(119,156,191)", backgroundColor: "transparent", width: "60px", height:"60px", marginTop: "130px", marginBottom: "135.5px", paddingLeft: "30px", cursor: "pointer"}}/>}
                    </div>
                )
            }}
            >
            {images.map((image, index) => (
                <img src={image.imgUrl} className= {styles.swiperImg } alt="Swiper Slider" key={index}/>
            ))}
        </Carousel>
    </div>
  )
}
