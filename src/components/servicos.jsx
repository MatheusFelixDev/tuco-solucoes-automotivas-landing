import React from "react";
import {
  FaCogs,
  FaCarCrash,
  FaOilCan,
  FaBalanceScale,
  FaWrench,
  FaTools,
} from "react-icons/fa";

const Servicos = () => {
  const servicos = [
    {
      titulo: "Mecânica Geral",
      descricao:
        "Serviços completos de manutenção preventiva e corretiva, com diagnóstico preciso, equipamentos modernos e técnicos qualificados para garantir o melhor desempenho do seu veículo.",
      icone: <FaCogs className="text-2xl text-orange-500 mr-2" />,
    },
    {
      titulo: "Suspensão",
      descricao:
        "Recuperamos o conforto e a estabilidade do seu carro com serviços de amortecedores, molas, pivôs e buchas. Ajustamos cada detalhe para uma direção mais segura e suave.",
      icone: <FaCarCrash className="text-2xl text-orange-500 mr-2" />,
    },
    {
      titulo: "Freios",
      descricao:
        "Manutenção completa de sistemas de freio — pastilhas, discos, fluido e cilindros. Tudo para garantir frenagens seguras e respostas rápidas em qualquer situação.",
      icone: <FaBalanceScale className="text-2xl text-orange-500 mr-2" />,
    },
    {
      titulo: "Soldas e Reparos",
      descricao:
        "Realizamos soldas estruturais e de acabamento, com precisão e qualidade, para garantir resistência e estética nos reparos do seu veículo.",
      icone: <FaWrench className="text-2xl text-orange-500 mr-2" />,
    },
    {
      titulo: "Balanceamento e Alinhamento",
      descricao:
        "Evite desgaste irregular dos pneus e vibrações no volante. Nosso balanceamento e alinhamento computadorizados deixam seu carro estável e seguro.",
      icone: <FaTools className="text-2xl text-orange-500 mr-2" />,
    },
    {
      titulo: "Troca de Óleo e Filtros",
      descricao:
        "Realizamos a troca de óleo e filtros com produtos de alta performance, garantindo a lubrificação ideal e aumentando a vida útil do motor.",
      icone: <FaOilCan className="text-2xl text-orange-500 mr-2" />,
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-black text-white text-center relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-orange-500 uppercase tracking-wide">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg text-left transition-all duration-300 hover:shadow-orange-500/30 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {servico.icone}
                <h3 className="text-xl font-semibold text-white">
                  {servico.titulo}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
