import React from "react";
import Image from "next/image";

export default function Tokenomics() {
  return (
    <section className="min-h-[800px] py-[100px]">
      <div className="mx-auto px-4 ">
        <h1 className="block lg:w-[800px] w-full md:w-[400px] mx-auto text-4xl md:text-5xl font-bold text-[#2596ff] bg-white rounded-full text-center py-5">
          POPO TOKENOMICS
        </h1>
        <div className="flex items-center justify-between my-4 md:mx-auto pl-8 pr-4 py-2 bg-white rounded-[40px] lg:w-[800px]  w-full md:w-[400px]">
          <p className="text-xl w-full truncate">Coming soon</p>
          <button className="rounded-full w-[100px] h-[60px] bg-[#ffde68] border-2 border-[#19334a] py-4 shadow-[#19334a] shadow-release hover:shadow-hover transition">
            COPY
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 px-4 md:px-8 max-w-[1440px] place-content-around mx-auto mt-20 gap-10 sm:gap-20 md:gap-10 lg:gap-20">
          <div className="my-4 md:my-0 aspect-[3/4] rotate-6 p-2 bg-white rounded-[20px] border-4 xl:border-8 border-[#19334a]">
            <div className="relative w-[95%] mx-auto aspect-square rounded-[15px] border-4 xl:border-8 border-[#19334a]">
              <Image src="/media/bear_tax.webp" fill alt="" className="rounded-[5px]"/>
            </div>
            <p className="text-base lg:text-xl mt-5">TAX</p>
            <p className="text-lg lg:text-2xl">0/0</p>
          </div>
          <div className="my-4 md:my-0 aspect-[3/4] -rotate-6 p-2 bg-white rounded-[20px] border-4 xl:border-8 border-[#19334a]">
            <div className="relative w-[95%] mx-auto aspect-square rounded-[15px] border-4 xl:border-8 border-[#19334a]">
              <Image src="/media/bear_revoked.webp" fill alt="" className="rounded-[5px]"/>
            </div>
            <p className="text-base lg:text-xl mt-5">MINT & FREEZE</p>
            <p className="text-lg lg:text-2xl">REVOKED</p>
          </div>
          <div className="my-4 md:my-0 aspect-[3/4] -rotate-3 p-2 bg-white rounded-[20px] border-4 xl:border-8 border-[#19334a]">
            <div className="relative w-[95%] mx-auto aspect-square rounded-[15px] border-4 xl:border-8 border-[#19334a]">
              <Image src="/media/bear_tax.webp" fill alt="" className="rounded-[5px]"/>
            </div>
            <p className="text-base lg:text-xl mt-5">LIQUIDITY</p>
            <p className="text-lg lg:text-2xl">BURNED</p>
          </div>
          <div className="my-4 md:my-0 aspect-[3/4] rotate-12 p-2 bg-white rounded-[20px] border-4 xl:border-8 border-[#19334a]">
            <div className="relative w-[95%] mx-auto aspect-square rounded-[15px] border-4 xl:border-8 border-[#19334a]">
              <Image src="/media/bear_tax.webp" fill alt="" className="rounded-[5px]"/>
            </div>
            <p className="text-base lg:text-xl mt-5">TOTAL SUPPLY</p>
            <p className="text-lg lg:text-2xl">100M</p>
          </div>
        </div>
      </div>
    </section>
  );
}
