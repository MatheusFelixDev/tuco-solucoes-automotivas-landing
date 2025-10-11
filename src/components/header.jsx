import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png"; // Certifique-se que está em /src/assets/logo.png

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 shadow-lg border-b border-orange-500"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src={logo}
            alt="Tuco Soluções Automotivas"
            className="h-16 md:h-20 w-auto object-contain" // 🔸 aumentei de h-12 → h-20
          />
        </a>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-200">
          {[
            { id: "servicos", label: "Serviços" },
            { id: "diferenciais", label: "Diferenciais" },
            { id: "depoimentos", label: "Depoimentos" },
            { id: "formulario", label: "Contato" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors ${
                activeSection === id
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/5531994175536"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition"
        >
          <FaWhatsapp className="text-xl" />
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
