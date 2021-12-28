import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from '../styles/Carousel.module.css'

export default function Carousel() {
  return (
    <div>
        <h2 className={styles.title}>Recomendações</h2>
        <Swiper
            slidesPerView={3}
            spaceBetween={15}
            breakpoints={{
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10
                }
            }}
        >
            <SwiperSlide>
                <Image src='/cowboy-bebop.jpg' alt='Cowboy bebop' width='2000' height='3000'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/hellbound.jpg' alt='Hellbound' width='2000' height='3000'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/inside-job.jpg' alt='Inside job' width='2000' height='3000'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/squid-game.jpg' alt='Squid game' width='2000' height='3000'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/demon-slayer.jpg' alt='Demon slayer' width='2000' height='3000'/>
            </SwiperSlide>
        </Swiper>
    </div>
  );
};