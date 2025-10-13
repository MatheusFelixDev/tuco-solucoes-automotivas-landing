import React, { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import print1 from "../assets/depoimentos/print1.png";
import foto1 from "../assets/depoimentos/foto1.jpg";
import foto2 from "../assets/depoimentos/foto2.jpg";
import foto3 from "../assets/depoimentos/foto3.jpg";

const depoimentos = [
  {
    id: 1,
    foto: foto1,
    print: print1,
    texto: "“descrição do serviço”",
  },
  {
    id: 2,
    foto: foto2,
    print: print1,
    texto: "“descrição do serviço”",
  },
  {
    id: 3,
    foto: foto3,
    print: print1,
    texto: "“descrição do serviço”",
  },
];

const Depoimentos = () => {
  return (
    <section
      id="depoimentos"
      className="py-20 text-white text-center relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-premium/textura-de-metal-escovado-prata-fundo-industrial_88281-3554.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-orange-500">
          Clientes satisfeitos e resultados reais 💬
        </h2>

        {/* Grid desktop / Carrossel mobile */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="hidden md:grid md:grid-cols-3 gap-10">
            {depoimentos.map((dep) => (
              <DepoCard key={dep.id} dep={dep} />
            ))}
          </div>

          {/* Mobile - carrossel */}
          <div className="md:hidden">
            <Swiper spaceBetween={20} slidesPerView={1.2} centeredSlides={true}>
              {depoimentos.map((dep) => (
                <SwiperSlide key={dep.id}>
                  <DepoCard dep={dep} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="mt-16">
          <a
            href="https://wa.me/5531994175536"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
          >
            <FaWhatsapp size={22} /> Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

const DepoCard = ({ dep }) => {
  const [isTouched, setIsTouched] = useState(false);

  // Alterna o efeito ao tocar no card (para mobile)
  const handleTouch = () => {
    setIsTouched(!isTouched);
  };

  return (
    <div
      className={`relative bg-gray-900/70 backdrop-blur-md border border-orange-500/30 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 group ${
        isTouched ? "scale-[1.02]" : "hover:scale-[1.02]"
      }`}
      style={{ height: "450px" }}
      onTouchStart={handleTouch}
    >
      <div className="relative h-full overflow-hidden">
        {/* Imagem principal (print/serviço) */}
        <img
          src={dep.foto}
          alt="Conversa WhatsApp"
          className="w-full h-full object-cover transition-transform duration-700 pointer-events-none"
        />

        {/* Foto inferior (sobe no hover ou toque) */}
        <div
          className={`absolute bottom-0 left-0 w-full overflow-hidden border-t-2 border-orange-500/70 shadow-[0_-10px_25px_rgba(0,0,0,0.6)] transition-all duration-700 ${
            isTouched ? "h-1/3" : "h-1/6 group-hover:h-1/3"
          }`}
        >
          <img
            src={dep.print}
            alt="Serviço realizado"
            className="w-full h-full object-cover object-center brightness-105 contrast-110 pointer-events-none"
          />

          {/* Gradiente e texto */}
          <div className="absolute top-0 left-0 w-full py-3 px-5 bg-gradient-to-b from-black/90 to-transparent text-left transition-all duration-500">
            <p className="italic text-gray-200 text-sm mb-1 bg-black/30 backdrop-blur-sm rounded-lg inline-block px-3 py-1">
              {dep.texto}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depoimentos;
