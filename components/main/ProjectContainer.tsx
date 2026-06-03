"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  { id: 1, url:"https://monishka.netlify.app", src:"/Portfolio.png", title:"Modern Next.js Portfolio", description:"This is this portfolio website created using nextjs, threejs and tailwind."},
  { id: 2, url:"https://chatblinkclient.vercel.app", src:"/Chatblink.png", title:"Chat Application", description:"Real time Chat application created using MERN stack along with material ui." },
  { id: 3, url:"https://authentication1-mern.netlify.app", src:"/MernAuth.png", title: "Demo Authentication", description:"This is a authentication app created using MERN Stack." },
  { id: 4, url:"https://quleepassignment-monishka.netlify.app", src:"/Quleep.png", title: "Product Dashboard", description:"This is a product dashboard created using React and Tailwind CSS." },
  // { id: 5, url:"/NextWebsite.png", src:"/CardImage.png", title: "Card 5", description:" sfsa" },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const extendedCards = [...cards, ...cards, ...cards, ...cards, ...cards, ...cards, ...cards, ...cards, ...cards, ...cards];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollLeft = container.scrollWidth / 2;
  }, []);

const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
  const container = containerRef.current;
  if (!container) return;

  setIsDragging(true);

  const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
  setStartX(pageX);
  setScrollLeft(container.scrollLeft);
};

const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
  if (!isDragging) return;

  const container = containerRef.current;
  if (!container) return;

  const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
  const walk = (startX - pageX) * 2;

  container.scrollLeft = scrollLeft + walk;
};

  const stopDrag = () => setIsDragging(false);

const handleScroll = () => {
  const container = containerRef.current;
  if (!container) return;

  const maxScroll = container.scrollWidth;

  if (container.scrollLeft <= 0) {
    container.scrollLeft = maxScroll / 2;
  } else if (container.scrollLeft >= maxScroll - container.clientWidth) {
    container.scrollLeft = maxScroll / 2;
  }
};



  return (
    <div className="z-20 w-full overflow-hidden py-1 sm:py-10">
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing px-6 scroll-smooth py-6"
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={startDrag}
        onTouchMove={onDrag}
        onTouchEnd={stopDrag}
        onScroll={handleScroll}
        
      >
        {extendedCards.map((card, index) => (
          <div
            key={index}
            className="min-w-75 md:min-w-87.5 lg:min-w-112.5  rounded-xl backdrop-blur-xl  border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex justify-center text-white text-xl flex-col font-semibold hover:scale-105 hover:border-white transition-all duration-300 "
          >
            <Link href={card.url} target="_blank" rel="noopener noreferrer">
             <Image
        src={card.src}
        alt={card.title}
        width={480}
        height={300}
        className="w-full object-contain" style={{ borderTopLeftRadius: "0.75rem", borderTopRightRadius: "0.75rem" }}
      />

      <div className="relative p-4">
      
        <h1 className="text-2xl font-semibold text-white">{card.title}</h1>
        <p className="mt-2 text-gray-300 font-light text-base">{card.description}</p>
        
      </div>
          </Link>
          </div>
        ))}
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
          
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
