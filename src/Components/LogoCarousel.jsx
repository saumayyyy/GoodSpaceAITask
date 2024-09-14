import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from "swiper/modules"
import LogoImage from "../assets/hotjar.jpg"


const LogoCarousel = () => {
    const logos = [
        { src: LogoImage, alt: "Logo" },
        { src: LogoImage, alt: "Logo" },
        { src: LogoImage, alt: "Logo" },
        { src: LogoImage, alt: "Logo" },
        { src: LogoImage, alt: "Logo" },
        { src: LogoImage, alt: "Logo" },
    ]

    return (
        <div className="carousel-container">
            <p className="carousel-text">USED BY OVER 50 ENTERPRISES</p>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                loop={true}
                freeMode={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="swiper-container"
            >
                {logos.map((logo, i) => (
                    <SwiperSlide key={i}>
                        <div className="logo-wrapper">
                            <img src={logo.src} alt={logo.alt} className="logo-image"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default LogoCarousel;
