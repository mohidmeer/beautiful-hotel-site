import Link from 'next/link';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const HotelCard = ({name='Delexue Suite',beds='3 beds',price=10000}) => {
    return (
        <Link className='' href={'/'} >
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper shadow-xl shadow-primary/10">
                <SwiperSlide>
                    <Image layout='responsive' width={400} height={1} alt='d' src={'/images/hero2.jpg'} className='rounded-md' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image layout='responsive' width={400} height={1} alt='d' src={'/images/hero2.jpg'} className='rounded-md' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image layout='responsive' width={400} height={1} alt='d' src={'/images/hero2.jpg'} className='rounded-md' />
                </SwiperSlide>
                
            </Swiper>
            <div className='flex flex-col gap-1 mt-4'>
                <p className='text-dark text-muted-foreground'>
                    {beds}
                </p>
                <h3>{name}</h3>
                <p className=' font-semibold'>{`PKR ${price.toLocaleString()}`}<span className='font-light text-muted-foreground'>/night</span></p>
            </div>
        </Link>
    )
}

export default HotelCard