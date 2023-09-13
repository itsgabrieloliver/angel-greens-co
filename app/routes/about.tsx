import type { V2_MetaFunction } from '@remix-run/node'
import Layout from "~/routes/layout"

export const meta: V2_MetaFunction = () => {
    return [
        { title: "AGCO | About Us" },
        { name: "description", content: "Angel Greens CO. Specializing in the highest-quality organically-grown Microgreens. Located in South Windsor, CT." },
    ]
}

export default function About() {
    return (
        <Layout>
            <div className={'h-auto w-full flex flex-col py-12'}>
                <div className={'h-auto w-full flex flex-col md:flex-row items-center justify-center'}>
                    <div className={'basis-1/2 h-auto flex flex-col gap-4 items-center justify-center text-center'}>
                        <h2 className={'text-2xl font-bold'}>Our Vision</h2>
                        <p className={'w-2/3 text-md'}>This is some great temporary text. It really is only temporary. Temporary text includes essential gibberish. This is another temporary paragraph that will contain information about AGCO’s vision.</p>
                    </div>
                    <div className={'mt-6 md:mt-0 w-full md:w-auto md:basis-1/2 h-full px-4 md:px-32'}>
                        <div className={'w-full h-[32rem] bg-[#E8E8E8] ring-1 ring-neutral-950 rounded-xl flex items-center justify-center'}>
                            <p>Wide-Shot Operation Photo</p>
                        </div>
                    </div>
                </div>
                <div className={'py-32 h-auto w-full flex flex-col md:flex-row items-center justify-center'}>
                    <div className={'mt-6 md:mt-0 w-full md:w-auto md:basis-1/2 h-full px-4 md:px-32'}>
                        <div className={'w-full h-[20rem] bg-[#E8E8E8] ring-1 ring-neutral-950 rounded-xl flex items-center justify-center'}>
                            <p>Wide-Shot Operation Photo</p>
                        </div>
                    </div>
                    <div className={'basis-1/2 h-auto flex flex-col gap-4 items-center justify-center text-center'}>
                        <h2 className={'mt-6 md:mt-0 text-2xl font-bold'}>We grow differently.</h2>
                        <p className={'w-2/3 text-md'}>This is some great temporary text. It really is only temporary.</p>
                    </div>
                </div>
                <div className={'h-auto w-full flex flex-col items-center justify-center gap-4'}>
                    <h2 className={'text-2xl font-bold'}>Testimonials</h2>
                    <div className={'h-auto w-full grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center px-28'}>
                        <div className={'col-span-1 col-span-1 h-[12rem] rounded-xl ring-1 ring-neutral-950 flex flex-col items-start justify-between p-4'}>
                            <div className={'rounded-md h-16 w-16 ring-1 ring-neutral-950 flex items-center justify-center'}>
                                <p className={'text-xs text-center'}>Image Here</p>
                            </div>
                            <div>
                                <h3 className={'text-md'}>“Loved the products.”</h3>
                                <p className={'text-xs'}>- John Doe, CEO Local Restaurant</p>
                            </div>
                        </div>
                        <div className={'col-span-1 col-span-1 h-[12rem] rounded-xl ring-1 ring-neutral-950 flex flex-col items-start justify-between p-4'}>
                            <div className={'rounded-md h-16 w-16 ring-1 ring-neutral-950 flex items-center justify-center'}>
                                <p className={'text-xs text-center'}>Image Here</p>
                            </div>
                            <div>
                                <h3 className={'text-md'}>“Loved the products.”</h3>
                                <p className={'text-xs'}>- John Doe, CEO Local Restaurant</p>
                            </div>
                        </div>
                        <div className={'col-span-1 col-span-1 h-[12rem] rounded-xl ring-1 ring-neutral-950 flex flex-col items-start justify-between p-4'}>
                            <div className={'rounded-md h-16 w-16 ring-1 ring-neutral-950 flex items-center justify-center'}>
                                <p className={'text-xs text-center'}>Image Here</p>
                            </div>
                            <div>
                                <h3 className={'text-md'}>“Loved the products.”</h3>
                                <p className={'text-xs'}>- John Doe, CEO Local Restaurant</p>
                            </div>
                        </div>
                        <div className={'col-span-1 col-span-1 h-[12rem] rounded-xl ring-1 ring-neutral-950 flex flex-col items-start justify-between p-4'}>
                            <div className={'rounded-md h-16 w-16 ring-1 ring-neutral-950 flex items-center justify-center'}>
                                <p className={'text-xs text-center'}>Image Here</p>
                            </div>
                            <div>
                                <h3 className={'text-md'}>“Loved the products.”</h3>
                                <p className={'text-xs'}>- John Doe, CEO Local Restaurant</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'w-full h-auto pt-32 flex flex-col items-center justify-center'}>
                    <h2 className={'text-2xl font-bold'}>Photo Gallery</h2>
                    <div className={'w-full grid grid-cols-2 grid-rows-2 gap-4 pt-6 px-4 md:px-48'}>
                        <div className={'rounded-xl bg-[#E8E8E8] h-[30rem] ring-1 ring-neutral-950 flex items-center justify-center col-span-1 row-span-1'}>
                            Photo Here
                        </div>
                        <div className={'rounded-xl bg-[#E8E8E8] h-[30rem] ring-1 ring-neutral-950 flex items-center justify-center col-span-1 row-span-1'}>
                            Photo Here
                        </div>
                        <div className={'rounded-xl bg-[#E8E8E8] h-[30rem] ring-1 ring-neutral-950 flex items-center justify-center col-span-1 row-span-1'}>
                            Photo Here
                        </div>
                        <div className={'rounded-xl bg-[#E8E8E8] h-[30rem] ring-1 ring-neutral-950 flex items-center justify-center col-span-1 row-span-1'}>
                            Photo Here
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}