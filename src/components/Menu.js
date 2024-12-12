import React, { useState } from 'react'
import logo from '../assets/logo.png';
import whitepaper from '../assets/whitepaper.pdf';




export default function Menu() {


  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (

    <header>
      <div className=''>

        <div className="lg:flex hidden items-center justify-between font-poppins h-28">
          <a href="/" className="flex items-center gap-x-2">
            <img src={logo} alt="Logo" className='' />
          </a>

          <nav>
            <ul className="text-md flex justify-center gap-12 items-center">
              <li><a href="/" className="">Home</a></li>
              <li><a href="#about" className=" ">About</a></li>
              <li><a href="#tokenomics" className="">Tokenomics</a></li>
              <li><a href="#buy" className="">How to Buy</a></li>
              <li><a href={whitepaper} target='_blank' rel='noopener noreferrer'>Whitepaper</a></li>
            </ul>
          </nav>

          <a href="/">
            <button className="rounded-xl bg-yellow-50 px-8 py-3 text-white-100 font-semibold shadow-xl shadow-yellow-100">
              Buy Now 🤍
            </button>
          </a>
        </div>

        <div className="text-3xl text-center pb-8 lg:hidden flex justify-between items-center py-5" onClick={ToggleSidebar} >

          <a href="/" className="flex items-center gap-x-2">
            <img src={logo} alt="Logo" className='w-40' />
          </a>

          <i className="fa fa-bars"></i>
        </div>

        <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
          <div className='p-5'>
            <div className="flex items-center justify-between">

              <a href="/" className="flex items-center gap-x-2">
                <img src={logo} alt="Logo" className='w-32' />
              </a>

              <i onClick={ToggleSidebar} className="fa fa-times text-xl"></i>
            </div>

            <div className="sd-body mt-24 overflow-hidden">
              <ul onClick={ToggleSidebar} className='space-y-10'>
                <li><a href="/" className="">Home</a></li>
                <li><a href="#about" className=" ">About</a></li>
                <li><a href="#tokenomics" className="">Tokenomics</a></li>
                <li><a href="#buy" className="">How to Buy</a></li>
                <li><a href={whitepaper} target='_blank' rel='noopener noreferrer'>Whitepaper</a></li>
                <li><a href="/" className="w-full bg-orange-100 py-3 px-5 rounded-xl">Buy Now 🤍</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>

    </header >
  )
}
