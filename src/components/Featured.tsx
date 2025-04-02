import Image from "next/image";
import React from "react";
import Dash from "./Dash";

const Featured = () => {
  return (
    <div className="container pt-40 text-center lg:text-left" id="brands">
      <h2 className="text-4xl md:text-6xl font-bold" data-translate={true}>Marcas Parceiras</h2>
      <h2 className="text-4xl md:text-6xl font-bold pt-2" data-translate={true}>
        que <span className="text-accent">Valorizamos</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700" data-translate={true}>
        Trabalhamos com marcas que compartilham nossa paixão por qualidade e sustentabilidade. 
        Cada parceiro foi cuidadosamente selecionado para oferecer o melhor em alimentos saudáveis e deliciosos.
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end flex justify-center items-center flex-col">
          <Image
            className="w-96 max-w-[200px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__1.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash bg="bg-[#266da5]" />
            <h2 className="font-medium text-xl">Sweet Life</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Somos uma fábrica especializada em produtos alimentícios voltados para o público que busca opções diet, priorizando a alta qualidade e o bem-estar dos consumidores. Nosso compromisso é com a ética, a transparência e a constante melhoria de nossos produtos, visando ser referência no setor alimentício brasileiro, destacando-nos pela excelência em todas as operações.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto flex justify-center items-center flex-col">
          <Image
            className="w-96 max-w-[200px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__2.png"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash bg="bg-[#9a262b]" />
            <h2 className="font-medium text-xl">Amazem Sustentavel</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            O Armazém Sustentável, fundado em 2010 no Brejal, Rio de Janeiro, alia a tradição dos antigos armazéns à sustentabilidade e ao comércio justo. Situado em meio à Mata Atlântica, promove a produção orgânica, capacita a comunidade local e segue rigorosos padrões de qualidade artesanal. Oferece visitas e degustações mediante agendamento.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto self-end flex justify-center items-center flex-col">
          <Image
            className="w-96 max-w-[200px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__3.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash bg="bg-[#f1ebc7]" />
            <h2 className="font-medium text-xl">Byblos</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Localizada no Libano, é considerada a cidade mais antiga do mundo e é Patrimônio da Humanidade.
            Seguindo a tradição dos comerciantes libaneses os produtos Byblos são obtidos pela rigorosa seleção de matérias-primas e pela elaboração cuidadosa de quem há décadas se dedica a oferecer produtos de qualidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
