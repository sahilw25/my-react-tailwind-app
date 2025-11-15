import React, { useEffect, useState, useRef } from 'react'


const IMAGES = [
  `${import.meta.env.BASE_URL}images/image1.png`,
  `${import.meta.env.BASE_URL}images/image2.jpg`,
  `${import.meta.env.BASE_URL}images/image3.jpg`,
  `${import.meta.env.BASE_URL}images/image4.jpg`
]


export default function Hero(){
const [index, setIndex] = useState(0)
const total = IMAGES.length
const intervalRef = useRef(null)


useEffect(()=>{
intervalRef.current = setInterval(()=>{
setIndex(i => (i+1)%total)
}, 5000)
return ()=> clearInterval(intervalRef.current)
},[])


useEffect(()=>{
// clear animation class when index changes
const slides = document.querySelectorAll('.slide')
slides.forEach(s => s.classList.remove('split'))
},[index])


function goNext(){
clearInterval(intervalRef.current)
setIndex(i => (i+1)%total)
intervalRef.current = setInterval(()=> setIndex(i=> (i+1)%total), 5000)
}


const nextIndex = (index+1)%total


return (
<section id="hero" className="relative w-full h-screen" aria-label="Hero slideshow">
<div className="image-container">
{IMAGES.map((src, i) => (
<div key={src} className={`slide ${i===index? 'active' : ''}`} style={{backgroundImage:`url(${src})`}} />
))}
</div>


<div className="absolute inset-0 flex flex-col justify-center text-white fade-up px-6 md:pl-[135px]">
<p className="text-sm md:text-base mb-2">Welcome To TenTwenty Farms</p>
<h1 className="text-[46px] md:text-[64px] font-normal leading-tight">From Our Farms<br/>To Your Hands</h1>
</div>


<div className="absolute bottom-8 flex items-center space-x-8 px-6 md:pl-[135px]">
<button aria-label="Next slide" onClick={goNext} className="relative w-20 h-20 flex items-center justify-center cursor-pointer group">
<div className="absolute inset-0 border-4 border-transparent border-t-white rounded-sm animate-borderRun" />
<div className="relative w-16 h-16 overflow-hidden">
<img id="thumb" src={IMAGES[nextIndex]} alt="Next slide preview" className="w-full h-full object-cover"/>
<div className="absolute inset-0 flex items-center justify-center text-white text-sm bg-black/40 group-hover:bg-black/60 transition">Next</div>
</div>
</button>


<div className="text-white text-sm">
<span id="slideCount">{String(index+1).padStart(2,'0')}</span> —— {String(total).padStart(2,'0')}
</div>
</div>
</section>
)
}