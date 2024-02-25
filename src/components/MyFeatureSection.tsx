"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
    {
      title: "Guitar",
      description:
        "A guitar is a musical instrument that usually has six strings. It is played by strumming or plucking the strings with the fingers, thumb, or a pick. Guitars come in various types, including acoustic, electric, and classical.",
    },
    {
      title: "Drums",
      description:
        "Drums are a percussion instrument that consists of at least one membrane, called a drumhead or drum skin, stretched over a shell and struck, either directly with the player's hands or with a percussion mallet, to produce sound.",
    },
    {
      title: "Microphone",
      description:
        "A microphone, colloquially called a mic or mike, is a transducer that converts sound into an electrical signal. Microphones are used in many applications such as telephones, hearing aids, public address systems for concert halls and public events, motion picture production, live and recorded audio engineering, sound recording, two-way radios, megaphones, radio and television broadcasting, and in computers for recording voice, speech recognition, VoIP, and for non-acoustic purposes such as ultrasonic sensors or knock sensors.",
    },
    {
      title: "Headphones",
      description:
        "Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear.",
    },
  ];
  
const MyFeatureSection = () => {
  return (
    <div className="m-10 file:">
       <StickyScroll content={content}/>
    </div>
  )
}

export default MyFeatureSection;