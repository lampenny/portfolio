"use client";

import { useState } from "react";
import Modal from "./Modal";
import About from "./About";
import Image from "next/image";

export default function Header() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  return (
    <div className="px-10 py-5 text-xl flex justify-between text-white">
      <h1>Penny Lam</h1>

      {showAbout && (
        <Modal onClick={() => setShowAbout(false)}>
          <About />
        </Modal>
      )}

      <div className="flex flex-row gap-x-10">
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
          About me
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
    </div>
  );
}
