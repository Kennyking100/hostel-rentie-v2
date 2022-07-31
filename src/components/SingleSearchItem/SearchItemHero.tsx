import React from "react";
import { Box, Container, Image } from "@chakra-ui/react";
import Hostel1 from "../../assets/home/hostel-image1.png";
import Hostel2 from "../../assets/home/hostel-image2.png";
import Hostel3 from "../../assets/home/hostel-image3.png";
import Hostel4 from "../../assets/home/hostel-image4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

const SearchItemHero = () => {
  return (
    <Container
      maxW={{
        base: "100%",
        "2xl": "container.xl",
      }}
      p={0}
    >
      <Box h={"455px"} mb="5.1875rem">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={70}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={Hostel1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Hostel2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Hostel3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Hostel4} />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
};

export default SearchItemHero;
