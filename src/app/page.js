"use client"
import { DatePickerWithRange } from "@/components/DateRangePicker";
import GuestsPicker from "@/components/GuestsPicker";
import HotelCard from "@/components/HotelCard";
import NavBar from "@/components/shared/NavBar";
import { Button } from "@/components/ui/button";
import { BedDoubleIcon, DollarSignIcon, House, Search } from "lucide-react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PersonIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import Hero from "@/components/landing/Hero";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"





export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Hero>
        <SearchMenu />
      </Hero>
      <HotelRooms />

    </main>
  );
}

function HotelRooms() {





  const roomsArray = [
    { name: "Deluxe Suite", price: 15000, beds: "3 beds" },
    { name: "Standard Room", price: 12000, beds: "2 beds" },
    { name: "Presidential Suite", price: 18000, beds: "4 beds" },
    { name: "Executive Room", price: 13500, beds: "1 bed" },
    { name: "Penthouse Suite", price: 16500, beds: "3 beds" },
    { name: "Family Suite", price: 14500, beds: "2 beds" },
    { name: "Deluxe Suite", price: 15500, beds: "4 beds" },
    { name: "Standard Room", price: 12500, beds: "2 beds" },
    { name: "Presidential Suite", price: 18500, beds: "3 beds" },
    { name: "Executive Room", price: 13000, beds: "1 bed" },
    { name: "Penthouse Suite", price: 17000, beds: "3 beds" },
    { name: "Family Suite", price: 14000, beds: "2 beds" },
    { name: "Deluxe Suite", price: 16000, beds: "4 beds" },

  ];
  const [price, setPrice] = useState([10000]);

  return (
    <div className="max-w-7xl mx-auto h-screen">
      <h2 className="text-center py-10">Rooms</h2>
      <div className="flex flex-wrap gap-4 py-6">
        <Popover >
          <PopoverTrigger asChild>
            <Button variant="outline" className='flex gap-2 justify-start'>
              <p>PKR </p>
              {price[0].toLocaleString()} Budget
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[300px] flex-col flex gap-4'>

            <div className="flex flex-col gap-4">

              <Slider
                defaultValue={price}
                onValueChange={(value) => { setPrice(value) }}
                max={50000}
                step={500} />
            </div>



          </PopoverContent>
        </Popover>


      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto justify-center items-center p-6">
        {
          roomsArray.map((i, z) => (
            <HotelCard key={z} name={i.name} price={i.price} beds={i.beds} />
          ))
        }
      </div>
    </div>
  )
}









function SearchMenu() {
  const roomTypes = [

    {
      name: "Deluxe",
      price: 12000
    },

    {
      name: "Deluxe River View",
      price: 14000
    },

    {
      name: "Exective River View",
      price: 16000
    },

    {
      name: "Exective Jacuzzi River View",
      price: 20000
    },

    {
      name: "Presendtial Suite River View",
      price: 25000
    },


  ]


  const [roomState, setRoomState] = useState(roomTypes[0])
  return (
    <div className="absolute bottom-3  w-full inset-x-0 p-2">
      <div className="max-w-6xl mx-auto p-4 backdrop-blur-2xl  bg-background text-foreground sm:border rounded-lg  shadow-2xl shadow-primary/10  ">

        <div className="flex flex-wrap md:flex-nowrap    justify-center gap-4 items-center px-8 ">

          <div className="flex  flex-col items-center   gap-2 w-full">
            <label className="text-nowrap   ">
              Type Of Room
            </label>
            <Select onValueChange={(value) =>setRoomState(roomTypes[value])}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Deluxe" />
              </SelectTrigger>
              <SelectContent>
                {
                  roomTypes.map((i, z) => (
                    <SelectItem key={i.name} onClick={() => { }} value={z}>{i.name}</SelectItem>
                  ))
                }
              </SelectContent>
            </Select>

          </div>
          <div className="flex  flex-col   gap-2 w-full">
            <label className="text-nowrap   ">
              Price
            </label>
            <Input className={'!disabled:text-white'} placeholder='120000' value={roomState?.price || 0} />
          </div>
          <div className="flex  flex-col   gap-2 w-full">
            <label className="text-nowrap   ">
              Check In - Check Out
            </label>
            <DatePickerWithRange />
          </div>
          <div className="flex  flex-col   gap-2 w-full">
            <label className="text-nowrap   ">
              Contact Number
            </label>
            <Input placeholder='090078601' />
          </div>
          {/* <div className="flex flex-col  gap-2 w-full">
            <label className="text-nowrap   ">
              Number Of Guests
            </label>
            <GuestsPicker />
          </div> */}
          <Button className='mt-auto w-full'>
            Submit
          </Button>
        </div>
      </div>
    </div>


  )
}