import type { V2_MetaFunction } from '@remix-run/node'
import Layout from "~/routes/layout"

import broccoliPhoto from '../../public/product-photos/broccoli-photo.jpg'
import cilantroPhoto from '../../public/product-photos/cilantro-photo.jpg'
import dunPeasPhoto from '../../public/product-photos/dun-peas-photo.jpg'
import mildSaladMixPhoto from '../../public/product-photos/mild-salad-mix-photo.jpeg'
import radishPhoto from '../../public/product-photos/radish-photo.jpeg'
import spicySaladMix from '../../public/product-photos/spicy-salad-mix-photo.jpg'
import arugulaPhoto from '../../public/product-photos/arugula-photo.jpg'
import sunflowerPhoto from '../../public/product-photos/sunflower-photo.jpg'

export const meta: V2_MetaFunction = () => {
    return [
        { title: "AGCO | Our Greens" },
        { name: "description", content: "Angel Greens CO. Specializing in the highest-quality organically-grown Microgreens. Located in South Windsor, CT." },
        {
            "script:ld+json": {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Angel Greens Co.",
                url: "https://angelgreens.co/",
            },
        },
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
                <div className={'w-full h-auto grid grid-cols-1 md:grid-cols-4 grid-rows-2 p-4 xl:p-10 lg:p-6 gap-x-6 gap-y-4'}>
                    <div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>
                        <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url(${cilantroPhoto})` }}></div>
                        <div className={'p-4 text-white flex flex-col gap-3'}>
                            <div className={'flex gap-2'}>
                                <h2 className={'text-lg font-medium'}>Cilantro Leasure Split</h2>
                                <p className={'bg-[#4E8068] flex items-center justify-center rounded-full px-2 py-0 text-sm'}>NEW!</p>
                            </div>
                            <div className={'flex items-center justify-start gap-1'}>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $5</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $9</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>4OZ - $18</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full xl:block hidden'}>8OZ - $34</p>
                            </div>
                            <p className={'text-sm text-white/80 font-thin'}>A sweet, bright citrusy aroma with a clean, bold, classic cilantro flavor finishing with robust notes of pepper and fresh cut grass.</p>
                        </div>
                    </div>
                    <div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>
                        <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url(${sunflowerPhoto})` }}></div>
                        <div className={'p-4 text-white flex flex-col gap-3'}>
                            <div className={'flex gap-2'}>
                                <h2 className={'text-lg font-medium'}>Black Oil Sunflower</h2>
                                <p className={'bg-[#4E8068] flex items-center justify-center rounded-full px-2 py-0 text-sm'}>NEW!</p>
                            </div>
                            <div className={'flex items-center justify-start gap-2'}>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $3</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $5</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>4OZ - $10</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full xl:block hidden'}>8OZ - $18</p>
                            </div>
                            <p className={'text-sm text-white/80 font-thin'}>A nice mix between nutty and lemony with a sweet taste and crunch at the end.</p>
                        </div>
                    </div>
                    {/*<div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>*/}
                    {/*    /!* todo: get image for chives *!/*/}
                    {/*    <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url()` }}></div>*/}
                    {/*    <div className={'p-4 text-white flex flex-col gap-3'}>*/}
                    {/*        <div className={'flex gap-2'}>*/}
                    {/*            <h2 className={'text-lg font-medium'}>Chives</h2>*/}
                    {/*            <p className={'bg-[#4E8068] flex items-center justify-center rounded-full px-2 py-0 text-sm'}>NEW!</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={'flex items-center justify-start gap-1.5'}>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $6</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $11</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>4OZ - $22</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full xl:block hidden'}>8OZ - $44</p>*/}
                    {/*        </div>*/}
                    {/*        <p className={'text-sm text-white/80 font-thin'}>TBD</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>*/}
                    {/*    <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url()` }}></div>*/}
                    {/*    <div className={'p-4 text-white flex flex-col gap-3'}>*/}
                    {/*        <div className={'flex gap-2'}>*/}
                    {/*            <h2 className={'text-lg font-medium'}>Detroit Red Beetroot</h2>*/}
                    {/*            <p className={'bg-[#4E8068] flex items-center justify-center rounded-full px-2 py-0 text-sm'}>NEW!</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={'flex items-center justify-start gap-1.5'}>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $5</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $9</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>4OZ - $18</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full xl:block hidden'}>8OZ - $34</p>*/}
                    {/*        </div>*/}
                    {/*        <p className={'text-sm text-white/80 font-thin'}>TBD</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>
                        <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url(${mildSaladMixPhoto})` }}></div>
                        <div className={'p-4 text-white flex flex-col gap-3'}>
                            <div className={'flex gap-2'}>
                                <h2 className={'text-lg font-medium'}>Mild Salad Mix</h2>
                                <p className={'bg-[#4E8068] flex items-center justify-center rounded-full px-2 py-0 text-sm'}>Top Seller!</p>
                            </div>
                            <div className={'flex items-center justify-start gap-2'}>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $3</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $5</p>
                            </div>
                            <p className={'text-sm text-white/80 font-thin'}>A flavorful and colorful combination of microgreens with a hint of spice.</p>
                        </div>
                    </div>
                    <div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>
                        <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url(${spicySaladMix})` }}></div>
                        <div className={'p-4 text-white flex flex-col gap-3'}>
                            <div className={'flex gap-2'}>
                                <h2 className={'text-lg font-medium'}>Spicy Salad Mix</h2>
                                <p className={'bg-[#4E8068] flex items-center justify-center rounded-full px-2 py-0 text-sm'}>Top Seller!</p>
                            </div>
                            <div className={'flex items-center justify-start gap-2'}>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $3</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $5</p>
                            </div>
                            <p className={'text-sm text-white/80 font-thin'}>A flavorful and colorful combination of microgreens with a spicy flavor.</p>
                        </div>
                    </div>
                    <div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>
                        <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url(${arugulaPhoto})` }}></div>
                        <div className={'p-4 text-white flex flex-col gap-3'}>
                            <div className={'flex gap-2'}>
                                <h2 className={'text-lg font-medium'}>Arugula Slow Bolt</h2>
                                <p className={'bg-[#4E8068] flex items-center justify-center rounded-full px-2 py-0 text-sm'}>Our Favorite!</p>
                            </div>
                            <div className={'flex items-center justify-start gap-1.5'}>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $3</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $5</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>4OZ - $10</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full xl:block hidden'}>8OZ - $20</p>
                            </div>
                            <p className={'text-sm text-white/80 font-thin'}>A sweet, tangy, peppery, and earthy flavor with grassy, vegetal, and nutty.</p>
                        </div>
                    </div>
                    <div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>
                        <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url(${broccoliPhoto})` }}></div>
                        <div className={'p-4 text-white flex flex-col gap-3'}>
                            <div className={'flex gap-2'}>
                                <h2 className={'text-lg font-medium'}>Waltham Broccoli</h2>
                            </div>
                            <div className={'flex items-center justify-start gap-1.5'}>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $3</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $5</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>4OZ - $10</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full xl:block hidden'}>8OZ - $20</p>
                            </div>
                            <p className={'text-sm text-white/80 font-thin'}>A slight spicy taste with a minor hint of broccoli flavor.</p>
                        </div>
                    </div>
                    <div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>
                        <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url(${radishPhoto})` }}></div>
                        <div className={'p-4 text-white flex flex-col gap-3'}>
                            <div className={'flex gap-2'}>
                                <h2 className={'text-lg font-medium'}>Purple Rambo Radish</h2>
                            </div>
                            <div className={'flex items-center justify-start gap-1.5'}>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $3</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $5</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full'}>4OZ - $10</p>
                                <p className={'text-xs bg-black px-2 py-1 rounded-full xl:block hidden'}>8OZ - $20</p>
                            </div>
                            <p className={'text-sm text-white/80 font-thin'}>A crisp, peppery, crunchy radish taste, similar to a radish bulb.</p>
                        </div>
                    </div>
                    {/*<div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>*/}
                    {/*    <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url()` }}></div>*/}
                    {/*    <div className={'p-4 text-white flex flex-col gap-3'}>*/}
                    {/*        <div className={'flex gap-2'}>*/}
                    {/*            <h2 className={'text-lg font-medium'}>Dark Opal Basil</h2>*/}
                    {/*        </div>*/}
                    {/*        <div className={'flex items-center justify-start gap-1.5'}>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $5</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $9</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>4OZ - $18</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full xl:block hidden'}>8OZ - $34</p>*/}
                    {/*        </div>*/}
                    {/*        <p className={'text-sm text-white/80 font-thin'}>TBD</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>*/}
                    {/*    <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url()` }}></div>*/}
                    {/*    <div className={'p-4 text-white flex flex-col gap-3'}>*/}
                    {/*        <div className={'flex gap-2'}>*/}
                    {/*            <h2 className={'text-lg font-medium'}>Genovese Basil</h2>*/}
                    {/*        </div>*/}
                    {/*        <div className={'flex items-center justify-start gap-1.5'}>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $5</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $9</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>4OZ - $18</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full xl:block hidden'}>8OZ - $34</p>*/}
                    {/*        </div>*/}
                    {/*        <p className={'text-sm text-white/80 font-thin'}>TBD</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>*/}
                    {/*    <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url()` }}></div>*/}
                    {/*    <div className={'p-4 text-white flex flex-col gap-3'}>*/}
                    {/*        <div className={'flex gap-2'}>*/}
                    {/*            <h2 className={'text-lg font-medium'}>Red Winter Wheat Grass</h2>*/}
                    {/*        </div>*/}
                    {/*        <div className={'flex items-center justify-start gap-1.5'}>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $5</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $9</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>4OZ - $18</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full xl:block hidden'}>8OZ - $34</p>*/}
                    {/*        </div>*/}
                    {/*        <p className={'text-sm text-white/80 font-thin'}>TBD</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={'h-auto row-span-1 col-span-1 bg-[#2D240E] rounded-xl p-1'}>*/}
                    {/*    <div className={'h-[14rem] rounded-md w-full bg-center bg-cover'} style={{ backgroundImage: `url(${dunPeasPhoto})` }}></div>*/}
                    {/*    <div className={'p-4 text-white flex flex-col gap-3'}>*/}
                    {/*        <div className={'flex gap-2'}>*/}
                    {/*            <h2 className={'text-lg font-medium'}>Pea Shoots</h2>*/}
                    {/*        </div>*/}
                    {/*        <div className={'flex items-center justify-start gap-1.5'}>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>1OZ - $3</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>2OZ - $5</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full'}>4OZ - $10</p>*/}
                    {/*            <p className={'text-xs bg-black px-2 py-1 rounded-full xl:block hidden'}>8OZ - $18</p>*/}
                    {/*        </div>*/}
                    {/*        <p className={'text-sm text-white/80 font-thin'}>TBD</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Layout>
    )
}