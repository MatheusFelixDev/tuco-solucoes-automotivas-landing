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
      <Footer />
    </>
  );
}
