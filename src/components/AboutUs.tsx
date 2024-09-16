import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <section className="relative p-5 md:p-[80px]">
      <Image src="/media/available-background.svg" className="absolute bottom-0 z-0" fill alt=""/>
      <h1 className="text-white md:leading-normal text-5xl lg:text-8xl leading-[60px] text-center relative z-10 mb-20">
        About POPO
      </h1>
      <div className="relative mx-auto flex items-center max-w-[1000px] gap-10 mt-10 flex-col lg:flex-row">
        <div className="relative w-full">
          <div className="scale-110 absolute top-0 w-full h-full z-0">
            <Image src="/media/com_bg.png" fill alt="" />
          </div>
          <p className="relative text-2xl text-gray-800 lg:text-4xl p-10 z-10 text-center uppercase">
            Welcome to POPO, the latest and coldest addition to the Solana blockchain! Our unique mascot, a Polar Bear, infuses a fresh wave of creativity into the Solana ecosystem mixed with some gambling adiction. As the newest meme token, POPO aims to shake things up and add some excitement.
          </p>
        </div>
        <div className="relative h-[400px] aspect-[337/420]">
          <Image src="/media/bear_house.webp" fill className="rounded-md border-4 border-gray-800" alt="" />
        </div>
      </div>
    </section>
  );
}
