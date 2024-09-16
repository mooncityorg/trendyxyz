"use client";
import Link from "next/link";
import React, { FC } from "react";
import { DiscordIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "./Icons";
import FootPrint from "./FootPrint";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <section className="min-h-[800px] 2xl:min-h-[calc(100vh-40px)] relative pb-[120px] z-20">
      <div className="w-full flex items-center justify-center flex-col">
        <img src="/media/logo.webp" alt="logo" />
        <p className="text-black text-2xl mt-5">Wallet Checker</p>
        <input type="search" name="search" id="search" className="text-2xl w-2/3 mt-5 bg-[#D2D0EC] rounded-full" />
      </div>
      <img src="/media/main.webp" alt="" className="w-full" />
    </section>
  );
};

export default Hero;
