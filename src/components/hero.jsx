import React from "react";
import heroBg from "../assets/hero.jpeg";
// Hero com imagem de background e botão WhatsApp verde
const Hero = () => (
  <section
    className="relative bg-black text-white py-24 text-center flex items-center justify-center"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay com degradê suave */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

    <div className="relative z-10 max-w-2xl px-4">
      <h1 className="text-5xl font-extrabold mb-4 text-orange-500 drop-shadow-lg">
        Tuco Soluções Automotivas
      </h1>
      <p className="text-lg mb-8 text-gray-100 drop-shadow-md">
        Mecânica de confiança em Betim/MG — manutenção completa para seu veículo
        com rapidez, transparência e qualidade.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://wa.me/5531994175536"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300"
        >
          Fale no WhatsApp
        </a>
        <a
          href="#formulario"
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300"
        >
          Agendar serviço
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
