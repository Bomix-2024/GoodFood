import Image from "next/image";
import React from "react";

const Survey = () => {
  return (
    <div className="container pt-40">
      <div className="grid lg:grid-cols-[50%,1fr] gap-20">
        <div>
          <Image
            className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>

        <div className="self-center" id="about">
          <h2 className="text-4xl md:text-6xl font-bold">Nossa</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            <span className="text-accent">História</span>
          </h2>

          <p className="text-gray-700 pt-16">
            Desde 2002, a Goodfood Alimentos tem se destacado no mercado nacional e internacional 
            de alimentos e bebidas. Nossa expertise abrange importação, exportação, logística, 
            distribuição e participação em feiras globais.
          </p>

          <p className="text-gray-700 pt-8">
            Nosso compromisso é conectar pequenas e médias empresas ao mercado global, 
            oferecendo soluções flexíveis e personalizadas para operações de comércio exterior. 
            Com presença na América do Norte, América do Sul, Europa e Ásia, estamos sempre 
            em busca de novos sabores e parcerias para enriquecer sua experiência gastronômica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
