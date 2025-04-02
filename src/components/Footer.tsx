import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="pt-40 container">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold" data-translate={true}>Sobre nós</h2>
          <p className="leading-[1.8]" data-translate={true}>
          O Armazém Sustentável surgiu da lembrança das iguarias dos antigos armazéns e do interesse pelas 
          questões da sustentabilidade e do comércio justo.
          </p>
          <p data-translate={true}>
          Estabelecido em abril de 2010, está localizado no Brejal, região que hoje é referência na produção 
          de orgânicos no estado do Rio de Janeiro. Situado a mil metros de altitude em relação ao nível do mar, é 
          cercado de Mata Atlântica nativa e por diversas nascentes, o que garante o frescor e a abundância de seus produtos.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Páginas</h2>

          <ul className="space-y-2">
            <li>Sobre nós</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-accent text-2xl pt-16">
            <FaFacebookF />
            <BsTwitter />
            <BsPinterest />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright 2024 Todos os direitos reservados
      </div>
    </div>
  );
};

export default Footer;
