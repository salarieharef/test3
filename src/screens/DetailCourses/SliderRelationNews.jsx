import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
} from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../node_modules/swiper/swiper-bundle.min.js";
import { SingleArticleDetail } from "./SingleArticleDetail";
import "../../../node_modules/swiper/modules/virtual";
import http from '../../core/services/interceptor'
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";


const SliderRelationNews = ({ articelList }) => {


  const navigate = useNavigate()

  const handleClick = (idx) => {
     navigate(`/CourseMenuDetail/${idx}`)
   
  }

  const getCourseSlide =async () =>{
    const result = await http.get('Home/GetCoursesTop?Count=6' )
    return result;
  }

  const {data , status} = useQuery('CourseSlide' , getCourseSlide )


  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
        spaceBetween={50}
        breakpoints={{
          // when window width is >= 640px

          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={1}
        navigation={true}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        // scrollbar={{ draggable: true }}
      >
        <div className=" flex flex-row gap-16  ">
          {status === 'success' && (
              data.map((card, index) => {
              return (
                <SwiperSlide key={index}  onClick={()=>handleClick(card.courseId)}>
                  <SingleArticleDetail
                    id={card.id}
                    title={card.title}
                    date={card.statusName}
                    pic={card.imageAddress}
                  />
                </SwiperSlide>
              );
            })
          ) }
        </div>
      </Swiper>
    </>
  );
};
export { SliderRelationNews };
