import React from 'react'
import top from '../assets/top.png'
import { ReactComponent as Telegram } from "../assets/telegram.svg";
import { ReactComponent as Dextools } from "../assets/dextools.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import whitepaper from '../assets/whitepaper.pdf';



export default function Footer() {
  return (
    <div className="font-poppins lg:pt-12 pt-5 pb-6">
      <footer className='container text-blue-200 mx-auto lg:px-20 px-5'>

        <div className="flex flex-col items-center justify-center gap-y-8 mx-auto">

          <img src={top} alt='streetpup' className='w-40'></img>

          <nav>
            <ul className="text-md flex flex-wrap justify-center gap-x-8 gap-y-5  items-center">
              <li><a href="/" className="">Home</a></li>
              <li><a href="#about" className=" ">About</a></li>
              <li><a href="#tokenomics" className="">Tokenomics</a></li>
              <li><a href="#buy" className="">How to Buy</a></li>
              <li><a href={whitepaper} target='_blank' rel='noopener noreferrer'>Whitepaper</a></li>
            </ul>
          </nav>

          <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-8 mt-3'>
            <a href="https://t.me/StreetPups" className='icon'>
              <Telegram className='absolute ml-20 -mt-6 w-10' />
              <button className="text-white-100 bg-orange-200 py-3 md:px-6 px-3 rounded-lg font-semibold w-28">
                Telegram
              </button>
            </a>

            <a href="https://x.com/Street_Pups" className='icon'>
              <Twitter className='absolute ml-20 -mt-4 w-8' />
              <button className="text-white-100 bg-orange-200 py-3 md:px-6 px-3 rounded-lg font-semibold w-28">
                Twitter
              </button>
            </a>

            <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0xa6d4713f47e571636684fa3f542265c45beb4e11?t=1734534808736" className='icon'>
              <Dextools className='absolute ml-20 -mt-8 w-10' />
              <button className="text-white-100 bg-orange-200 py-3 md:px-6 px-3 rounded-lg font-semibold w-28">
                Dextools
              </button>
            </a>
          </div>
        </div>
        <p className='pt-8 text-center'>© {new Date().getFullYear()}. All rights reserved by Streetpup</p>

      </footer>
    </div>

  )
}
