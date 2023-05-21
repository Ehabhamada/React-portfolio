import './test.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data =[
  {
    id: 1,
    avatar:avatar4,
    name: "Sarah Abdullah",
    message: "The Front-End designs provided by the company were amazing. I am extremely pleased with the results and can't wait to work with them again!"
  },
  {
    id: 2,
    avatar:avatar2,
    name: "Ahmed Khalid",
    message: "Thank you so much to the design team at the company. The website they delivered for our company perfectly reflects our vision and needs. We are thrilled with the results!"
  },
  {

    id: 3,
    avatar:avatar3,
    name: "Mohammed Ali",
    message: "It has been a fantastic experience working with the company. Our website was executed with precision and high professionalism. I highly recommend their services!"
  },
  {
    id: 4,
    avatar:avatar1,
    name: "Linda Johnson",
    message: "I couldn't be happier with the Front-End designs created by the company. The team truly understands our brand and has exceeded our expectations."
  }
];
function Testimonials() {

  return (
    <section id='Testimonials' >
      <h5 data-aos="fade-right">Review from clintes</h5>
      <h2 data-aos="fade-left">Testimonials</h2>
      <Swiper data-aos="zoom-in" data-aos-delay="300" className="container Testimonials_container" 
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {data.map(({id,avatar,name,message})=>{
          return(
            <SwiperSlide key={id} className="Testimonial">
          <div className="client_avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <h5 className="client-name">{name}</h5>
            <small className='client_Review'>{message}</small>
        </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials