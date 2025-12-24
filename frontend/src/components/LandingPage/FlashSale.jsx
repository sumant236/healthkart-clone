
import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Container } from "./Container";

export const FlashSale = () => {
  const [val, setVal] = useState([]);
  useEffect(() => {
    fetch("https://healthkart-clone-backend.onrender.com/products/flashsale")
      .then((res) => res.json())
      .then((res) => {
        setVal(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.tagBox}>
      <div className={styles.tag}>
        <div className={styles.tagName}>
          <img
            src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/flash-sale-black.svg"
            className={styles.tagImg}
            alt=""
          />
          <h3 style={{ margin: "0px" }}>Flash Sale</h3>
        </div>
        <div>
          <button className={styles.viewAllBtn}>View All</button>
        </div>
      </div>
      <Carousel
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
        {val.map((item, index) => (
          <Container item={item} key={index} />
        ))}
      </Carousel>
    </div>
  );
};
