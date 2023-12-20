// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination, Zoom } from 'swiper/modules';

const ProjectSlides = ({ item_1, item_2, item_3, item_4 }) => {
    return (
        <div className=' bg-black w-full border-4 border-white md:border-r-8 md:border-r-black'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                zoom={true}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Zoom]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' swiper-zoom-container'>
                        <img src={item_1} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' swiper-zoom-container'>
                        <img src={item_2} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' swiper-zoom-container'>
                        <img src={item_3} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' swiper-zoom-container'>
                        <img src={item_4} />
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default ProjectSlides;