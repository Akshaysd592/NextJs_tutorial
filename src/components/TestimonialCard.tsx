"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The guitar is a wonderful instrument. It has the power to express emotions in a way that words cannot.",
    name: "Rajesh Kumar",
    title: "Musician",
  },
  {
    quote:
      "Drums are the heartbeat of music. They provide the rhythm and energy that drive a song forward.",
    name: "Priya Patel",
    title: "Musician",
  },
  {
    quote:
      "A good microphone can make all the difference in capturing the nuances of a singer's voice.",
    name: "Amit Sharma",
    title: "Singer",
  },
  {
    quote:
      "Headphones allow me to immerse myself in the music and hear every detail.",
    name: "Sneha Gupta",
    title: "Singer-Songwriter",
  },
];

const TestimonialCard = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black  dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 ">Hear our harmony : Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
