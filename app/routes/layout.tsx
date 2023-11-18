import React, {FormEvent, useRef, useState} from 'react'
import type FC from 'react'
import { useLocation } from 'react-router-dom'

import bgImage from '../../public/bg-image.jpg'
import AGCOLogo from '../../public/agco-logo.svg'
import instagramLogo from '../../public/icons/instagram.svg'
import facebookLogo from '../../public/icons/facebook.svg'
import { Form } from "@remix-run/react"

const Layout: FC = ({ children }) => {
    // Retrieve location header object.
    const location = useLocation()
    const currentUrl = location.pathname

    return (
        <div className={'h-screen w-screen flex flex-col justify-between font-poppins'}>
            {
                currentUrl === '/' ?
                <header className={'w-full min-h-[40rem] bg-no-repeat bg-right bg-cover opacity-90'} style={{ backgroundImage: `url(${bgImage})` }}>
                    <nav className={currentUrl === '/' ? 'w-full h-[5rem]' : 'w-full h-[5rem] bg-[#4E8068]'}>
                        <ul className={'h-full px-10 flex justify-between md:justify-center items-center'}>
                            <li className={'basis-1/4 hidden md:flex justify-start items-center'}>
                                <a href="/" className={'uppercase text-sm font-bold text-white'}>Angel Greens Co</a>
                            </li>
                            <li className={'basis-1/2 flex items-center justify-center gap-4 text-sm font-medium uppercase'}>
                                <a href="/" className={currentUrl === '/' ? 'text-white' : 'text-white/60 hover:text-white/80'}>Home</a>
                                <a href="/greens" className={currentUrl === '/greens' ? 'text-white' : 'text-white/60 hover:text-white/80'}>Greens</a>
                                <a href="/about" className={currentUrl === '/about' ? 'text-white' : 'text-white/60 hover:text-white/80'}>About</a>
                            </li>
                            <li className={'basis-1/2 md:basis-1/4 flex justify-end items-center'}>
                                <a href="mailto:order@angelgreens.co" className={'uppercase text-sm font-bold text-white text-xs tracking-wide bg-[#1B1516] px-2 py-1 rounded-md'}>Contact</a>
                            </li>
                        </ul>
                        <div className={'h-[35rem] w-full flex items-center justify-center'}>
                            <div className={'md:basis-1/2 flex flex-col items-center justify-center'}>
                                <img src={AGCOLogo} alt={'Angel Greens Company Logo'} height={300} width={300}></img>
                                <h1 className={'uppercase font-bold text-3xl text-white'}>Angel Greens CO.</h1>
                                <p className={'mt-4 w-3/4 md:w-3/5 text-center text-2xl text-white'}>Color your dish, enhance your flavor, and support your health.</p>
                            </div>
                            <div className={'hidden md:block md:basis-1/2 h-full w-full px-4 xl:px-48 py-12'}>

                                <Form method={"post"} action={"/send"} className={'w-full h-full bg-white/60 rounded-xl ring-1 ring-white flex flex-col gap-4 items-center justify-center p-6'}>
                                    <p className={'text-2xl text-[#1B1516] font-bold'}>Order Greens</p>
                                    <input required type={'text'} name={'name'} className={'h-12 w-full rounded-lg bg-white/60 ring-2 ring-[#349E6B] px-4 text-[#1B1516]'} placeholder={'Your Name'} />
                                    <input required type={'email'} name={'email'} className={'h-12 w-full rounded-lg bg-white/60 ring-2 ring-[#349E6B] px-4 text-[#1B1516]'} placeholder={'Email Address'} />
                                    <input type={'text'} name={'phone'} className={'h-12 w-full rounded-lg bg-white/60 ring-2 ring-[#349E6B] px-4 text-[#1B1516]'} placeholder={'Phone Number'} />
                                    <input type={'submit'} className={'px-6 py-1 bg-[#4E8068] rounded-md text-white cursor-pointer uppercase'} />
                                </Form>
                            </div>
                        </div>
                    </nav>
                </header>
                    :<nav className={'w-full min-h-[5rem] bg-[#4E8068]'}>
                        <ul className={'h-full px-10 flex justify-between md:justify-center items-center'}>
                            <li className={'basis-1/4 hidden md:flex justify-start items-center'}>
                                <a href="/" className={'uppercase text-sm font-bold text-white'}>Angel Greens Co</a>
                            </li>
                            <li className={'basis-1/2 flex items-center justify-center gap-4 text-sm font-medium uppercase'}>
                                <a href="/" className={currentUrl === '/' ? 'text-white' : 'text-white/60 hover:text-white/80'}>Home</a>
                                <a href="/greens" className={currentUrl === '/greens' ? 'text-white' : 'text-white/60 hover:text-white/80'}>Greens</a>
                                <a href="/about" className={currentUrl === '/about' ? 'text-white' : 'text-white/60 hover:text-white/80'}>About</a>
                            </li>
                            <li className={'basis-1/2 md:basis-1/4 flex justify-end items-center'}>
                                <a href="/" className={'uppercase text-sm font-bold text-white text-xs tracking-wide bg-[#1B1516] px-2 py-1 rounded-md'}>Contact</a>
                            </li>
                        </ul>
                    </nav>
            }

            <main className={'h-auto w-full'}>
                { children }
            </main>

            <footer>
                <div className={'h-auto md:h-[15rem] bg-[#4E8068] flex flex-col md:flex-row'}>
                    <div className={'h-full basis-2/3 flex flex-col justify-between items-start p-8'}>
                        <h2 className={'uppercase text-2xl text-white'}>Angel Greens Co.</h2>
                        <div className={'flex flex-col'}>
                            <p className={'text-lg text-white/80'}>order@angelgreens.co</p>
                            <p className={'text-lg text-white/80'}>(860)709-5991</p>
                        </div>
                        <div className={'flex gap-4'}>
                            <a href={'https://www.instagram.com/angelgreensco/'} target={'_blank'} className={'w-8 h-8 bg-center bg-cover'} style={{ backgroundImage: `url(${instagramLogo})` }}>

                            </a>
                            <a href={'https://www.facebook.com/angelgreensco/'} target={'_blank'} className={'w-8 h-8 bg-center bg-cover'} style={{ backgroundImage: `url(${facebookLogo})` }}>

                            </a>
                        </div>
                    </div>
                    {/*<div className={'h-[10rem] md:h-full basis-1/3 p-8'}>*/}
                    {/*    <div className={'w-full h-full rounded-xl ring-2 ring-white bg-gradient-to-tr from-pink-500 to-blue-500 flex items-center justify-center text-white'}>*/}
                    {/*        Instagram Feed Here*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={'h-full basis-1/3 flex flex-col items-end justify-between p-8'}>
                        <div className={'flex flex-col items-end justify-start'}>
                            <h2 className={'uppercase text-2xl text-white'}>We Accept</h2>
                            <p className={'text-lg text-white/80'}>Cash - Card - Check - Venmo</p>
                            <div className={'flex items-center justify-center gap-2'}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className={'text-white/80 w-7 h-7'} fill={'currentColor'}><path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className={'text-white/80 w-7 h-7'} fill={'currentColor'}><path d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className={'text-white/80 w-7 h-7'} fill={'currentColor'}><path d="M48 480C21.49 480 0 458.5 0 432V80C0 53.49 21.49 32 48 32H528C554.5 32 576 53.49 576 80V82.43H500.5L483.5 130L466.6 82.43H369.4V145.6L341.3 82.43H262.7L181 267.1H246.8V430.9H450.5L482.4 395.8L514.3 430.9H576V432C576 458.5 554.5 480 528 480H48zM482.6 364L440.4 410.3H390.5L458 338.6L390.5 266.1H441.9L483.4 312.8L525.4 266.1H576L508 338.2L576 410.3H524.6L482.6 364zM576 296.9V380.2L536.7 338.3L576 296.9zM307.6 377.1H390.6V410.3H268.6V267.1H390.6V300.2H307.6V322.6H388.5V354.9H307.6V377.2V377.1zM537.3 145.7L500.4 246.3H466L429.2 146V246.3H390.5V103H451.7L483.6 192.3L515.8 103H576V246.3H537.3V145.7zM334.5 217.6H268.6L256.7 246.3H213.7L276.1 103H327.3L390.6 246.3H346.5L334.5 217.6zM301.5 138.5L282 185.4H320.9L301.5 138.5z"/></svg>
                            </div>
                        </div>
                        <a href={'#'} className={'text-white/80 hover:text-white text-sm'}>Like our products? Review here</a>
                    </div>
                </div>
                <div className={'h-auto w-full bg-[#1B1516] text-center py-4 font-regular text-white text-sm tracking-wide'}>
                    Built and powered by <a href={'https://www.withnubo.com/'} className={'font-bold'}>Nubo</a>
                </div>
            </footer>
        </div>
    )
}

export default Layout