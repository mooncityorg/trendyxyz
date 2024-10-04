"use client";
import React, { FC, useCallback, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { DocumentIcon, X } from "./Icons";
import { FaTelegramPlane, FaTwitter, FaDiscord } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { checkWallet } from "@/utils/util";
import { toast } from "react-toastify";

const Hero: FC = () => {
  const [wallet, setWallet] = useState("");

  const handleCheck = useCallback(async () => {
    const result = await checkWallet(wallet);
    if (result.success) {
      result.isExist ? toast.success("Your Wallet exists") : toast.warning("Not Exist")
    } else toast.error("Server error")
  }, [wallet])

  return (
    <div className="relative min-h-[100vh] flex flex-col itmes-center justify-center">
      <div className="absolute w-full bg-image h-[100vh] "></div>
      <div className="relative">
        <div className="mx-auto w-full md:pt-0 pt-[100px]">
          <div className="relative aspect-[950/475] w-3/5 mx-auto">
            <Image src="/media/logo.webp" fill alt="" />
          </div>
        </div>
        <div>
          <div className="mx-auto flex justify-between items-center my-32 md:my-8 md:w-[600px] gap-8 w-[60%]">
            <div className="p-4 rounded-full bg-yellow-400/70 w-50 md:w-100 aspect-square"><FaTelegramPlane color="3366ff" size={`100%`} /></div>
            <div className="p-4 rounded-full bg-yellow-400/70 w-50 md:w-100 aspect-square"><FaTwitter color="0066ff" size={`100%`} /></div>
            <div className="p-4 rounded-full bg-yellow-400/70 w-50 md:w-100 aspect-square"><FaDiscord color="#6600ff" size={`100%`} /></div>
            <div className="p-4 rounded-full bg-yellow-400/70 w-50 md:w-100 aspect-square"><CgFileDocument color="#ffffff" size={`100%`} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
