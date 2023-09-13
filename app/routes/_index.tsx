import type { V2_MetaFunction } from '@remix-run/node'
import Layout from "~/routes/layout"

import tempProductPhoto from '../../public/temp-product-photo.svg'

import sprayCanIcon from '../../public/icons/spray-can-solid.svg'
import seedlingIcon from '../../public/icons/seedling-solid.svg'
import arrowsRotateIcon from '../../public/icons/arrows-rotate-solid.svg'
import truckIcon from '../../public/icons/truck-solid.svg'

export const meta: V2_MetaFunction = () => {
    return [
        { title: "AGCO | CT Organic Microgreens" },
        { name: "description", content: "Angel Greens CO. Specializing in the highest-quality organically-grown Microgreens. Located in South Windsor, CT." },
    ]
}

export default function Index() {
    return (
        <Layout>
            <div className={'h-[25rem] w-full flex flex-col gap-20 items-center justify-center'}>
                <h3 className={'text-2xl font-bold text-[#4E8068] drop-shadow-2xl'}>Featured Greens</h3>
                <div className={'w-full h-auto flex items-center justify-center gap-4'}>
                    <a href={'/greens/summer-salad'} className={'basis-[20rem] bg-gradient-to-tr from-[#4E8068] to-[#349E6B] rounded-xl flex flex-col items-center'}>
                        <div className={'ring-2 ring-white rounded-xl shadow-2xl -mt-12 h-[10rem] w-[10rem] bg-center bg-cover'} style={{ backgroundImage: `url(${tempProductPhoto})` }}>

                        </div>
                        <p className={'text-white text-2xl font-bold p-4'}>Summer Salad Mix</p>
                    </a>
                    <a href={'/greens/summer-salad'} className={'hidden md:basis-[20rem] bg-gradient-to-tr from-[#4E8068] to-[#349E6B] rounded-xl md:flex md:flex-col md:items-center'}>
                        <div className={'ring-2 ring-white rounded-xl shadow-2xl -mt-12 h-[10rem] w-[10rem] bg-center bg-cover'} style={{ backgroundImage: `url(${tempProductPhoto})` }}>

                        </div>
                        <p className={'text-white text-2xl font-bold p-4'}>Summer Salad Mix</p>

                    </a>
                    <a href={'/greens/summer-salad'} className={'hidden xl:basis-[20rem] bg-gradient-to-tr from-[#4E8068] to-[#349E6B] rounded-xl xl:flex xl:flex-col xl:items-center'}>
                        <div className={'ring-2 ring-white rounded-xl shadow-2xl -mt-12 h-[10rem] w-[10rem] bg-center bg-cover'} style={{ backgroundImage: `url(${tempProductPhoto})` }}>

                        </div>
                        <p className={'text-white text-2xl font-bold p-4'}>Summer Salad Mix</p>
                    </a>
                </div>
                <a href={'/greens'} className={'-mt-12 font-bold text-black/60 hover:text-black/80'}>View All Greens</a>
            </div>
            <div className={'h-auto py-12 md:py-0 md:h-[25rem] w-full bg-[#2D240E] flex flex-col items-center justify-center gap-10'}>
                <h3 className={'text-2xl font-bold text-white drop-shadow-2xl'}>How This Works</h3>
                <div className={'w-full h-auto flex flex-col md:flex-row items-center justify-center gap-10'}>
                    <div className={'w-[20rem] h-[15rem] bg-white/60 rounded-xl flex flex-col items-center justify-center gap-8 p-4'}>
                        <h4 className={'text-xl font-bold tracking-wide'}>Choose Your Greens</h4>
                        <p className={'text-center text-md text-black/60'}>Enhance any meal with our top-quality perfected micro-greens.</p>
                    </div>
                    <div className={'w-[20rem] h-[15rem] bg-white/80 rounded-xl flex flex-col items-center justify-center gap-8 p-4'}>
                        <h4 className={'text-xl font-bold tracking-wide'}>Schedule A Delivery</h4>
                        <p className={'text-center text-md text-black/60'}>Setup a convenient time for your delivery, we will make it happen.</p>
                    </div>
                    <div className={'w-[20rem] h-[15rem] bg-white rounded-xl flex flex-col items-center justify-center gap-8 p-4'}>
                        <h4 className={'text-xl font-bold tracking-wide'}>Review Our Recipes</h4>
                        <p className={'text-center text-md text-black/60'}>View our amazing catalog of quick and delicious meals.</p>
                    </div>
                </div>
            </div>
            <div className={'h-auto md:h-[30rem] py-12 md:py-0 w-full flex flex-col md:flex-row items-center justify-center'}>
                <div className={'h-full basis-1/2 border-b md:border-r pb-6 md:pb-0 flex flex-col items-center justify-center gap-10'}>
                    <h3 className={'text-2xl font-bold text-[#2D240E] drop-shadow-2xl'}>About Us</h3>
                    <div className={'flex flex-col px-6 md:px-0 gap-6 text-black/80'}>
                        <div className={'flex gap-6 items-center justify-start'}>
                            <icon className={'w-6 h-6 bg-cover bg-center'} style={{backgroundImage: `url(${seedlingIcon})`}}></icon>
                            <p>Organically grown in South Windsor, CT</p>
                        </div>
                        <div className={'flex gap-6 items-center justify-start'}>
                            <icon className={'w-6 h-6 bg-cover bg-center'} style={{ backgroundImage: `url(${sprayCanIcon})` }}></icon>
                            <p>Eco-friendly and thorough sterilization methods</p>
                        </div>
                        <div className={'flex gap-6 items-center justify-start'}>
                            <icon className={'w-6 h-6 bg-cover bg-center'} style={{backgroundImage: `url(${arrowsRotateIcon})`}}></icon>
                            <p>Consistent quality and friendliness</p>
                        </div>
                        <div className={'flex gap-6 items-center justify-start'}>
                            <icon className={'w-6 h-6 bg-cover bg-center'} style={{backgroundImage: `url(${truckIcon})`}}></icon>
                            <p>Regular fulfillment in 1-3 weeks</p>
                        </div>
                    </div>
                </div>
                <div className={'mt-4 md:py-0 h-full basis-1/2 flex flex-col items-center justify-center gap-10'}>
                    <h3 className={'text-2xl font-bold text-[#2D240E] drop-shadow-2xl'}>Pricing Model</h3>
                    <div className={'flex gap-4 items-end justify-center'}>
                        <div className={'rounded-xl bg-[#4E8068] w-[8rem] h-[10rem] flex flex-col items-center justify-center'}>
                            <h4 className={'text-2xl text-white font-bold'}>2 OZ</h4>
                            <h5 className={'text-lg text-white/80'}>$8.00</h5>
                        </div>
                        <div className={'rounded-xl bg-[#4E8068] w-[8rem] h-[13rem] flex flex-col items-center justify-center'}>
                            <h4 className={'text-2xl text-white font-bold'}>4 OZ</h4>
                            <h5 className={'text-lg text-white/80'}>$10.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
