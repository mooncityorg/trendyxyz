"use client";
import Link from "next/link";
import React, { FC } from "react";
import { DiscordIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "./Icons";
import FootPrint from "./FootPrint";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <section className="min-h-[800px] 2xl:min-h-[calc(100vh-40px)] relative pb-[120px] z-20">
      <div className="flex items-center justify-center md:justify-start gap-2 lg:gap-6 px-10 relative z-20">
        <div className="flex gap-2 mt-2 md:mt-4">
          <Link href={"https://x.com/icypopo?s=21&t=Cin8PdW-kdVFKSGuW2kSPw"} target="_blank">
            <div className="hover:scale-110 grid place-content-center">
              <TwitterIcon className="w-[80px] md:w-[120px]" />
            </div>
          </Link>
          <Link href={"https://t.me/icypoposol"} target="_blank">
            <div className="hover:scale-110 grid place-content-center">
              <TelegramIcon className="w-[80px] md:w-[120px]" />
            </div>
          </Link>
          <Link href={"#"} target="_blank">
            <div className="hover:scale-110 grid place-content-center">
              <InstagramIcon className="w-[80px] md:w-[120px]" />
            </div>
          </Link>
        </div>
        
      </div>

      <div className="relative justify-center w-full aspect-video">
        <Image
          className="z-[0]"
          style={{ top: "40%" }}
          src="/media/banner_elipse.svg"
          fill
          alt=""
        />
        <div className="absolute w-[60px] h-[30px] md:w-[140px] md:h-[70px] md:top-[79%] lg:top-[76%] bottom-[-10%] md:left-[5%] left-[5%] -rotate-2 hover:cursor-pointer hover:bottom-[-11%] lg:hover:top-[77%] md:hover:top-[80%] transition z-[4]">
          <Image src="/media/footprint_white.png" fill alt="" />
        </div>
        <div className="absolute w-[60px] h-[30px] md:w-[140px] md:h-[70px] md:top-[77%] lg:top-[71%] bottom-[-10%] md:left-[20%] left-[25%] -rotate-2 hover:cursor-pointer hover:bottom-[-11%] lg:hover:top-[72%] md:hover:top-[78%] transition z-[4]">
          <Image src="/media/footprint_white.png" fill alt="" />
        </div>
        <div className="absolute w-[60px] h-[30px] md:w-[140px] md:h-[70px] md:top-[77%] lg:top-[71%] bottom-[-10%] md:right-[20%] right-[25%] rotate-4 hover:cursor-pointer hover:bottom-[-11%] lg:hover:top-[72%] md:hover:top-[78%] transition z-[4]">
          <Image src="/media/footprint_white.png" fill alt="" />
        </div>
        <div className="absolute w-[60px] h-[30px] md:w-[140px] md:h-[70px] md:top-[79%] lg:top-[76%] bottom-[-10%] md:right-[5%] right-[5%] rotate-4 hover:cursor-pointer hover:bottom-[-11%] lg:hover:top-[77%] md:hover:top-[80%] transition z-[4]">
          <Image src="/media/footprint_white.png" fill alt="" />
        </div>
        <h1 className="relative text-[100px] text-white text-center z-[1]">
          POPO
        </h1>
        <div className="relative w-[300px] md:w-[480px] aspect-[8/15] mx-auto z-[3]">
          <Image
            src="/media/Popo.svg"
            className="w-full h-full object-contain"
            fill
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
