import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

const UpcomingWebinar = () => {
   const featuredWebinar = [
        {
          title: "Abbey Road",
          description:
            "Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969 by Apple Records. The recording sessions for the album were the last in which all four Beatles participated.",
          link: "/",
        },
        {
          title: "Thriller",
          description:
            "Thriller is the sixth studio album by American singer Michael Jackson, released on November 30, 1982, by Epic Records. It was produced by Jackson and Quincy Jones. Thriller explores genres similar to Jackson's previous album, Off the Wall (1979), including pop, post-disco, rock, and funk.",
          link: "/",
        },
        {
          title: "The Dark Side of the Moon",
          description:
            "The Dark Side of the Moon is the eighth studio album by English rock band Pink Floyd, released on 1 March 1973 by Harvest Records. It built on ideas explored in Pink Floyd's earlier recordings and performances, but without the extended instrumentals that characterised their earlier work.",
          link: "/",
        },
        {
          title: "Back in Black",
          description:
            "Back in Black is the seventh studio album by Australian rock band AC/DC. It was released on 25 July 1980 by Albert Productions and Atlantic Records. It is the band's first album to feature lead singer Brian Johnson, following the death of previous lead singer Bon Scott.",
          link: "/",
        },
        {
          title: "Rumours",
          description:
            "Rumours is the eleventh studio album by British-American rock band Fleetwood Mac, released on 4 February 1977 by Warner Bros. Records. Largely recorded in California in 1976, it was produced by the band with Ken Caillat and Richard Dashut.",
          link: "/",
        },
        {
          title: "Led Zeppelin IV",
          description:
            "Led Zeppelin IV is the fourth studio album by the English rock band Led Zeppelin, released on 8 November 1971 by Atlantic Records. It was produced by guitarist Jimmy Page and recorded between December 1970 and February 1971, mostly in the country house Headley Grange.",
          link: "/",
        },
      ];
      
  return (
    <div className='p-112 bg-gray-900 pb-4 pt-6'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 '>
            <div className='text-center'>
                <h2 className='text-base text-teal-600
                font-semibold tracking-wide uppercase '>Featured Webinars</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl '>Enhance Your Musical Journey</p>
            </div>
            <div className='mt-10'>
            <HoverEffect items={featuredWebinar} />
            </div>
            <div className='mt-10 text-center mb-8 '>
                <Link href={"/"}
                className='px-4 py-2 rounded border border-neutral-600 text-neutral-700  bg-white hover:bg-gray-100 transition duration-200'>
                    View All Webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinar