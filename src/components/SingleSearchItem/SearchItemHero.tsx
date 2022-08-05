import React from "react";
import { Box, Container, Image } from "@chakra-ui/react";
import Hostel1 from "../../assets/home/hostel-image1.png";
import Hostel2 from "../../assets/home/hostel-image2.png";
import Hostel3 from "../../assets/home/hostel-image3.png";
import Hostel4 from "../../assets/home/hostel-image4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

const SearchItemHero = () => {
  return (
    <Container
      // maxW={{
      //   base: "100%",
      //   "2xl": "container.xl",
      // }}
      p={{ base: 0, sm: "16px" }}
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      <Box h={"455px"} mb="5.1875rem">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 70,
            },
          }}
          modules={[FreeMode, Navigation, Pagination]}
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
