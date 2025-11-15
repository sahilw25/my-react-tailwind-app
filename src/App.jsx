import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FlowerCarousel from './components/FlowerCarousel'


export default function App() {
return (
<div>
<Header />
<main>
<Hero />
<section id="products" className="py-24 bg-[#F8F2ED] text-center overflow-hidden">
<h2 
  className="
    font-worksans
    font-normal text-center tracking-[-1px]
    text-[30px] leading-[40px]   /* mobile */
    md:text-[56px] md:leading-[72px]  /* desktop */
    mb-6
  "
>
  Quality Products
</h2>

<p 
  className="
    font-worksans
    font-normal text-center tracking-[0px]
    text-[16px] leading-[22px]   /* mobile */
    md:text-[24px] md:leading-[100%]  /* desktop */
    text-gray-600 max-w-3xl mx-4 md:mx-auto mb-12
  "
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
  tempor incididunt ut labore et dolore magna aliqua.
</p>


<FlowerCarousel />


</section>
</main>
</div>
)
}