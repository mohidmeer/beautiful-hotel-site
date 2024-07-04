import Link from 'next/link';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const HotelCard = ({ name = 'Delexue Suite', beds = '3 beds', price = 10000 }) => {
    return (
        <Dialog className='!outline-none'>
            <DialogTrigger className=' text-left !outline-none'>
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
              
            </DialogTrigger>
            <DialogContent className={'min-w-7xl  '}>
                <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default HotelCard