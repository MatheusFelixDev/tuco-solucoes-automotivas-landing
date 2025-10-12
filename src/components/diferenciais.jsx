import { Wrench, ShieldCheck, Clock, Star } from "lucide-react";

const Diferenciais = () => {
  return (
    <section
      id="diferenciais"
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-gratis/textura-de-metal-preto_1048-16228.jpg')",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-12 text-orange-500">
          Aqui você encontra
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Wrench size={40} className="text-orange-500" />,
              title: "Experiência Profissional",
              text: "Mais de 15 anos oferecendo serviços de alta qualidade em mecânica, freios e suspensão.",
            },
            {
              icon: <ShieldCheck size={40} className="text-orange-500" />,
              title: "Confiança e Segurança",
              text: "Trabalhamos com transparência e garantia de todos os serviços realizados.",
            },
            {
              icon: <Clock size={40} className="text-orange-500" />,
              title: "Atendimento Ágil",
              text: "Entendemos o valor do seu tempo — agilidade sem comprometer a qualidade.",
            },
            {
              icon: <Star size={40} className="text-orange-500" />,
              title: "Excelência no Atendimento",
              text: "Atendimento personalizado e foco total na satisfação do cliente.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-orange-500/30 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
