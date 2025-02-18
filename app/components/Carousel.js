import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = children.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex justify-center items-center w-[800px] h-[450px] overflow-hidden mb-10 rounded-xl">
      {children.map((child, index) => (
        <div
          key={index}
          className={`w-full h-full flex justify-center items-center transition-opacity duration-500 ${
            index === currentIndex ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          {child}
        </div>
      ))}

      <button
        className="absolute -left-2 drop-shadow-md w-8 h-8 text-white hover:cursor-pointer bg-black/50 p-2 rounded-full"
        onClick={prevSlide}
      >
        <ArrowLeftIcon />
      </button>

      <button
        className="absolute -right-2 drop-shadow-md w-8 h-8 text-white hover:cursor-pointer bg-black/50 p-2 rounded-full"
        onClick={nextSlide}
      >
        <ArrowRightIcon />
      </button>

      <div className="absolute bottom-4 flex">
        {children.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full border-none outline-none shadow-md mx-1 cursor-pointer transition-all ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
