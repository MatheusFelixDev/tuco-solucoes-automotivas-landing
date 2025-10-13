import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Localizacao = () => {
  return (
    <section
      id="localizacao"
      className="relative py-20 bg-black text-white text-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-premium/textura-de-metal-escovado-prata-fundo-industrial_88281-3554.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-orange-500">
          Venha nos visitar 🚗
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Mapa real do Google */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-orange-500/30">
            <iframe
              title="Localização Tuco Soluções Automotivas"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60011.05764790688!2d-44.1554427!3d-19.9374177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c18add4c0939%3A0x5253ec489ae70fc!2sTuco%20Solu%C3%A7%C3%B5es%20Automotivas!5e0!3m2!1spt-BR!2sbr!4v1760375183523!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Informações */}
          <div className="text-left space-y-4">
            <h3 className="text-2xl font-semibold text-orange-500">
              Tuco Soluções Automotivas
            </h3>
            <p className="text-gray-300">
              <FaMapMarkerAlt className="inline-block text-orange-500 mr-2" />
              Rua Nova Ponte, 312 – São Caetano, Betim/MG
            </p>
            <p className="text-gray-300">
              <FaPhoneAlt className="inline-block text-orange-500 mr-2" />
              (31) 99417-5536
            </p>

            <a
              href="https://wa.me/5531994175536"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all mt-4"
            >
              <FaWhatsapp size={20} /> Falar no WhatsApp
            </a>

            <div className="mt-6">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Tuco+Solu%C3%A7%C3%B5es+Automotivas"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Traçar rota no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;
