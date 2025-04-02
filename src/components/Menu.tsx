'use client';
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import Dash from "./Dash";
import MenuCard from "./MenuCard";

const menuData = [
  {
    brand: 'Armazem Sustentavel',
    img: "/armazem-sustentavel/logo.png",
    products: [
      {
        img: "/armazem-sustentavel/mel-organico.png",
        title: "Mel silvestre orgânico",
        desc: "Consumir mel comum pode resultar na ingestão de antibióticos usados nas abelhas. No mel orgânico, as abelhas não recebem essas substâncias, e o néctar das flores é livre de aditivos, tornando a produção mais natural.",
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/vinagre-de-vegetais.png",
        title: "Vinagre de vegetais",
        desc: "Após cuidadosa busca, selecionamos para você um vinagre orgânico, de caldo de cana, com lotes produzidos exclusivamente para o Armazém Sustentável no Rio Grande do Sul.",
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/oleo-de-coco.png",
        title: "Óleo de coco extra virgem orgânico",
        desc: "O Óleo de Coco é saudável, saboroso e amplamente usado em cozinhas do Pacífico e Oriental. É livre de glúten, colesterol, vegano, tem acidez máxima de 0,1%, e é produzido de forma sustentável. Além disso, possui certificação orgânica do USDA e da Comunidade Econômica Europeia.",
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/pimentaPera.png",
        title: "Geléia de pimenta e pera",
        desc: "Levemente picante, feita com pimentas dedo-de-moça e pera dura do Brejal, esta geleia é versátil, ideal para acompanhar carnes, frutos do mar ou ser usada em molhos agridoce, especialmente em Fondue Bourguignonne.",
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/berinjela.png",
        title: "Conserva orgânica de berinjelas",
        desc: "Tem como diferencial um sabor agridoce, conferido na sua elaboração pela utilização de uvas passas flambadas em vinho licoroso doce e do aceto balsâmico de Modena, com mínima adição de sal.",
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/escabeche.png",
        title: "Molho escabeche orgânico para pescados e aves",
        desc: "Antes da refrigeração, peixes e aves eram conservados em molho escabeche na Espanha. Hoje, esse molho é usado em tapas, podendo ser combinado com peixes grelhados, frutos do mar ou aves grelhadas, sendo simples de preparar ao adicionar o molho pronto às carnes.",
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/pepino.png",
        title: "Conserva orgânica de pepino agridoce com gengibre",
        desc: "Com um toque de gengibre e pimenta-dedo-de-moça, esta conserva oferece uma sensação refrescante. Sugestões de consumo incluem servir como amuse-bouche, sunomono com kani ou salmão cru, guarnição para embutidos ou como relish para cachorro-quente.",
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/geleiaLaranjadaTerra.png",
        title: "Geleia orgânica de laranja-da-terra",
        desc: 'A "Seville Orange Marmelade – Thin Cut" é uma receita inglesa original, feita com cascas de laranja finamente cortadas. No Brasil, as frutas são colhidas sazonalmente em propriedades do Brejal, incluindo na sede do Armazém Sustentável.',
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/geleiaLaranjadaTerra (1).png",
        title: "Geleia orgânica de jabuticaba",
        desc: "Com frutas orgânicas colhidas no Brejal, esta geleia brasileira é ideal para pães e torradas, tapioca com queijo de coalho, molho de jabuticaba para carnes, e combina bem com patês e queijos como Emmental e Gruyère. Validade de 18 meses.",
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/geleiaTomate.png",
        title: "Geleia orgânica de tomate",
        desc: 'Este tomate orgânico aromatizado com capim-limão, funcho e gengibre tem consistência de goiabada mole e é versátil. Combina com queijos Minas e Canastra como um fino "Romeu e Julieta", além de acompanhar pães, torradas, iogurte e tapioca com queijo. Também serve como recheio para pão de queijo, calda para sorvetes e ingrediente para molho agridoce de carnes. Validade de 18 meses.',
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/atum.png",
        title: "Atum sólido em azeite de oliva extra virgem",
        desc: "O lombo de atum é realçado pelo azeite de oliva extra virgem e capturado de forma sustentável no litoral do Rio Grande do Sul e Santa Catarina. Produzido pela centenária empresa Leal Santos, que pratica pesca ecológica há mais de 40 anos, em parceria com a marca Armazém Sustentável.",
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/berinjela3k.png",
        title: "Conserva de berinjelas ao vinho pote institucional de 3kg",
        desc: "A conserva orgânica de berinjelas do Armazém Sustentável também está disponível em versão convencional, sem aditivos químicos ou conservantes. Deve ser refrigerada, e uma coloração verde azeitona pode aparecer devido ao resfriamento do azeite. Fora da geladeira por 15 minutos, o sabor e a textura originais serão restaurados. A validade está impressa no rótulo.",
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/houmus.png",
        title: "Houmus tahine",
        desc: "Produzida com os ingredientes clássicos da receita, combina perfeitamente com a conserva orgânica de berinjelas do Armazém Sustentável. Produzida artesanalmente, sem aditivos ou conservantes químicos.",
        price: "$29.50",
      },
      {
        img: "/armazem-sustentavel/berinjelaOrganica3k.png",
        title: "Conserva orgânica de berinjelas pote institucional de 3 kg",
        desc: "Esta conserva agridoce é feita com uvas passas flambadas em vinho licoroso e aceto balsâmico de Modena, com mínima adição de sal. Feita com 96% de ingredientes orgânicos, como berinjelas, cebolas, alho e pimenta dedo-de-moça, e certificada pela ABIO. Ideal para bares e restaurantes, pode ser usada em massas, canapés, sanduíches, saladas, tortas e tapioca.",
        price: "$29.50",
      },
      // {
      //   img: "/sweetlife/",
      //   title: "aaaaaaaaaaa",
      //   desc: "aaaaaaaaaa",
      //   price: "$29.50",
      // },
      // {
      //   img: "/sweetlife/",
      //   title: "aaaaaaaaaaa",
      //   desc: "aaaaaaaaaa",
      //   price: "$29.50",
      // },
      // {
      //   img: "/sweetlife/",
      //   title: "aaaaaaaaaaa",
      //   desc: "aaaaaaaaaa",
      //   price: "$29.50",
      // },
      // {
      //   img: "/sweetlife/",
      //   title: "aaaaaaaaaaa",
      //   desc: "aaaaaaaaaa",
      //   price: "$29.50",
      // },
    ]
  },
  {
    brand: 'Sweet Life',
    img: "/sweetlife/logo.png",
    products: [
    {
        img: "/sweetlife/61-nh95mwrl-_ac_sl1000_-4zbki3tmf6.jpg",
        title: "Bala sem açúcar Sweet Life 32g - Maracujá",
        desc: "Desfrute de um saboroso momento sem se preocupar com açúcares, calorias ou ingredientes indesejados com a Bala Diet Sabor Maracujá. Um toque indulgente para a sua dieta controlada!",
        price: "$29.50",
      },
      {
        img: "/sweetlife/1-nccxdy1do3.png",
        title: "Bala sem açúcar Sweet Life 32g - Hortelã",
        desc: "Desfrute da deliciosa Bala Diet Sabor Hortelã, especialmente formulada para atender às necessidades daqueles que buscam uma dieta com ingestão controlada de açúcares.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/1-2mxvb91orc.png",
        title: "Bala sem açúcar Sweet Life 32g - Gengibre",
        desc: "Desfrute da deliciosa Bala Diet Sabor Gengibre, especialmente formulada para atender às necessidades daqueles que buscam uma dieta com ingestão controlada de açúcares.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/1-0exw018iec.png",
        title: "Bala sem açúcar Sweet Life 32g - Frutas Vermelhas",
        desc: "Desfrute da deliciosa Bala Diet Sabor Frutas Vermelhas, especialmente formulada para atender às necessidades daqueles que buscam uma dieta com ingestão controlada de açúcares.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/1-d9gki9zse3.png",
        title: "Bala sem açúcar Sweet Life 32g - Cereja",
        desc: "Desfrute da deliciosa Bala Diet Sabor Careja, especialmente formulada para atender às necessidades daqueles que buscam uma dieta com ingestão controlada de açúcares.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/pocket-cafe-sweet-life-gold-premium-floppi-mista-frutas-tropicais-abacaxi--laran-7z8uvzleup.png",
        title: "Bala sem açúcar Sweet Life 32g - Café",
        desc: "Desfrute da deliciosa Bala Diet Sabor Café, especialmente formulada para atender às necessidades daqueles que buscam uma dieta com ingestão controlada de açúcares.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/sweet-life-gold-premium-floppi-mista-frutas-morango--splum-co0uqp7ivc.png",
        title: "Bala sem açúcar Sweet Life 32g - Morango",
        desc: "Desfrute da deliciosa Bala Diet Sabor Morango, especialmente formulada para atender às necessidades daqueles que buscam uma dieta com ingestão controlada de açúcares.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/112dfafc-bd56-46ab-9d4e-70201b63997a-j239gppvmy.jpg",
        title: "Bala sem açúcar Sweet Life 32g - Tangerina",
        desc: "Desfrute da deliciosa Bala Diet Sabor Tangerina, especialmente formulada para atender às necessidades daqueles que buscam uma dieta com ingestão controlada de açúcares.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/61ttsf1p9nl-_ac_sl1000_-mmlmce9ska.jpg",
        title: "Bala sem açúcar Sweet Life Mista Zero Açucar Vegana Diet Lata 32g",
        desc: "Desfrute da deliciosa Bala Diet Sabor Mista, especialmente formulada para atender às necessidades daqueles que buscam uma dieta com ingestão controlada de açúcares.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/8ff4a3b8-56c1-40bb-82a1-c1a2df83a53a-1cylabr137.jpg",
        title: "Drageado Uva Passa C/ Chocolate Meio Amargo Callebaut 70%",
        desc: "Os Drageados de Uva Passas coberto com Chocolate Meio Amargo Belga Callebaut , fazem parte da Linha Cocoração, que não possui pouca adição de açúcares, sendo uma perfeita escolha para aqueles que querem uma opção prazerosa sem deixar a saúde de lado.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/d_nq_np_2x_734875-mlb70276016321_072023-f-3khjoiebss.jpg",
        title: "Lata Kombucha Refrigerante Fermentado Tangerina 310ml",
        desc: "A kombucha é uma bebida funcional feita pela fermentação controlada do chá verde com bactérias e leveduras (SCOBY). A Pod é a primeira kombucha brasileira sem açúcar em lata, com o açúcar totalmente convertido em ácidos orgânicos e gás carbônico natural durante a fermentação. O resultado é um chá frisante, saboroso, baixo em calorias e com vários benefícios ao organismo.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/d_nq_np_2x_646777-mlb70253569154_072023-f-ma2fhawe7v.jpg",
        title: "Lata Kombucha Refrigerante Fermentado Frutas Vermelhas 310ml",
        desc: "A kombucha é uma bebida funcional feita pela fermentação controlada do chá verde com bactérias e leveduras (SCOBY). A Pod é a primeira kombucha brasileira em lata e sem açúcar. Durante a fermentação, o açúcar é convertido em ácidos orgânicos e gás carbônico natural, resultando em um chá frisante, saboroso, baixo em calorias e com vários benefícios à saúde.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/d_nq_np_2x_830197-mlb70276017383_072023-f-sd2lxj6f1b.jpg",
        title: "Lata Kombucha Refrigerante Fermentado Abacaxi Com Hortelã 310ml",
        desc: "A kombucha é uma bebida feita pela fermentação do chá verde com bactérias e leveduras (SCOBY). A Pod é a primeira kombucha brasileira em lata e sem açúcar. O açúcar é convertido em ácidos orgânicos e gás carbônico natural, resultando em um chá frisante, saboroso, baixo em calorias e benéfico à saúde.",
        price: "$29.50",
      },
      {
        img: "/sweetlife/d_nq_np_2x_662885-mlb70859050958_082023-f-euvaqftzxo.jpg",
        title: "Kombucha Frisante Limão Siciliano E Hortelã Zero Açúca 750ml",
        desc: "A Kombucha Frisante Sabor Limão Siciliano e Hortelã Zero Açúcar 750ml da Pod é uma bebida espumante, não alcoólica, fermentada a baixas temperaturas e naturalmente gaseificada. Feita com ingredientes 100% naturais e de alta qualidade, não contém açúcar residual, conservantes ou gás carbônico adicional. Pode ser armazenada em temperatura ambiente devido ao término da fermentação dentro da garrafa.",
        price: "$29.50",
      },
    ]
  }
]

const Menu = () => {
const [menuActive, setMenuActive] = useState(0);

  return (
    <div className="container pt-40 " id="products">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold" data-translate={true}>
          Nosso <span className="text-accent">Catálogo</span>
        </h2>
        <p className="text-gray-700 max-w-[600px] mx-auto" data-translate={true}>
          Descubra uma seleção cuidadosa de produtos premium, elaborados com ingredientes 
          de alta qualidade. Cada item em nosso catálogo reflete nosso compromisso com 
          a excelência e o sabor autêntico.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        {menuData.map((item, index) => (
          <li
            key={index}
            onClick={() => setMenuActive(index)}
            className={twMerge('cursor-pointer', menuActive === index
              ? "bg-accent text-white p-1"
              : "")}
          >
            {item.brand}
          </li>
        ))}
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src={menuData[menuActive].img}
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuData.map((item, index) => (
            menuActive === index &&
            item.products.map((product, indexProduct) => (

                <MenuCard
                key={indexProduct}
                img={product.img}
                title={product.title}
                desc={product.desc}
                price={product.price}
              />
            ))
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
