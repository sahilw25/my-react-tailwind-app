import { useState, useRef } from "react";

const images = [
  { src: "/images/QPimage1.png", title: "Leaf Tones", desc: "Pattern-rich greenhouse grown foliage." },
  { src: "/images/QPimage2.png", title: "Garden Raised", desc: "Naturally nurtured for vibrant bloom." },
  { src: "/images/QPimage3.png", title: "Good harvest", desc: "A tradition of natural growth and responsible farming." },
  { src: "/images/QPimage4.jpg", title: "Season Bright", desc: "Bold flowers harvested with care." },
  { src: "/images/QPimage5.jpg", title: "Bed of Petals", desc: "Lovingly cultivated to last longer." }
];

export default function FlowerCarousel() {
  const [index, setIndex] = useState(2);
  const [animating, setAnimating] = useState(false);

  const startX = useRef(0);

  const handleStart = (x) => (startX.current = x);

  const handleEnd = (x) => {
    if (x < startX.current - 50 && index < images.length - 1) triggerChange(index + 1);
    if (x > startX.current + 50 && index > 0) triggerChange(index - 1);
  };

  const triggerChange = (newIndex) => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 350); // Reset animation
    setIndex(newIndex);
  };

  const offset = index * 308;

  return (
    <div className="w-full flex flex-col items-center my-20 select-none"> {/* Added top margin */}
      
      {/* CAROUSEL */}
      <div className="relative w-full flex justify-center items-center">
        <div
          className="flex gap-12 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(50% - ${offset + 130}px))`
          }}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseUp={(e) => handleEnd(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
          {images.map((item, i) => (
            <div
              key={i}
              className="shrink-0"
              style={{
                width: i === index ? 260 : 240,
                opacity: i === index ? 1 : 0.6,
                transform: `
                  scale(${i === index ? 1.12 : 1})
                  rotate(${(i - index) * 6}deg)
                `,
                transition: "0.5s"
              }}
            >
              <img
                src={item.src}
                className={`rounded-lg w-full object-cover ${
                  i === index ? "h-[380px]" : "h-[340px]"
                }`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* TEXT BELOW — smooth fade + slide up */}
      <div
        className={`
          text-center mt-10
          transition-all duration-500
          ${animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}
        `}
        key={index}
      >
        <h3 className="text-xl font-semibold">{images[index].title}</h3>
        <p className="text-gray-500 mt-1 text-sm">{images[index].desc}</p>
      </div>

    </div>
  );
}
