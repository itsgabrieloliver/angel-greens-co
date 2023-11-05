import type { V2_MetaFunction } from '@remix-run/node'
import Layout from "~/routes/layout"

import tempProductPhoto from '../../public/temp-product-photo.svg'

import broccoliPhoto from '../../public/product-photos/broccoli-photo.jpg'
import cilantroPhoto from '../../public/product-photos/cilantro-photo.jpg'
import dunPeasPhoto from '../../public/product-photos/dun-peas-photo.jpg'
import mildSaladMixPhoto from '../../public/product-photos/mild-salad-mix-photo.jpeg'
import radishPhoto from '../../public/product-photos/radish-photo.jpeg'
import spicySaladMix from '../../public/product-photos/spicy-salad-mix-photo.jpg'

export const meta: V2_MetaFunction = () => {
    return [
        { title: "AGCO | Our Greens" },
        { name: "description", content: "Angel Greens CO. Specializing in the highest-quality organically-grown Microgreens. Located in South Windsor, CT." },
    ]
}

export default function Greens() {
    return (
        <Layout>
            <div className={'h-auto w-full my-0 md:my-12 flex flex-col p-4 md:p-0 md:gap-10 items-center justify-center'}>
                <div className={'flex flex-col gap-2 items-center justify-center text-center'}>
                    <h3 className={'text-2xl font-bold text-[#4E8068] drop-shadow-2xl'}>Our Greens</h3>
                    <p>Explore our delicious variety.</p>
                </div>
                <div className={'w-full p-2 flex flex-col items-center justify-center gap-8'}>
                    <div className={'rounded-xl w-full md:w-2/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'w-full px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Cilantro <span className={'ml-2 rounded-full px-2 bg-[#4E8068] text-sm'}>New!</span></p>
                            <p className={'text-sm text-white/80 text-center'}>A sweet, bright citrusy aroma with a clean, bold, classic cilantro flavor finishing with robust notes of pepper and fresh cut grass.<br /><span className={'underline'}>Great with:</span> Salad, Bagels, Sandwiches, Tacos, Pizza, Garnish, Etc.</p>
                        </div>
                        <div className={'rounded-lg h-full w-[30rem] bg-cover bg-center'} style={{ backgroundImage: `url(${cilantroPhoto})` }}></div>
                    </div>
                    <div className={'rounded-xl w-full md:w-2/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'rounded-lg h-full w-[30rem] bg-cover bg-center'} style={{ backgroundImage: `url(${spicySaladMix})` }}></div>
                        <div className={'w-full px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Spicy Salad Mix <span className={'ml-2 rounded-full px-2 bg-[#4E8068] text-sm'}>Top Seller!</span></p>
                            <p className={'text-sm text-white/80 text-center'}>A flavorful and colorful combination of microgreens with a spicy flavor.<br /><span className={'underline'}>Contains:</span> Broccoli, Kale, Kohlrabi, Arugula, Red Cabbage & Mustard for an extra kick.<br /><span className={'underline'}>Great with:</span> Salad, Bagels, Sandwiches, Tacos, Pizza, Garnish, Etc.</p>
                        </div>
                    </div>
                    <div className={'rounded-xl w-full md:w-2/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'w-full px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Mild Salad Mix</p>
                            <p className={'text-sm text-white/80 text-center'}>A flavorful and colorful combination of microgreens with a hint of spice.<br /><span className={'underline'}>Contains:</span> Broccoli, Kale, Kohlrabi, Arugula & Cabbage. Top Seller!<br /><span className={'underline'}>Great with:</span> Salad, Bagels, Sandwiches, Tacos, Pizza, Garnish, Etc.</p>
                        </div>
                        <div className={'rounded-lg h-full w-[30rem] bg-cover bg-center'} style={{ backgroundImage: `url(${mildSaladMixPhoto})` }}></div>
                    </div>
                    <div className={'rounded-xl w-full md:w-2/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'rounded-lg h-full w-[30rem] bg-cover bg-center'} style={{ backgroundImage: `url(${broccoliPhoto})` }}></div>
                        <div className={'w-full px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Broccoli <span className={'ml-2 rounded-full px-2 bg-[#4E8068] text-sm'}>One of our healthiest greens!</span></p>
                            <p className={'text-sm text-white/80 text-center'}>A slight spicy taste with a minor hint of broccoli flavor.<br /><span className={'underline'}>Great with:</span> Salads, Bagels, Sandwiches, Smoothies, Tacos, Pizza, Soups, Garnishes, Etc.</p>
                        </div>
                    </div>
                    <div className={'rounded-xl w-full md:w-2/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'w-full px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Dun Pea Shoots</p>
                            <p className={'text-sm text-white/80 text-center'}>Some temporary text, this text is only temporary.</p>
                        </div>
                        <div className={'rounded-lg h-full w-[30rem] bg-cover bg-center'} style={{ backgroundImage: `url(${dunPeasPhoto})` }}></div>
                    </div>
                    <div className={'rounded-xl w-full md:w-2/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        {/* Todo: change this temporary image */}
                        <div className={'rounded-lg h-full w-[30rem] bg-cover bg-center'} style={{ backgroundImage: `url(${tempProductPhoto})` }}></div>
                        <div className={'w-full px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Arugula <span className={'ml-2 rounded-full px-2 bg-[#4E8068] text-sm'}>Our favorite!</span></p>
                            <p className={'text-sm text-white/80 text-center'}>A sweet, tangy, peppery, and earthy flavor with grassy, vegetal, and nutty hints.<br /><span className={'underline'}>Great with:</span> Salads, Bagels, Sandwiches, Tacos, Pizza, Soups, Garnishes, Etc.
                            </p>
                        </div>
                    </div>
                    <div className={'rounded-xl w-full md:w-2/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'w-full px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Purple Rambo Radish</p>
                            <p className={'text-sm text-white/80 text-center'}>A crisp, peppery, crunchy radish taste, similar to a radish bulb.<br /><span className={'underline'}>Great with:</span> Salads, Bagels, Sandwiches, Tacos, Pizza, Soups, Garnish Etc.</p>
                        </div>
                        <div className={'rounded-lg h-full w-[30rem] bg-cover bg-center'} style={{ backgroundImage: `url(${radishPhoto})` }}></div>
                    </div>
                    {/*<div className={'rounded-xl w-full md:w-2/3 h-[12rem] bg-[#2D240E] flex p-1'}>*/}
                    {/*    <div className={'rounded-lg h-full w-[30rem] bg-cover bg-center'} style={{ backgroundImage: `url(${tempProductPhoto})` }}></div>*/}
                    {/*    <div className={'w-full px-2 flex flex-col gap-4 items-center justify-center'}>*/}
                    {/*        <p className={'text-white text-xl uppercase font-bold'}>Wheat Grass</p>*/}
                    {/*        <p className={'text-sm text-white/80 text-center'}>Some temporary text, this text is only temporary.</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Layout>
    )
}