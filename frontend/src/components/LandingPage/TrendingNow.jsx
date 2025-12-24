import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Container } from "./Container";

export const TrendingNow = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://healthkart-clone-backend.onrender.com/products/trendingnow")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.tagBox}>
      <div className={styles.tag}>
        <div className={styles.tagName}>
          <h3 style={{ margin: "0px" }}>Trending Now</h3>
        </div>
        <div>
          <button className={styles.viewAllBtn}>View All</button>
        </div>
      </div>
      <Carousel
        // additionalTransfrom={0}
        arrows
        autoPlay={false}
        autoPlaySpeed={20000}
        centerMode={false}
        containerClass="container"
        customLeftArrow={
          <ArrowCircleLeftIcon
            sx={{
              color: "#00AFAE",
              backgroundColor: "transparent",
              width: "35px",
              height: "35px",
              cursor: "pointer",
              position: "absolute",
              left: "0px",
            }}
          />
        }
        customRightArrow={
          <ArrowCircleRightIcon
            sx={{
              color: "#00AFAE",
              backgroundColor: "transparent",
              width: "35px",
              height: "35px",
              cursor: "pointer",
              position: "absolute",
              right: "0px",
            }}
          />
        }
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 750,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 460,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 750,
              min: 460,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={4}
        swipeable
        className={styles.carouselBox}
      >
        {data.map((item, index) => (
          <Container item={item} key={index}/>
        ))}
      </Carousel>
    </div>
  );
};
