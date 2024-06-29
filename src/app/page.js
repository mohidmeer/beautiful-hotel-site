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





export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeroSection />
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
    { name: "Standard Room", price: 13000, beds: "2 beds" },
    { name: "Presidential Suite", price: 19000, beds: "3 beds" },
    { name: "Executive Room", price: 14000, beds: "1 bed" },
    { name: "Penthouse Suite", price: 17500, beds: "3 beds" },
    { name: "Family Suite", price: 15000, beds: "2 beds" },
    { name: "Deluxe Suite", price: 16500, beds: "4 beds" },
    { name: "Standard Room", price: 13500, beds: "2 beds" },
    { name: "Presidential Suite", price: 19500, beds: "3 beds" },
    { name: "Executive Room", price: 14500, beds: "1 bed" },
    { name: "Penthouse Suite", price: 18000, beds: "3 beds" },
    { name: "Family Suite", price: 15500, beds: "2 beds" },
    { name: "Deluxe Suite", price: 17000, beds: "4 beds" },
    { name: "Standard Room", price: 14000, beds: "2 beds" },
    { name: "Presidential Suite", price: 20000, beds: "3 beds" },
    { name: "Executive Room", price: 15000, beds: "1 bed" },
    { name: "Penthouse Suite", price: 18500, beds: "3 beds" },
    { name: "Family Suite", price: 16000, beds: "2 beds" }
  ];
  const [price, setPrice] = useState([10000]);

  return (
    <div className="max-w-7xl mx-auto h-screen">
      <h2 className="text-center py-10">Rooms</h2>
      <div className="flex flex-wrap gap-4 py-6">

        <Popover >
          <PopoverTrigger asChild>
            <Button variant="outline" className='flex gap-2 justify-start'>
              <House fontSize={20} />
              Type of Room
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[300px] flex-col flex gap-4'>

            <div className="flex flex-col gap-4">

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Delexue
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="term" />
                <label
                  htmlFor="term"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Presidential
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ter" />
                <label
                  htmlFor="ter"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Standard
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="tes" />
                <label
                  htmlFor="tes"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Executive
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="te" />
                <label
                  htmlFor="te"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Family
                </label>
              </div>

            </div>



          </PopoverContent>
        </Popover>
        <Popover >
          <PopoverTrigger asChild>
            <Button variant="outline" className='flex gap-2 justify-start'>
              <BedDoubleIcon fontSize={20} />
              Beds
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[300px] flex-col flex gap-4'>

            <div className="flex flex-col gap-4">

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  1 Beds
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  2 Beds
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  4 Beds
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  5 Beds
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  3 Beds
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  9 Beds
                </label>
              </div>


            </div>



          </PopoverContent>
        </Popover>
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
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" className='flex gap-2 justify-start'>
              {/* <House fontSize={20} /> */}
              More Filters
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='text-center text-muted-foreground'>Filters</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-4">

                  <div>
                    <p className="text-lg mb-2">Ameneties</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Delexue
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Delexue
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Delexue
                        </label>
                      </div>


                    </div>

                  </div>
                  <div>
                    <p className="text-lg mb-2">Facilities</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Delexue
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Delexue
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Delexue
                        </label>
                      </div>


                    </div>

                  </div>
                  <div>
                    <p className="text-lg mb-2">Rules</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Delexue
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Delexue
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Delexue
                        </label>
                      </div>


                    </div>

                  </div>



                </div>

              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

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




function HeroSection() {


  return (
    <div className="h-[100vh]   container mx-auto relative">
      <div className="flex w-full h-full  ">
        <div className="flex-1 w-full h-full">
          <div className="flex flex-col w-full h-full justify-center gap-8 ">
            <h1 className=" ">
              Hotel, car & experiences <br />
              By Karen Retreat
            </h1>
            <p className="">Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</p>
            <Button className='w-fit'>
              Start your Search
            </Button>
          </div>
        </div>
        <div className=" w-full h-full  flex justify-center items-center relative ">
          <Image src={'/images/hero2.jpg'} alt="hero-img" width={600} height={1} className="rounded shadow-2xl shadow-primary/20 z-10" />
        </div>
      </div>
      <SearchMenu />
    </div>



  )
}

function SearchMenu() {


  return (

    <div className="absolute bottom-3  w-full inset-x-0 p-2">
      <div className="max-w-5xl mx-auto p-4 backdrop-blur-2xl  bg-background/70 text-foreground border rounded-full shadow-2xl shadow-primary/10  ">

        <div className="flex justify-center gap-4 items-center px-8 ">
          <div className="flex  items-center gap-2 w-full">
            <label className="text-nowrap   ">
              Check In - Check Out
            </label>
            <DatePickerWithRange />
          </div>
          <div className="flex  items-center gap-2 w-full">
            <GuestsPicker />
          </div>
          <Search size={40} className="cursor-pointer" />
        </div>

      </div>

    </div>


  )
}