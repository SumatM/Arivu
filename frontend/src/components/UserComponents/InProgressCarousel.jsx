import React, { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Pages/LandingPageComponents/LandingPageComponent.css";
import Card from "../../Pages/LandingPageComponents/Card";
import LoadingComponent from "../../Pages/LoadingComponents/LoadingComponent";
import jwtDecode from "jwt-decode";
import axios from "axios";

const InProgressCarousel = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);
  // const arr = [1];
  var settings = {
    swipe: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const token = jwtDecode(localStorage.getItem("token"));
    // console.log(token.userId);
    const url = `http://localhost:8080/users/userCourse/${token.userId}`;

    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setCourse(res.data.course);
        console.log(res.data.course);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Flex direction={"column"} width="90%" p={"20px"} m={"auto"}>
      <Slider {...settings}>
        {!loading ? course.map((el) => <Card {...el} key={el._id} />) : ""}
      </Slider>
    </Flex>
  );
};

export default InProgressCarousel;
