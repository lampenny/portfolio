"use client";

import Carousel from "./Carousel";

export default function Projects() {
  return (
    <>
      <Carousel>
        <div className="w-full h-full flex flex-row text-black font-bold px-10">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="bg-white bg-opacity-80 flex flex-col gap-y-5 rounded-lg p-5">
              <div>
                <h2 className="text-2xl">Personal Finance Dashboard</h2>
                <p className="text-gray-600">
                  React, TypeScript, Next.js, Apache Echarts, Node.js,
                  PostgreSQL
                </p>
              </div>
              <p>
                A personal finance full stack web application to track and
                record income and expenses as well as provide an overview of
                your investments and pensions. Key features include user
                registration/login and data entry.
              </p>
              <div>
                <p>Code</p>
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="https://github.com/lampenny/squirrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FRONT END
                </a>{" "}
                |{" "}
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="https://github.com/lampenny/squirrl-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BACK END
                </a>
              </div>
            </div>
          </div>
          <div className="scale-125 w-1/2 items-center justify-center self-center -z-10">
            <img src="/pf.png" />
          </div>
        </div>

        <div className="w-full h-full flex flex-row text-black font-bold px-10">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex flex-col justify-center gap-y-5 bg-white bg-opacity-80 rounded-lg p-5">
              <div>
                <h2 className="text-2xl">Real Time Weather</h2>
                <p className="text-gray-600">
                  React, TypeScript, Tailwind, Jest
                </p>
                <span className="text-gray-600">-</span>
                <p className="text-gray-700">APIs: Leaflet and Accuweather</p>
              </div>
              <p>
                Fully responsive weather forecast web app with key features
                being location-based weather searches, an interactive map and
                current and weekly forecasts. Testing has been implemented using
                Jest and MSW to mock API calls.
              </p>
              <div>
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="https://weatherapp-pl.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>{" "}
                |{" "}
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="https://github.com/lampenny/weatherapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="scale-125 w-1/2 items-center justify-center self-center -z-10">
            <img src="https://user-images.githubusercontent.com/79977073/165549822-8d9f0412-c341-46d5-b5d0-445ca479a5b1.png" />
          </div>
        </div>

        <div className="w-full h-full flex flex-row text-black font-bold px-10">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex flex-col justify-center gap-y-5 bg-white bg-opacity-80 rounded-lg p-5">
              <div>
                <h2 className="text-2xl">Payroll REST API</h2>
                <p className="text-gray-600">Java, Spring Boot</p>
              </div>
              <p>
                A lightweight REST API for managing payroll data, providing
                endpoints for employees and payments. Users can perform CRUD
                operations (GET, POST, PUT, DELETE) on employee records and
                payment details. It follows RESTful principles, including
                hypermedia links for relevant operations, promoting
                discoverability and ease of use.
              </p>
              <div>
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="https://github.com/lampenny/payroll-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="scale-125 w-1/2 items-center justify-center self-center -z-10">
            <img src="/api.png" />
          </div>
        </div>

        <div className="w-full h-full flex flex-row text-black font-bold px-10">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex flex-col justify-center gap-y-5 bg-white bg-opacity-80 rounded-lg p-5">
              <div>
                <h2 className="text-2xl">Vocabulary Builder</h2>
                <p className="text-gray-600">React, TypeScript, Tailwind</p>
              </div>
              <p>
                A Japanese vocabulary builder web app designed to help language
                learning. It features input validation to ensure no blank
                entries and an interactive hover-to-reveal effect that mimics
                flashcards for effective memorization.
              </p>
              <div>
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="https://vocab-builder-pl.netlify.app/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>{" "}
                |{" "}
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="https://github.com/lampenny/vocabulary-builder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="scale-125 w-1/2 items-center justify-center self-center -z-10">
            <img src="/vocab.png" />
          </div>
        </div>

        <div className="w-full h-full flex flex-row justify-center items-center text-whitefont-bold px-10">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.github.com/lampenny"
          >
            Check out more projects on my GitHub →
          </a>
        </div>
      </Carousel>
    </>
  );
}
