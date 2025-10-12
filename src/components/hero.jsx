import { FaWhatsapp } from "react-icons/fa";
import heroBg from "../assets/hero.jpeg";

// Hero com imagem de background e botão WhatsApp verde
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-black text-white py-32 text-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>

      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-orange-500 drop-shadow-lg">
          Seu carro em boas mãos
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Manutenção completa com agilidade, transparência e preço justo em
          Betim/MG.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/5531994175536"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all"
          >
            <FaWhatsapp size={22} /> Fale pelo WhatsApp
          </a>
          <a
            href="#formulario"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all"
          >
            Agendar serviço
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-sm text-gray-400 flex-wrap">
          <span>🔧 Mecânica de confiança</span>
          <span>⚙️ Diagnóstico rápido</span>
          <span>💬 Atendimento personalizado</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
