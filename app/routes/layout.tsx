// app/components/Layout.tsx
import React from 'react'
import type FC from 'react'

const Layout: FC = ({ children }) => {
    return (
        <div className={'h-screen w-screen flex flex-col justify-between'}>
            <nav className={'w-full min-h-[5rem] bg-[#4E8068]'}>
                <ul className={'h-full px-4 flex justify-center items-center'}>
                    <li className={'basis-1/4 flex justify-start items-center'}><a href="/" className={'uppercase text-sm font-bold text-white'}>Angel Greens Co</a></li>
                    <li className={'basis-1/2 flex items-center justify-center gap-4 text-sm font-medium'}>
                        <a href="/" className={'text-white'}>Home</a>
                        <a href="/greens" className={'text-white/60 hover:text-white/80'}>Greens</a>
                        <a href="/about" className={'text-white/60 hover:text-white/80'}>About</a>
                    </li>
                    <li className={'basis-1/4 flex justify-end items-center'}><a href="/" className={'uppercase text-sm font-bold text-white'}>Contact</a></li>
                </ul>
            </nav>

            <main>
                { children }
            </main>

            <footer>
                <div className={'h-[15rem] bg-[#4E8068]'}>
                    
                </div>
                <div className={'h-auto w-full bg-[#1B1516] text-center py-2 font-regular text-white text-sm tracking-wide'}>
                    Built and powered by <span className={'font-bold'}>Nubo</span>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
