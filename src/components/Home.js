import React, { useEffect, useRef } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import token_1 from '../assets/token_1.png';
import token_2 from '../assets/token_2.png';
import token_3 from '../assets/token_3.png';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import about3 from '../assets/about3.png';
import top from '../assets/logo1.PNG';
import emoji from '../assets/emoji.png';
import paws from '../assets/paws.png';
import paw from '../assets/paw.png';
import a from '../assets/a.png';
import b from '../assets/b.png';
import c from '../assets/c.png';
import d from '../assets/d.png';
import e from '../assets/e.png';
import g from '../assets/g.png';
import h from '../assets/h.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactComponent as Telegram } from "../assets/telegram.svg";
import { ReactComponent as Dextools } from "../assets/dextools.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import CountdownTimer from './CountdownTimer';
import emailjs from '@emailjs/browser';



export default function Home() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n0qetvz', 'template_4edrw5o', form.current, 'G5pDDRgyAGcG6ireN')
            .then((result) => {
                console.log(result.text);
                alert("Form is submitted successfully.")
                window.location.reload();
            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        AOS.init({
            duratio: 600
        });
    }, [])

    return (
        <div className="bg-white-50 text-blue-200 font-poppins overflow-hidden">

            {/* top section */}

            <div className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex block justify-between items-center lg:py-12 py-6 lg:space-y-0 space-y-8 gap-x-24">

                        <div className="lg:w-1/2">
                            <img data-aos='flip-right' src={top} alt="Logo" className='w-10/12 flex mx-auto' />
                        </div>

                        <img src={paws} alt="Logo" className='absolute right-0 mr-52 -mt-48 lg:block hidden' />

                        <div className="lg:w-1/2 w-full relative z-20">

                            <div className='flex items-center gap-x-16'>
                                <h1 className='md:text-6xl text-3xl font-slackey lg:leading-normal text-blue-100'>
                                    Street<br></br>
                                    Pups
                                </h1>

                                <img src={emoji} alt="Logo" className='lg:w-44 w-20 animate-pulse' />
                            </div>

                            <p className='py-8 text-blue-200 font-poppins font-semibold lg:text-lg'>
                                A crypto currency with a conscience and, <br></br>
                                A Meme coin with a heart ❤️
                            </p>

                            <div className='flex flex-wrap items-center gap-6 mt-3'>
                                <a href="https://t.me/StreetPups" className='icon'>
                                    <Telegram className='absolute ml-24 -mt-4 w-10' />
                                    <button className="text-white-100 bg-orange-200 py-4 md:px-6 px-3 rounded-lg font-semibold w-32">
                                        Telegram
                                    </button>
                                </a>

                                <a href="https://x.com/Street_Pups" className='icon'>
                                    <Twitter className='absolute ml-24 -mt-3 w-8' />
                                    <button className="text-white-100 bg-orange-200 py-4 md:px-6 px-3 rounded-lg font-semibold w-32">
                                        Twitter
                                    </button>
                                </a>

                                <a href="/" className='icon'>
                                    <Dextools className='absolute ml-24 -mt-5 w-10' />
                                    <button className="text-white-100 bg-orange-200 py-4 md:px-6 px-3 rounded-lg font-semibold w-32">
                                        Dextools
                                    </button>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div className='bg-full'>

                {/* about us section */}

                <div id='about' className="lg:px-20 px-5">
                    <div className='container mx-auto'>

                        <div className="lg:flex block justify-center items-center lg:py-20 py-6 lg:space-y-0 space-y-12">

                            <div data-aos='fade-right' className="lg:w-1/2 space-y-6 lg:text-lg">

                                <div className='flex items-center'>
                                    <h2 className='md:text-5xl text-3xl font-slackey text-blue-100'>
                                        About Us
                                    </h2>
                                    <img src={paw} alt='paw'></img>
                                </div>

                                <div className='flex gap-x-4 items-center'>
                                    <span className='w-6 h-6 text-center text-white-100 bg-orange-100 rounded-md'>
                                        ✓
                                    </span>
                                    <p className='text-blue-200 font-medium text-lg'>A Coin with A Heart ❤️</p>
                                </div>

                                <p className='text-blue-200 font-semibold lg:leading-loose'>
                                    <span className='flex items-start gap-2'>
                                        <img src={g} alt="Logo" className='' />

                                        Who doesn’t love a sweet puppy right? Well unfortunately
                                    </span>
                                    there are some who don’t, and shortly after buying them they discard them like plastic toys.
                                </p>

                                <p className='text-blue-200 font-semibold lg:leading-loose'>
                                    <span className='flex items-start gap-2'>
                                        <img src={h} alt="Logo" className='' />

                                        At Street Pups we work closely with the likes of the
                                    </span>
                                    SOI DOG FOUNDATION and provide them with, up to now, private donations from a small group of people who love animals.
                                    We now want to harness the support of the wider audience in the Crypto world.
                                </p>

                                <p className='text-blue-200 font-semibold lg:leading-loose'>
                                    <span className='flex items-start gap-2'>
                                        <img src={a} alt="Logo" className='' />

                                        The great work done by the many animal foundations across
                                    </span>
                                    the globe needs your support in re-homing these PUPs, finding new owners and giving them a ‘forever’ home.
                                </p>

                                <div>
                                    <a href="/" className=''>
                                        <button className="text-white-100 bg-orange-100 py-4 px-6 rounded-lg font-semibold">
                                            Buy Now  🤍
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div data-aos='fade-left' className='flex items-center lg:w-1/2'>
                                <div className='space-y-12'>
                                    <img src={about1} alt='about' className='md:translate-x-24 translate-x-10'></img>
                                    <img src={about3} alt='about' className='md:translate-x-40 translate-x-20 z-20 relative'></img>
                                </div>

                                <img src={about2} alt='about' className='z-10 w-1/2'></img>
                            </div>

                        </div>
                    </div>
                </div>

                {/* How It Works section */}

                <div id='work' className="lg:px-20 px-5">
                    <div className='container mx-auto'>

                        <div data-aos='fade-up' className='flex items-center justify-center'>
                            <h3 className='md:text-5xl text-3xl font-slackey text-blue-100 text-center'>
                                How It Works
                            </h3>
                            <img src={paw} alt='paw' className='md:w-24 w-12'></img>
                        </div>

                        <div className="lg:flex block justify-between items-center gap-x-20 lg:py-12 py-6 lg:space-y-0 space-y-8">

                            <div data-aos='fade-right' className="lg:w-1/2 space-y-6 lg:text-lg">
                                <p className='text-blue-200 font-semibold lg:leading-loose'>
                                    <span className='flex items-start gap-2'>
                                        <img src={a} alt="Logo" className='' />

                                        We have allocated a percentage of the coin supply and we’re
                                    </span>
                                    going to donate 3 times annually – this will be transparent and pre-announced on our social platforms, and we’ll photograph the event (handing over the cheque) .
                                </p>

                                <p className='text-blue-200 font-semibold lg:leading-loose'>
                                    <span className='flex items-start gap-2'>
                                        <img src={b} alt="Logo" className='' />

                                        We have a countdown timer on our website. 1st Donation 14th
                                    </span>
                                    February 2025.
                                </p>

                                <p className='text-blue-200 font-semibold lg:leading-loose'>
                                    <span className='flex items-start lg:justify-center gap-2'>
                                        <img src={c} alt="Logo" className='' />

                                        We have specific foundations in mind for the first few donations,
                                    </span>
                                    but we may open it up to the Community to decide and vote for their favorite animal charity.
                                </p>
                            </div>

                            <div data-aos='fade-left' className="lg:w-1/2 lg:space-y-12 space-y-6 lg:text-lg">
                                <p className='text-blue-200 font-semibold lg:leading-loose'>
                                    <span className='flex items-start gap-2'>
                                        <img src={d} alt="Logo" className='' />

                                        Join our community. Share images of your own dogs
                                    </span>
                                    (or any pets) especially if you’ve adopted / rescued. Let’s push together and get this cause listed on some exchanges.
                                </p>

                                <p className='text-blue-200 font-semibold lg:leading-loose'>
                                    <span className='flex items-start gap-2'>
                                        <img src={e} alt="Logo" className='' />

                                        We have allocated a small percentage of the coin supply
                                    </span>
                                    for the marketing guys to keep this show on the road.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tokenomics */}

                <div id='tokenomics'>

                    <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                        <h2 data-aos='fade-up' className='md:text-5xl text-3xl text-center text-blue-100 flex items-center justify-center lg:mb-20 mb-6 font-slackey'>
                            Tokenomics
                            <span>
                                <img src={paw} alt='paw'></img>
                            </span>
                        </h2>

                        <div data-aos='fade-up' data-aos-delay='100' className='flex flex-wrap items-start justify-center lg:gap-0 gap-6 lg:-space-y-0 space-y-6 font-slackey'>

                            <div className='bg-orange-200 p-8 rounded-3xl text-center gap-y-5 w-64 lg:h-44 flex flex-col justify-center'>
                                <img src={token_1} alt='' className='lg:absolute lg:-mt-48 lg:-ml-12 flex mx-auto w-24'></img>
                                <div className='text-white-100 text-center space-y-3 underline text-xl'>
                                    <p className=''>1 Billion</p>
                                    <p className=''>Total Supply</p>
                                </div>
                            </div>

                            <div className='bg-blue-50 p-8 rounded-3xl text-center gap-y-5 w-64 lg:h-44 flex flex-col justify-center lg:translate-y-32 lg:-translate-x-8'>
                                <img src={token_2} alt='' className='lg:absolute lg:-mt-52 lg:ml-10 flex mx-auto w-24'></img>
                                <div className='text-white-100 text-center space-y-3 text-3xl'>
                                    <p className=''>Liquidity</p>
                                    <p className=''>90%</p>
                                </div>
                            </div>

                            <div className='bg-white-100 p-8 rounded-3xl text-center gap-y-5 w-64 lg:h-44 flex flex-col justify-center lg:-translate-x-12 shadow-2xl'>
                                <img src={token_3} alt='' className='lg:absolute lg:-mt-48 lg:ml-36 w-20 lg:block flex mx-auto'></img>
                                <div className='text-blue-200 text-center space-y-3 underline text-3xl'>
                                    <p className=''>Marketing</p>
                                    <p className=''>10%</p>
                                </div>
                            </div>

                        </div>

                        <div className='text-center lg:mt-48 mt-6'>
                            <div className='lg:flex flex-col mx-auto lg:w-7/12'>
                                <h5 data-aos='fade-down' className='font-slackey md:text-2xl pb-5'>
                                    Each purchase of the $SPUP token has an 8% tax broken down as follows:
                                </h5>

                                <ul data-aos='fade-up' className='space-y-4'>
                                    <li>
                                        6% goes into the Donation wallet for distribution to animal charities / foundations.
                                    </li>
                                    <li>
                                        2% goes back into the LP.
                                    </li>
                                    <li>
                                        10% Marketing – locked up in vested contracts with a 1% release per month.
                                    </li>
                                    <li>
                                        Future Marketing: We’ll also use that to fund our future plans to design an NFT collection and start up animal sponsorship initiatives……
                                    </li>
                                </ul>

                                <p data-aos='zoom-in' className='pt-5 font-slackey md:text-2xl text-orange-200'>
                                    Lots going on – STAY TUNED !!
                                </p>
                            </div>


                            <h3 data-aos='fade-in' className='font-slackey md:text-6xl text-2xl lg:leading-snug text-blue-100 lg:mt-16 mt-6'>
                                First Donation Planned<br></br> On 14th February 2025
                            </h3>

                            <p className='md:text-3xl text-xl font-slackey text-blue-100 md:my-12 my-6'>
                                FIRST TOKEN RELEASE 14/02/2025
                            </p>

                            <div className=''>
                                <CountdownTimer />
                            </div>

                        </div>

                        {/* <div className='lg:py-20 py-6'>

                            <h3 data-aos='fade-up' className='lg:text-5xl text-2xl font-slackey text-blue-100 lg:pb-12 pb-8 text-center'>
                                Token Lockup schedule
                            </h3>

                            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 items-center justify-center gap-5 font-slackey text-white-100'>

                                <div>
                                    <div data-aos='fade-up' data-aos-delay='100' className='px-4 py-8 bg-blue-100 rounded-2xl space-y-6'>
                                        <p>Lock-up details – 1</p>

                                        <p className='break-words'>
                                            Lock Owner wallet address: 37yQfjr73HdJW5y9bV8XchoyfQ9j4ySdSVQ8BxUvWyvi
                                        </p>

                                        <p>
                                            60,000,000 $SPUP - Release date 31/12/24
                                            Lock Name – Treasury / Donations – Release 1
                                        </p>
                                    </div>

                                    <a href='https://solsale.app/locks/token?id=1733038275000&owner=37yQfjr73HdJW5y9bV8XchoyfQ9j4ySdSVQ8BxUvWyvi'>
                                        <button className='bg-blue-100 py-3 px-5 rounded-2xl mt-6 block mx-auto hover:scale-90 duration-150'>
                                            View
                                        </button>
                                    </a>
                                </div>


                                <div>
                                    <div data-aos='fade-up' data-aos-delay='150' className='px-4 py-8 bg-yellow-100 rounded-2xl space-y-6 lg:mt-20'>
                                        <p>Lock-up details – 2</p>

                                        <p className='break-words'>
                                            Lock Owner wallet address: EwZdnaYGmeHAyhvernrsgPKPrzc5YcXBMQmhShDFr6Dq
                                        </p>

                                        <p>
                                            60,000,000 $SPUP - Release date 31/12/25
                                            Lock Name – Treasury / Donations – Release 2
                                        </p>
                                    </div>
                                    <a href='https://solsale.app/locks/token?id=1733038763000&owner=EwZdnaYGmeHAyhvernrsgPKPrzc5YcXBMQmhShDFr6Dq'>
                                        <button className='bg-yellow-100 py-3 px-5 rounded-2xl mt-6 block mx-auto hover:scale-90 duration-150'>
                                            View
                                        </button>
                                    </a>
                                </div>

                                <div>
                                    <div data-aos='fade-up' data-aos-delay='200' className='px-4 py-8 bg-orange-200 rounded-2xl space-y-6'>
                                        <p>Lock-up details – 3</p>

                                        <p className='break-words'>
                                            Lock Owner wallet address: Dobm4XTCe3wddET63MfBmXPtHBB2GroRkD1YokW6qys3
                                        </p>

                                        <p>
                                            60,000,000 $SPUP - Release date 31/12/26
                                            Lock Name – Treasury / Donations – Release 3
                                        </p>
                                    </div>
                                    <a href='https://solsale.app/locks/token?id=1733040845000&owner=Dobm4XTCe3wddET63MfBmXPtHBB2GroRkD1YokW6qys3'>
                                        <button className='bg-orange-200 py-3 px-5 rounded-2xl mt-6 block mx-auto hover:scale-90 duration-150'>
                                            View
                                        </button>
                                    </a>
                                </div>

                                <div>
                                    <div data-aos='fade-up' data-aos-delay='250' className='px-4 py-8 bg-orange-100 rounded-2xl space-y-6 lg:mt-12'>
                                        <p>Lock-up details – 4</p>

                                        <p className='break-words'>
                                            Lock Owner wallet address: CNwgsnZraaLJ5p4Ev36booBpnDZpLmPrLPVTwfrbvgmu
                                        </p>

                                        <p>
                                            60,000,000 $SPUP - Release date 31/12/27
                                            Lock Name – Treasury / Donations – Release 4
                                        </p>
                                    </div>
                                    <a href='https://solsale.app/locks/token?id=1733041390000&owner=CNwgsnZraaLJ5p4Ev36booBpnDZpLmPrLPVTwfrbvgmu'>
                                        <button className='bg-orange-100 py-3 px-5 rounded-2xl mt-6 block mx-auto hover:scale-90 duration-150'>
                                            View
                                        </button>
                                    </a>
                                </div>

                                <div>
                                    <div data-aos='fade-up' data-aos-delay='300' className='p-6 bg-black-50 rounded-2xl space-y-6'>
                                        <p>Lock-up details – 5</p>

                                        <p className='break-words'>
                                            Lock Owner wallet address: Dgt4UyE1qRZWbeUpcYnxkY1aogkSHx1BH7RMw9yEdggR
                                        </p>

                                        <p>
                                            60,000,000 $SPUP - Release date 31/12/28
                                            Lock Name – Treasury / Donations – Release 5
                                        </p>
                                    </div>
                                    <a href='https://solsale.app/locks/token?id=1733041741000&owner=Dgt4UyE1qRZWbeUpcYnxkY1aogkSHx1BH7RMw9yEdggR'>
                                        <button className='bg-black-50 py-3 px-5 rounded-2xl mt-6 block mx-auto hover:scale-90 duration-150'>
                                            View
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </div> */}

                    </div>

                </div>

                {/* How to Buy  */}

                <div id='buy' className="lg:px-20 px-5 lg:pb-20 py-5">
                    <div className='container mx-auto'>

                        <h3 data-aos='fade-up' className='md:text-5xl text-2xl font-slackey font-semibold text-blue-100 text-center'>
                            How to Buy
                        </h3>

                        <div className='lg:flex items-start justify-center lg:pt-20 pt-8 lg:space-y-0 space-y-8 '>

                            <div className='lg:space-y-16 space-y-6 lg:w-4/12'>

                                <div className='lg:flex items-start'>
                                    <div data-aos='fade-left' data-aos-delay='200' className='lg:w-9/12'>
                                        <h5 className='font-slackey text-blue-100 text-xl pb-4'>
                                            1- Set up Wallet:
                                        </h5>
                                        <p className='lg:leading-loose'>
                                            Use MetaMask or Trust Wallet, connect to Binance Smart Chain.
                                        </p>
                                    </div>

                                    <svg className='lg:block hidden' width="157" height="71" viewBox="0 0 157 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.333333 11C0.333333 16.8911 5.10896 21.6667 11 21.6667C16.891 21.6667 21.6667 16.8911 21.6667 11C21.6667 5.109 16.891 0.333375 11 0.333375C5.10896 0.333375 0.333333 5.109 0.333333 11ZM11.5176 12.9319C28.6678 8.33663 56.3863 5.69691 83.6118 12.7364C110.766 19.7575 137.373 36.3792 152.677 70.3221L156.323 68.678C140.427 33.4208 112.7 16.1259 84.6132 8.86372C56.597 1.61984 28.1655 4.33012 10.4824 9.06819L11.5176 12.9319Z" fill="#FF926A" />
                                    </svg>
                                </div>

                                <div className='lg:flex items-center'>
                                    <div data-aos='fade-left' data-aos-delay='200' className='lg:lg:w-9/12'>
                                        <h5 className='font-slackey text-blue-100 text-xl pb-4'>
                                            2- Add BNB
                                        </h5>
                                        <p className='lg:leading-loose'>
                                            Buy and transfer BNB to your wallet.
                                        </p>
                                    </div>

                                    <svg data-aos='fade-left' data-aos-delay='200' className='lg:block hidden' width="110" height="29" viewBox="0 0 110 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.333333 11C0.333333 16.891 5.10896 21.6667 11 21.6667C16.891 21.6667 21.6667 16.891 21.6667 11C21.6667 5.10896 16.891 0.333333 11 0.333333C5.10896 0.333333 0.333333 5.10896 0.333333 11ZM9.96667 12.7124C19.8337 18.6666 36.556 25.7824 54.8238 27.8622C73.113 29.9443 93.1738 26.9929 109.336 12.4885L106.664 9.51152C91.6262 23.0071 72.8537 25.889 55.2762 23.8878C37.6773 21.8842 21.4996 15.0001 12.0333 9.28762L9.96667 12.7124Z" fill="#FF926A" />
                                    </svg>
                                </div>

                                <div className='lg:flex items-end'>
                                    <div data-aos='fade-left' data-aos-delay='200' className='lg:lg:w-9/12'>
                                        <h5 className='font-slackey text-blue-100 text-xl'>
                                            3- Go To PancakeSwap
                                        </h5>
                                        <p className='lg:leading-loose'>
                                            Go to <a href='https://pancakeswap.finance' className='hover:text-orange-100'>[PancakeSwap]</a> connect wallet.
                                        </p>
                                    </div>

                                    <svg data-aos='fade-left' data-aos-delay='200' className='lg:block hidden' width="110" height="29" viewBox="0 0 110 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.333333 11C0.333333 16.891 5.10896 21.6667 11 21.6667C16.891 21.6667 21.6667 16.891 21.6667 11C21.6667 5.10896 16.891 0.333333 11 0.333333C5.10896 0.333333 0.333333 5.10896 0.333333 11ZM9.96667 12.7124C19.8337 18.6666 36.556 25.7824 54.8238 27.8622C73.113 29.9443 93.1738 26.9929 109.336 12.4885L106.664 9.51152C91.6262 23.0071 72.8537 25.889 55.2762 23.8878C37.6773 21.8842 21.4996 15.0001 12.0333 9.28762L9.96667 12.7124Z" fill="#FF926A" />
                                    </svg>
                                </div>
                            </div>


                            <div data-aos='zoom-in' data-aos-delay='50' className='lg:w-5/12'>
                                <img src={top} alt='' className='lg:w-full w-9/12 flex mx-auto'></img>
                            </div>

                            <div className='lg:space-y-20 space-y-6 lg:w-4/12'>

                                <div className='flex items-start gap-x-4'>
                                    <svg className='lg:block hidden' width="141" height="66" viewBox="0 0 141 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M118.833 13.5001C118.833 19.3911 123.609 24.1667 129.5 24.1667C135.391 24.1667 140.167 19.3911 140.167 13.5001C140.167 7.60904 135.391 2.83341 129.5 2.83341C123.609 2.83341 118.833 7.60904 118.833 13.5001ZM4.44327 65.473C8.18949 50.081 18.9061 29.1061 38.764 16.2151C58.5011 3.40249 87.6216 -1.65082 128.736 15.3483L130.264 11.6518C88.1784 -5.74902 57.6322 -0.802335 36.586 12.8601C15.6605 26.4441 4.47717 48.4192 0.556729 64.5271L4.44327 65.473Z" fill="#FF926A" />
                                    </svg>

                                    <div data-aos='fade-right' data-aos-delay='200' className='space-y-4 lg:w-9/12'>
                                        <h5 className='font-slackey text-blue-100 text-xl'>
                                            4- Add Token
                                        </h5>
                                        <p className='lg:leading-loose'>
                                            Paste Street Pups contract (available at launch).
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-x-4'>
                                    <svg data-aos='fade-right' data-aos-delay='200' className='lg:block hidden' width="153" height="49" viewBox="0 0 153 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M131.333 11C131.333 16.891 136.109 21.6667 142 21.6667C147.891 21.6667 152.667 16.891 152.667 11C152.667 5.10896 147.891 0.333333 142 0.333333C136.109 0.333333 131.333 5.10896 131.333 11ZM0.684413 21.5064C13.4233 32.6317 35.8013 45.5081 61.6812 48.0281C87.6869 50.5603 117.075 42.6106 143.507 12.3149L140.493 9.68514C114.925 38.9894 86.8131 46.4563 62.0688 44.0469C37.1987 41.6252 15.5767 29.2016 3.31559 18.4936L0.684413 21.5064Z" fill="#FF926A" />
                                    </svg>

                                    <div data-aos='fade-right' data-aos-delay='200' className='space-y-4 lg:w-9/12'>
                                        <h5 className='font-slackey text-blue-100 text-xl'>
                                            5- Swap
                                        </h5>
                                        <p className='lg:leading-loose'>
                                            Enter BNB amount, confirm the swap.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* contact us */}

                <div className="lg:py-20 py-5 lg:w-8/12 lg:px-20 px-5 container mx-auto">

                    <h3 data-aos='fade-up' className='md:text-5xl text-2xl font-slackey font-semibold text-blue-100 text-center lg:pb-20 pb-8'>
                        Contact Us
                    </h3>

                    <div className='relative z-20'>
                        <form ref={form} onSubmit={sendEmail} className='space-y-6 flex flex-col mx-auto'>
                            <div className='lg:flex items-center justify-between gap-x-6 lg:space-y-0 space-y-8'>
                                <div data-aos='fade-right' className='space-y-3 w-full'>
                                    <input name="user_name" type='text' required placeholder='Name' className='lg:px-5 px-3 lg:py-4 py-3 rounded-xl border-4 border-orange-200 w-full focus:outline-orange-200'></input>
                                </div>

                                <div data-aos='fade-left' className='space-y-3 w-full'>
                                    <input name="user_email" type='email' required placeholder='Email' className='lg:px-5 px-3 lg:py-4 py-3 rounded-xl border-4 border-orange-200 w-full focus:outline-orange-200'></input>
                                </div>
                            </div>

                            <div data-aos='fade-up' className='space-y-3'>
                                <textarea name="message" required placeholder='Your Message' className='lg:px-5 px-3 lg:py-4 py-2 rounded-xl border-4 border-orange-200 w-full focus:outline-orange-200' rows='8'></textarea>
                            </div>

                            <div className='lg:flex items-center justify-between gap-x-8 lg:space-y-0 space-y-6'>

                                <button data-aos='zoom-in' type="submit" value="Send" className='lg:px-10 px-5 lg:py-3 py-2 bg-orange-200 rounded-lg font-semibold text-white-100'>
                                    Send
                                </button>
                            </div>
                        </form>

                        <div className='lg:mt-0 mt-6'>
                            <img data-aos='zoom-in' data-aos-delay='200' src={about1} alt='join' className='md:absolute md:-right-20 -bottom-20 rounded-2xl z-20 flex mx-auto'></img>
                        </div>
                    </div>

                    {/* <div data-aos='fade-up' className='lg:w-9/12 flex flex-wrap mx-auto bg-white-100 rounded-3xl relative z-20 shadow-2xl lg:p-0 p-2'>
                        <div className='space-y-8 md:p-12 p-4 relative z-20'>
                            <p className='md:text-4xl text-2xl text-yellow-100 font-vinque uppercase font-slackey'>
                                Join Our Community
                            </p>
                            <p className='text-black-50 lg:w-1/2 font-medium'>
                                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                            <a href="/">
                                <button className=" bg-yellow-100 py-3 px-6 font-semibold rounded-full lg:w-40 mt-6 text-white-100">
                                    Join Us
                                </button>
                            </a>

                            <div className='lg:block hidden'>
                                <svg className='absolute right-0 top-28' width="510" height="231" viewBox="0 0 510 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M320.205 493.798C186.986 497.873 60.2341 427.216 13.0282 324.462C-29.1443 232.665 44.5784 147.883 133.7 87.8299C227.603 24.5544 350.676 -31.3418 460.773 22.7564C579.002 80.8504 611.139 202.711 579.982 307.119C549.57 409.03 451.649 489.777 320.205 493.798Z" stroke="#FF5B2E" />
                                </svg>
                                <svg className='absolute right-0 top-36 -translate-y-2.5 rounded-2xl' width="472" height="211" viewBox="0 0 472 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M461.91 53.6467C543.997 130.644 562.871 266.771 509.16 381.943C461.176 484.834 350.172 511.833 249.705 508.677C143.846 505.351 26.5866 478.19 4.41137 366.086C-19.4017 245.701 58.4109 123.512 159.817 54.2587C258.798 -13.3383 380.917 -22.3244 461.91 53.6467Z" fill="#FF5B2E" />
                                </svg>
                            </div>
                        </div>

                        <div className=''>
                            <img data-aos='zoom-in' data-aos-delay='200' src={about1} alt='join' className='lg:absolute -right-10 -top-12 rounded-2xl z-20'></img>
                        </div>
                    </div> */}

                    <div />
                </div>

                <Footer />

            </div>
        </div>
    )
}
