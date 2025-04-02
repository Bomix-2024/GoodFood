'use client'
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { scrollToSelector, updateUrlWithoutNavigating } from "@/utils/scroll";

const Hero = () => {

  const handleNavClick = (selector: string) => {
    updateUrlWithoutNavigating(selector);
    scrollToSelector(selector);
  };

  return (
    <div className="relative min-h-screen">
      <Image
        className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
        src="/hero2.png"
        width={1000}
        height={600}
        alt="hero_bg"
      />
      <Navbar />
      <div className="container h-[calc(100vh-120px)] grid items-center" id="home">
        <div className="space-y-4 bg-[#ffffff98] w-fit p-4 lg:max-w-[600px]">
          <p className="uppercase font-medium" data-translate={true}>Sabores autênticos e saudáveis</p>
          <h2 className="text-4xl sm:text-6xl font-bold" data-translate={true}>
            Alimentos <span className="text-accent">Excepcionais</span>
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]" data-translate={true}>
            Explore nossa seleção premium de alimentos naturais e orgânicos. 
            Descubra sabores autênticos, nutra seu corpo e desperte seus sentidos 
            com o melhor que a natureza tem a oferecer.
          </p>

          <button  className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]" onClick={() => handleNavClick('#products')}>
            Explorar Produtos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
