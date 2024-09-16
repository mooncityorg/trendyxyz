import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <section className="relative">
      <div className="relative w-full aspect-[7/1]">
        <Image src="/media/howto.png" fill alt="" />
      </div>
      <div className="max-w-[1440px] mx-auto relative">
        <div className="relative w-[20%] mx-auto aspect-[381/785] hidden lg:block">
          <Image src="/media/arrows.png" fill alt="" />
        </div>
        <div className="lg:absolute relative bottom-[-50px] w-full px-8">
          <div className="flex lg:flex-row flex-col lg:justify-between items-center">
            <div className="relative lg:w-[35%] w-[70%] aspect-[561/392] -mt-20">
              <Image src="/media/icedbg.svg" fill alt="" />
            </div>
            <div className="relative lg:w-[35%] w-[70%] aspect-[561/392]">
              <Image src="/media/icedbg2.svg" fill alt="" />
            </div>
          </div>
          <div className="flex  lg:flex-row flex-col lg:justify-between items-center">
            <div className="relative lg:w-[35%] w-[70%] aspect-[561/392]">
              <Image src="/media/icedbg3.png" fill alt="" />
            </div>
            <div className="relative lg:w-[35%] w-[70%] aspect-[561/392]">
              <Image src="/media/icedbg4.svg" fill alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
