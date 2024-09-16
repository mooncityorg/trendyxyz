import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="relative w-full aspect-[16/5] mt-12">
        <Image src="/media/footer_pic.png" fill alt=""/>
      </div>
      <div className="bg-white w-full text-[#19334a]">
        <div className="flex flex-col md:flex-row px-8 items-center md:justify-between pb-8">
          <div className="flex flex-col items-center justify-end md:w-[25%] w-[70%]">
            <h1 className="text-6xl">POPO</h1>
            <h2>@ 2024 POPO. PolarBear.</h2>
          </div>
          <div className=" text-center md:w-[30%] w-[70%] md:my-0 my-4">
            <p>$POPO WAS MADE FOR A FAN AND HAS NO VALUE. DON’T RISK MONEY YOU ARE AFRAID OF LOSING. THE PRICE MAY GO UP OR IT MAY GO DOWN. WE ARE NOT RESPONSIBLE FOR THE PRICE OF THE TOKEN.</p>
          </div>
          <div className="flex items-end justify-center md:w-[25%] w-[70%]">
            <h2 className="text-lg">$POPO on Solana</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
