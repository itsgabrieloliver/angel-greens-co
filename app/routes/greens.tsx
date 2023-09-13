import type { V2_MetaFunction } from '@remix-run/node'
import Layout from "~/routes/layout"

import tempProductPhoto from '../../public/temp-product-photo.svg'

import sprayCanIcon from '../../public/icons/spray-can-solid.svg'
import seedlingIcon from '../../public/icons/seedling-solid.svg'
import arrowsRotateIcon from '../../public/icons/arrows-rotate-solid.svg'
import truckIcon from '../../public/icons/truck-solid.svg'

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
                    <p className={'w-2/3'}>Some temporary text, this text is only temporary.</p>
                </div>
                <div className={'w-full p-2 flex flex-col items-center justify-center gap-8'}>
                    <div className={'rounded-xl w-full md:w-1/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'rounded-lg h-full w-[15rem] bg-cover bg-center'} style={{ backgroundImage: `url(${tempProductPhoto})` }}></div>
                        <div className={'w-auto px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Mild Salad Mix</p>
                            <p className={'text-sm text-white/80 text-center'}>Some temporary text, this text is only temporary.</p>
                        </div>
                    </div>
                    <div className={'rounded-xl w-full md:w-1/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'w-auto px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Spicy Salad Mix</p>
                            <p className={'text-sm text-white/80 text-center'}>Some temporary text, this text is only temporary.</p>
                        </div>
                        <div className={'rounded-lg h-full w-[15rem] bg-cover bg-center'} style={{ backgroundImage: `url(${tempProductPhoto})` }}></div>
                    </div>
                    <div className={'rounded-xl w-full md:w-1/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'rounded-lg h-full w-[15rem] bg-cover bg-center'} style={{ backgroundImage: `url(${tempProductPhoto})` }}></div>
                        <div className={'w-auto px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Broccoli</p>
                            <p className={'text-sm text-white/80 text-center'}>Some temporary text, this text is only temporary.</p>
                        </div>
                    </div>
                    <div className={'rounded-xl w-full md:w-1/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'w-auto px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Dun Pea Shoots</p>
                            <p className={'text-sm text-white/80 text-center'}>Some temporary text, this text is only temporary.</p>
                        </div>
                        <div className={'rounded-lg h-full w-[15rem] bg-cover bg-center'} style={{ backgroundImage: `url(${tempProductPhoto})` }}></div>
                    </div>
                    <div className={'rounded-xl w-full md:w-1/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'rounded-lg h-full w-[15rem] bg-cover bg-center'} style={{ backgroundImage: `url(${tempProductPhoto})` }}></div>
                        <div className={'w-auto px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Arugula</p>
                            <p className={'text-sm text-white/80 text-center'}>Some temporary text, this text is only temporary.</p>
                        </div>
                    </div>
                    <div className={'rounded-xl w-full md:w-1/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'w-auto px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Purple Rambo Radish</p>
                            <p className={'text-sm text-white/80 text-center'}>Some temporary text, this text is only temporary.</p>
                        </div>
                        <div className={'rounded-lg h-full w-[15rem] bg-cover bg-center'} style={{ backgroundImage: `url(${tempProductPhoto})` }}></div>
                    </div>
                    <div className={'rounded-xl w-full md:w-1/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'rounded-lg h-full w-[15rem] bg-cover bg-center'} style={{ backgroundImage: `url(${tempProductPhoto})` }}></div>
                        <div className={'w-auto px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Wheat Grass</p>
                            <p className={'text-sm text-white/80 text-center'}>Some temporary text, this text is only temporary.</p>
                        </div>
                    </div>
                    <div className={'rounded-xl w-full md:w-1/3 h-[12rem] bg-[#2D240E] flex p-1'}>
                        <div className={'w-auto px-2 flex flex-col gap-4 items-center justify-center'}>
                            <p className={'text-white text-xl uppercase font-bold'}>Cilantro</p>
                            <p className={'text-sm text-white/80 text-center'}>Some temporary text, this text is only temporary.</p>
                        </div>
                        <div className={'rounded-lg h-full w-[15rem] bg-cover bg-center'} style={{ backgroundImage: `url(${tempProductPhoto})` }}></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}