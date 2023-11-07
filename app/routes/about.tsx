import type { V2_MetaFunction } from '@remix-run/node'
import Layout from "~/routes/layout"
import mikeWithTray from "../../public/mike-with-tray.jpg"
import aboveShot from "../../public/above-shot.jpg"
import setup from "../../public/setup.jpg"
import sideShot from "../../public/side-shot.jpg"

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
                    <div className={'basis-1/2 px-4 md:pl-12 h-auto flex flex-col gap-4 items-start justify-center text-start'}>
                        <h2 className={'text-2xl font-bold'}>Our Vision</h2>
                        <p className={'w-full text-md'}>At Angel Greens Co, we envision a future where every home and community is thriving with the
                            vibrant vitality of fresh, locally grown microgreens. Our commitment is to be the beacon of
                            sustainability and health, pioneering a greener tomorrow by nurturing the seeds of change
                            today.
                            <div className={'mt-4'} />
                            We aspire to cultivate a world where access to nutrient-rich, sustainably grown microgreens is
                            not a luxury but a fundamental necessity. Through innovation, dedication, and an unwavering
                            commitment to quality, we aim to redefine the way our community perceives and consumes
                            microgreens.
                            <div className={'mt-4'} />
                            Our vision is to be a catalyst for positive change, promoting urban agriculture practices that
                            reduce food miles, minimize environmental impact, and empower individuals to take control of
                            their health and well-being. We dream of a future where our microgreens are not just a source of
                            nutrition but a symbol of community resilience, connecting people to the earth and to each other.
                            As we grow, we remain steadfast in our mission to provide the freshest, most flavorful, and
                            sustainably grown microgreens to our local community. We will continue to lead by example,
                            inspiring others to embrace the benefits of microgreens and the profound impact they can have
                            on our lives and the planet.
                            <br />
                            <div className={'mt-4 text-md font-medium'}>
                                <span className={'font-bold'}>Michael Smith</span>
                                <br />
                                Founder, Angel Greens Co.
                            </div>
                        </p>
                    </div>
                    <div className={'mt-6 md:mt-0 w-full md:w-auto md:basis-1/2 h-full px-4 md:px-32'}>
                        <div className={'w-full h-[32rem] bg-[#E8E8E8] ring-1 ring-neutral-950 rounded-xl flex items-center justify-center bg-cover bg-center'} style={{ backgroundImage: `url(${mikeWithTray})` }}></div>
                    </div>
                </div>
                <div className={'pt-32 h-auto w-full flex flex-col md:flex-row items-center justify-center'}>
                    <div className={'mt-6 md:mt-0 w-full md:w-auto md:basis-1/2 h-full px-4 md:px-32'}>
                        <div className={'w-full h-[20rem] bg-[#E8E8E8] ring-1 ring-neutral-950 rounded-xl flex items-center justify-center bg-cover bg-center'} style={{ backgroundImage: `url(${aboveShot})` }}></div>
                    </div>
                    <div className={'basis-1/2 h-auto px-4 md:pr-12 flex flex-col gap-4 items-start justify-center text-start'}>
                        <h2 className={'mt-6 md:mt-0 text-2xl font-bold text-left'}>We grow differently.</h2>
                        <p className={'w-full text-md'}>At Angel Greens Co, we embrace the extraordinary. We're not just another microgreen supplier;
                            we're a movement, a commitment to redefining the way you experience freshness, flavor, and
                            sustainability. Our journey is marked by innovation, dedication, and a passion for cultivating
                            something truly unique.
                            <div className={'mt-4'} />
                            We grow different because our microgreens are nurtured with care, not just for your plate, but
                            for the planet. Our sustainable practices ensure that every tender leaf we harvest leaves a
                            minimal environmental footprint. We're committed to reducing food miles, conserving water, and
                            championing a greener future, one tiny, nutrient-packed green at a time.
                            <div className={'mt-4'} />
                            At Angel Greens Co flavor matters. Our microgreens burst with taste, elevating your culinary
                            creations to new heights. From the crisp crunch of our radish microgreens to the delicate zest of
                            our arugula, each leaf is a burst of natural goodness that makes your meals extraordinary.
                            <div className={'mt-4'} />

                            We grow different because we believe in community. Our roots are deeply intertwined with our
                            local neighborhoods, connecting people through the love of fresh, locally grown produce. When
                            you choose Angel Greens Co, you're not just getting microgreens; you're supporting a
                            movement that brings people together around healthy, sustainable living.
                            <div className={'mt-4'} />
                            So, why choose us? Because we grow different, and we invite you to taste the difference. Join
                            us on this journey toward a fresher, greener, and more flavorful world. Together, we're sowing
                            the seeds of a brighter, healthier future.
                        </p>
                    </div>
                </div>
                {/*<div className={'h-auto w-full flex flex-col items-center justify-center gap-4'}>*/}
                {/*    <h2 className={'text-2xl font-bold'}>Testimonials</h2>*/}
                {/*    <div className={'h-auto w-full grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center px-28'}>*/}
                {/*        <div className={'col-span-1 col-span-1 h-[12rem] rounded-xl ring-1 ring-neutral-950 flex flex-col items-start justify-between p-4'}>*/}
                {/*            <div className={'rounded-md h-16 w-16 ring-1 ring-neutral-950 flex items-center justify-center'}>*/}
                {/*                <p className={'text-xs text-center'}>Image Here</p>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <h3 className={'text-md'}>“Loved the products.”</h3>*/}
                {/*                <p className={'text-xs'}>- John Doe, CEO Local Restaurant</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={'col-span-1 col-span-1 h-[12rem] rounded-xl ring-1 ring-neutral-950 flex flex-col items-start justify-between p-4'}>*/}
                {/*            <div className={'rounded-md h-16 w-16 ring-1 ring-neutral-950 flex items-center justify-center'}>*/}
                {/*                <p className={'text-xs text-center'}>Image Here</p>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <h3 className={'text-md'}>“Loved the products.”</h3>*/}
                {/*                <p className={'text-xs'}>- John Doe, CEO Local Restaurant</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={'col-span-1 col-span-1 h-[12rem] rounded-xl ring-1 ring-neutral-950 flex flex-col items-start justify-between p-4'}>*/}
                {/*            <div className={'rounded-md h-16 w-16 ring-1 ring-neutral-950 flex items-center justify-center'}>*/}
                {/*                <p className={'text-xs text-center'}>Image Here</p>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <h3 className={'text-md'}>“Loved the products.”</h3>*/}
                {/*                <p className={'text-xs'}>- John Doe, CEO Local Restaurant</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={'col-span-1 col-span-1 h-[12rem] rounded-xl ring-1 ring-neutral-950 flex flex-col items-start justify-between p-4'}>*/}
                {/*            <div className={'rounded-md h-16 w-16 ring-1 ring-neutral-950 flex items-center justify-center'}>*/}
                {/*                <p className={'text-xs text-center'}>Image Here</p>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <h3 className={'text-md'}>“Loved the products.”</h3>*/}
                {/*                <p className={'text-xs'}>- John Doe, CEO Local Restaurant</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={'mt-24 w-full h-auto flex flex-col items-center justify-center'}>
                    <h2 className={'text-2xl font-bold'}>Photo Gallery</h2>
                    <div className={'w-full grid grid-rows-1 md:grid-cols-2 grid-rows-1 gap-4 pt-6 px-4'}>
                        <div className={'rounded-xl bg-[#E8E8E8] h-[30rem] ring-1 ring-neutral-950 flex items-center justify-center col-span-1 row-span-1 bg-cover bg-center'} style={{ backgroundImage: `url(${setup})` }}></div>
                        <div className={'rounded-xl bg-[#E8E8E8] h-[30rem] ring-1 ring-neutral-950 flex items-center justify-center col-span-1 row-span-1 bg-cover bg-center'} style={{ backgroundImage: `url(${sideShot})` }}></div>
                        {/*<div className={'rounded-xl bg-[#E8E8E8] h-[30rem] ring-1 ring-neutral-950 flex items-center justify-center col-span-1 row-span-1'}>*/}
                        {/*    Photo Here*/}
                        {/*</div>*/}
                        {/*<div className={'rounded-xl bg-[#E8E8E8] h-[30rem] ring-1 ring-neutral-950 flex items-center justify-center col-span-1 row-span-1'}>*/}
                        {/*    Photo Here*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </Layout>
    )
}