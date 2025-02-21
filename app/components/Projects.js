"use client";

import content from "../../public/data";
import Carousel from "./Carousel";
import CarouselCard from "./CarouselCard";

export default function Projects() {
  const slides = [
    ...content.projects.map((project) => (
      <CarouselCard
        key={project.title}
        data={project}
        hasDemo={project.hasDemo}
        isFullStack={project.isFullStack}
      />
    )),
    <div
      key="final"
      className="w-full h-full flex flex-row justify-center items-center text-white font-bold px-10"
    >
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.github.com/lampenny"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out more projects on my GitHub →
      </a>
    </div>,
  ];

  return <Carousel>{slides}</Carousel>;
}
