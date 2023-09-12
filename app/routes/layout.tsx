import React from 'react'
import type FC from 'react'
import { useLocation } from 'react-router-dom'

import tempBGImage from '../../public/temp-bg-image.svg'
import AGCOLogo from '../../public/agco-logo.svg'
import instagramLogo from '../../public/icons/instagram.svg'
import facebookLogo from '../../public/icons/facebook.svg'

const Layout: FC = ({ children }) => {
    // Retrieve location header object.
    const location = useLocation()
    const currentUrl = location.pathname

    return (
        <div className={'h-screen w-screen flex flex-col justify-between font-poppins'}>
            {
                currentUrl === '/' ?
                <header className={'w-full min-h-[40rem] bg-no-repeat bg-center bg-cover opacity-95'} style={{ backgroundImage: `url(${tempBGImage})` }}>
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
                                <a href="/" className={'uppercase text-sm font-bold text-white text-xs tracking-wide bg-[#1B1516] px-2 py-1 rounded-md'}>Contact</a>
                            </li>
                        </ul>
                        <div className={'h-[35rem] w-full flex items-center justify-center'}>
                            <div className={'md:basis-1/2 flex flex-col items-center justify-center'}>
                                <img src={AGCOLogo} alt={'Angel Greens Company Logo'} height={300} width={300}></img>
                                <h1 className={'uppercase font-bold text-3xl text-white'}>Angel Greens CO.</h1>
                                <p className={'mt-4 w-3/4 md:w-3/5 text-center text-2xl text-white'}>Color your dish, enhance your flavor, and support your health.</p>
                            </div>
                            <div className={'hidden md:block md:basis-1/2 h-full w-full px-4 xl:px-48 py-12'}>
                                <form className={'w-full h-full bg-white/50 rounded-xl ring-1 ring-white flex flex-col gap-4 items-center justify-center p-6'}>
                                    <p className={'text-2xl text-[#1B1516] font-bold'}>Get In Touch</p>
                                    <input required type={'text'} className={'h-12 w-full rounded-lg bg-white/60 ring-2 ring-[#349E6B] px-4 text-[#1B1516]'} placeholder={'Your Name'} />
                                    <input required type={'email'} className={'h-12 w-full rounded-lg bg-white/60 ring-2 ring-[#349E6B] px-4 text-[#1B1516]'} placeholder={'Email Address'} />
                                    <input required className={'h-12 w-full rounded-lg bg-white/60 ring-2 ring-[#349E6B] px-4 text-[#1B1516]'} placeholder={'Phone Number'} />
                                    <input type={'submit'} className={'px-6 py-1 bg-[#4E8068] rounded-md text-white cursor-pointer uppercase'} />
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>
                    :<nav className={'w-full min-h-[5rem] bg-[#4E8068]'}>
                        <ul className={'h-full px-4 flex justify-center items-center'}>
                            <li className={'basis-1/4 flex justify-start items-center'}>
                                <a href="/" className={'uppercase text-sm font-bold text-white'}>Angel Greens Co</a>
                            </li>
                            <li className={'basis-1/2 flex items-center justify-center gap-4 text-sm font-medium'}>
                                <a href="/" className={currentUrl === '/' ? 'text-white' : 'text-white/60 hover:text-white/80'}>Home</a>
                                <a href="/greens" className={currentUrl === '/greens' ? 'text-white' : 'text-white/60 hover:text-white/80'}>Greens</a>
                                <a href="/about" className={currentUrl === '/about' ? 'text-white' : 'text-white/60 hover:text-white/80'}>About</a>
                            </li>
                            <li className={'basis-1/4 flex justify-end items-center'}>
                                <a href="/" className={'uppercase text-sm font-bold text-white'}>Contact</a>
                            </li>
                        </ul>
                    </nav>
            }

            <main className={'h-auto w-full'}>
                { children }
            </main>

            <footer>
                <div className={'h-auto md:h-[15rem] bg-[#4E8068] flex flex-col md:flex-row'}>
                    <div className={'h-full basis-1/3 flex flex-col justify-between items-start p-8'}>
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
                    <div className={'h-[10rem] md:h-full basis-1/3 p-8'}>
                        <div className={'w-full h-full rounded-xl ring-2 ring-white bg-gradient-to-tr from-pink-500 to-blue-500 flex items-center justify-center text-white'}>
                            Instagram Feed Here
                        </div>
                    </div>
                    <div className={'h-full basis-1/3 flex flex-col items-end justify-start p-8'}>
                        <h2 className={'uppercase text-2xl text-white'}>We Accept</h2>
                        <p className={'text-lg text-white/80'}>Cash - Check - Venmo</p>
                    </div>
                </div>
                <div className={'h-auto w-full bg-[#1B1516] text-center py-4 font-regular text-white text-sm tracking-wide'}>
                    Built and powered by <a href={'https://nubo.onl/'} className={'font-bold'}>Nubo</a>
                </div>
            </footer>
        </div>
    )
}

export default Layout