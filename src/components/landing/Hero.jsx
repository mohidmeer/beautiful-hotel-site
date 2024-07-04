import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
import { Pagination } from 'swiper/modules';

import slideImage1 from '../../../public/images/slide-1.jpg'
import slideImage2 from '../../../public/images/slide-2.jpg'
import slideImage3 from '../../../public/images/slide-3.jpg'
import slideImage4 from '../../../public/images/slide-1.jpg'


const slidesData = [
    { 
        id: 1, 
        subtitle: 'Luxury & Comfort', 
        title: 'EXPERIENCE ELEGANCE', 
        paragraph: 'Indulge in the finest accommodations and exceptional service at our luxury hotel. Discover the perfect blend of comfort and style, ensuring an unforgettable stay.', 
        img: slideImage1 
    },
    { 
        id: 2, 
        subtitle: 'Unmatched Hospitality', 
        title: 'YOUR HOME AWAY FROM HOME', 
        paragraph: 'With world-class amenities and a commitment to personalized service, our hotel provides a welcoming atmosphere for both leisure and business travelers.', 
        img: slideImage2 
    },
    { 
        id: 3, 
        subtitle: 'Scenic Views', 
        title: 'A TRANQUIL RETREAT', 
        paragraph: 'Nestled in a picturesque location, our hotel offers breathtaking views and a serene environment. Perfect for relaxation and rejuvenation.', 
        img: slideImage3 
    },
    { 
        id: 4, 
        subtitle: 'Exquisite Dining', 
        title: 'CULINARY DELIGHTS', 
        paragraph: 'Savor gourmet meals prepared by our renowned chefs. Our diverse dining options cater to all tastes, promising an extraordinary culinary experience.', 
        img: slideImage4 
    },
];

export default function Hero({children}) {
    return (
        <div className="">
            <div className="relative myswiper">
                <Swiper
                    spaceBetween={0}
                    pagination={true}
                    slidesPerView={1}
                    
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay,Pagination]}>
                    {
                        slidesData.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <Slide slide={slide} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="w-full z-10 flex flex-col h-full  absolute inset-0">
                    {children}
                </div>
            </div>
        </div>
    )
}

function Slide({ slide }) {
    return (
        <div className='w-full relative h-[100vh] text-white'>
            <Image src={slide.img} fill alt='hero-img' className='object-cover -z-10 brightness-50' />
            <div className='w-full h-full'>
                <div className='max-w-6xl h-full mx-auto flex flex-col justify-center p-4 '>
                    <div className='flex justify-start'>
                        <div className='flex flex-col gap-4 md:max-w-3xl mb-28 sm:mb-0 '>
                                
                                <div>
                                <h3 className="text-primary font-extrabold pl-2 text-xl">{slide.subtitle}</h3>    
                                <h1 className="font-extrabold" >{slide.title}</h1>
                                </div>
                                <p className='md:max-w-2xl  '>{slide.paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
