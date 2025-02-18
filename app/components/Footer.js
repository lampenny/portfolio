"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import About from "./About";
import Projects from "./Projects";

export default function Footer() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="row-start-3 flex gap-8 flex-wrap items-center justify-center text-white">
      {showAbout && (
        <Modal onClick={() => setShowAbout(false)}>
          <About />
        </Modal>
      )}

      {showProjects && (
        <Modal onClick={() => setShowProjects(false)}>
          <Projects />
        </Modal>
      )}
      <button
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        onClick={() => setShowAbout((prev) => !prev)}
        disabled={showProjects}
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        About
      </button>
      <button
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        onClick={() => setShowProjects((prev) => !prev)}
        disabled={showAbout}
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Projects
      </button>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.github.com/lampenny"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        My GitHub →
      </a>
    </div>
  );
}
