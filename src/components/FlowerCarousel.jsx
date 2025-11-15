import { useState, useRef } from "react";

export default function FlowerCarousel() {
  const images = [
    { src: `${import.meta.env.BASE_URL}images/QPimage1.png`, title: "Leaf Tones", desc: "Pattern-rich greenhouse grown foliage." },
    { src: `${import.meta.env.BASE_URL}images/QPimage2.png`, title: "Garden Raised", desc: "Naturally nurtured for vibrant bloom." },
    { src: `${import.meta.env.BASE_URL}images/QPimage3.png`, title: "Good harvest", desc: "A tradition of natural growth and responsible farming." },
    { src: `${import.meta.env.BASE_URL}images/QPimage4.jpg`, title: "Season Bright", desc: "Bold flowers harvested with care." },
    { src: `${import.meta.env.BASE_URL}images/QPimage5.jpg`, title: "Bed of Petals", desc: "Lovingly cultivated to last longer." }
  ];

  const [index, setIndex] = useState(2);
  const [animating, setAnimating] = useState(false);
  const startX = useRef(0);

  const handleStart = (x) => (startX.current = x);
  const handleEnd = (x) => {
    if (x < startX.current - 50 && index < images.length - 1) triggerChange(index + 1);
    if (x > startX.current + 50 && index > 0) triggerChange(index - 1);
  };

  const triggerChange = (i) => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
    setIndex(i);
  };

  const offset = index * 260;

  return (
    <div className="w-full flex flex-col items-center my-20 select-none">

      {/* CAROUSEL */}
      <div className="relative w-full flex justify-center items-center overflow-hidden">
        <div
          className="flex gap-10 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(calc(50% - ${offset}px), 0, 0)`,
            willChange: "transform",
          }}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseUp={(e) => handleEnd(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
          {images.map((item, i) => (
            <div
              key={i}
              className="shrink-0 transition-transform duration-300"
              style={{
                transform: `
                  scale(${i === index ? 1.15 : 0.92})
                  rotate(${(i - index) * 5}deg)
                `,
                willChange: "transform"
              }}
            >
              <img
                src={item.src}
                className="rounded-lg w-[240px] h-[350px] object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* TEXT */}
      <div
        className={`
          text-center mt-10 transition-all duration-300
          ${animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}
        `}
        key={index}
      >
        <h3 className="font-worksans text-[25px] md:text-[36px] mb-2">
          {images[index].title}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-[16px] md:text-[22px] leading-tight">
          {images[index].desc}
        </p>
      </div>

    </div>
  );
}
