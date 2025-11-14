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
<h2 className="text-3xl font-medium mb-3">Quality Products</h2>
<p className="text-gray-600 max-w-2xl px-8 md:mx-auto mb-12 my-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


<FlowerCarousel />


</section>
</main>
</div>
)
}