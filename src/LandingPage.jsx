import React from "react";
import heroBg from "./assets/hero.jpeg";
// Hero com imagem de background e botão WhatsApp verde
const Hero = () => (
  <section
    className="relative bg-black text-white py-24 text-center flex items-center justify-center"
    style={{
      backgroundImage: `url('https://jfortepneus.com.br/wp-content/uploads/2022/10/Oficina-Mecanica-na-Pedro-I.jpg')`,
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

const Servicos = () => (
  <section className="py-16 bg-black text-white text-center">
    <h2 className="text-3xl font-bold mb-8">Nossos Serviços</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {[
        "Mecânica Geral",
        "Suspensão",
        "Freios",
        "Soldas",
        "Balanceamento",
        "Troca de Óleo",
      ].map((servico) => (
        <div key={servico} className="bg-gray-900 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2 text-orange-500">
            {servico}
          </h3>
          <p className="text-sm text-gray-300">
            {servico === "Mecânica Geral" &&
              "Diagnóstico completo e reparos para todos os sistemas do veículo."}
            {servico === "Suspensão" &&
              "Mais estabilidade, conforto e segurança para seu carro."}
            {servico === "Freios" &&
              "Inspeção e manutenção para frear com segurança."}
            {servico === "Soldas" &&
              "Serviços de soldagem com precisão e acabamento profissional."}
            {servico === "Balanceamento" &&
              "Evite vibrações e desgaste irregular dos pneus."}
            {servico === "Troca de Óleo" &&
              "Troca rápida e segura com produtos de qualidade."}
          </p>
        </div>
      ))}
    </div>
  </section>
);

const Diferenciais = () => (
  <section className="py-16 text-center bg-black text-white">
    <h2 className="text-3xl font-bold mb-8 text-orange-500">
      Por que escolher a Tuco Soluções Automotivas?
    </h2>
    <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-300">
      <li>✅ Atendimento rápido e agendamento online.</li>
      <li>✅ Equipe experiente e especializada.</li>
      <li>✅ Equipamentos modernos e diagnóstico preciso.</li>
      <li>✅ Transparência e confiança no orçamento.</li>
      <li>
        ✅ Localização fácil: Rua Nova Ponte, 312 – São Caetano, Betim/MG.
      </li>
    </ul>
  </section>
);

const Depoimentos = () => (
  <section className="py-16 bg-black text-white text-center">
    <h2 className="text-3xl font-bold mb-8 text-orange-500">
      O que dizem nossos clientes
    </h2>
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
      <div className="bg-gray-900 p-6 rounded-2xl shadow">
        <p className="italic mb-4 text-gray-300">
          “Atendimento excelente e serviço rápido. Meu carro ficou perfeito!”
        </p>
        <h4 className="font-semibold text-orange-500">– João S.</h4>
      </div>
      <div className="bg-gray-900 p-6 rounded-2xl shadow">
        <p className="italic mb-4 text-gray-300">
          “Equipe honesta e prestativa. Melhor oficina de Betim!”
        </p>
        <h4 className="font-semibold text-orange-500">– Maria L.</h4>
      </div>
      <div className="bg-gray-900 p-6 rounded-2xl shadow">
        <p className="italic mb-4 text-gray-300">
          “Resolvem o problema sem enrolação e com preço justo.”
        </p>
        <h4 className="font-semibold text-orange-500">– Carlos M.</h4>
      </div>
    </div>
  </section>
);

const Formulario = () => (
  <section id="formulario" className="py-16 bg-black text-white text-center">
    <h2 className="text-3xl font-bold mb-6 text-orange-500">
      Agende seu serviço
    </h2>
    <p className="mb-8 text-gray-300">
      Preencha o formulário abaixo ou fale conosco pelo WhatsApp.
    </p>
    <form className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        placeholder="Seu nome"
        className="w-full p-3 rounded-lg text-black"
        required
      />
      <input
        type="tel"
        placeholder="Telefone"
        className="w-full p-3 rounded-lg text-black"
        required
      />
      <input
        type="text"
        placeholder="Modelo do carro"
        className="w-full p-3 rounded-lg text-black"
      />
      <textarea
        placeholder="Serviço desejado"
        className="w-full p-3 rounded-lg text-black"
        rows={4}
      ></textarea>
      <button
        type="submit"
        className="w-full border border-orange-500 hover:bg-orange-500 hover:text-black text-orange-500 py-3 rounded-lg font-semibold"
      >
        Enviar solicitação
      </button>
    </form>
    <div className="mt-8">
      <a
        href="https://wa.me/5531994175536"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Falar no WhatsApp
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-gray-300 py-6 text-center">
    <p className="text-sm">
      © {new Date().getFullYear()} Tuco Soluções Automotivas — Rua Nova Ponte,
      312 – São Caetano, Betim/MG
    </p>
    <p className="text-sm text-orange-500">Contato: (31) 99417-5536</p>
  </footer>
);

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Servicos />
      <Diferenciais />
      <Depoimentos />

      <Footer />
    </>
  );
}
