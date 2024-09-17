"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { DocumentIcon, X } from "./Icons";

const Hero: FC = () => {
  return (
    <div className="">
      <div className="mx-auto w-full md:pt-0 pt-[100px]">
        <div className="relative aspect-[950/475] w-2/3 mx-auto">
          <Image src="/media/logo.webp" fill alt="" />
        </div>
      </div>
      <div className="w-full mb-4">
        <div className="text-[40px] text-center my-4">
          Wallet Checker
        </div>
        <div className="flex rounded-full h-12 md:w-[768px] w-[95%] bg-blue-100 shadow-lg p-1 gap-4 mx-auto">
          <div className="rounded-full h-10 aspect-square shadow-lg flex bg-white justify-center items-center hover:cursor-pointer">
            <Search />
          </div>
          <input className="border-0 bg-transparent focus:outline-0 w-full" />
        </div>
      </div>
      <div>
        <div className="mx-auto flex justify-between items-center my-8 md:w-[600px] w-[75%]">
          <div className="relative aspect-[28/36] w-16 md:w-24 hover:cursor-pointer ">
            <DocumentIcon />
          </div>
          <div className="relative aspect-[461/431] w-16 md:w-24 hover:cursor-pointer ">
            <X />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative aspect-[868/475] w-full">
          <Image src="/media/main.webp" fill alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
