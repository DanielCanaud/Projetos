import { useState } from "react";
import { FaInstagram, FaXTwitter, FaThreads, FaTelegram } from "react-icons/fa6";
import { FaLock, FaRegStar, FaCrown } from "react-icons/fa";

import img1 from "./assets/img-1.jpeg";
import img2 from "./assets/img-2.jpeg"; // pode existir ou não

// ✅ Configuração centralizada
const CONFIG = {
  name: "July Garcia",
  description: "Conteúdo exclusivo, lifestyle e bastidores — tudo com um toque clean e elegante. Acesse minhas plataformas abaixo 💛",
  creatorImage: img1,
  socialLinks: {
    instagram: "https://www.instagram.com/julygarcia.oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    twitter: "https://x.com/",
    threads: "https://threads.net/",
  },
  contentLinks: [
    {
      id: "onlyfans-free",
      label: "OnlyFans Free",
      icon: FaRegStar,
      link: "https://onlyfans.com/",
      isPremium: false,
    },
    {
      id: "onlyfans-paid",
      label: "OnlyFans Pago",
      icon: FaLock,
      link: "https://onlyfans.com/",
      isPremium: true,
      badge: "VIP",
    },
    {
      id: "privacy-free",
      label: "Privacy Free",
      icon: FaRegStar,
      link: "https://privacy.com.br/@julygarciafree",
      isPremium: false,
    },
    {
      id: "privacy-paid",
      label: "Privacy Pago",
      icon: FaLock,
      link: "https://privacy.com.br/@JulyGarcia",
      isPremium: true,
      badge: "VIP",
    },
    {
      id: "telegram-vip",
      label: "Telegram VIP",
      icon: FaTelegram,
      link: "https://t.me/JulyGarcia_bot",
      isPremium: true,
      badge: "VIP",
    },
  ],
};

export default function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
      
      {/* Gradiente animado base */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 animate-gradient-shift" />
      
      {/* Padrão de mesh grid sutil */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2260%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23000000%27 fill-opacity=%270.05%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        backgroundSize: '60px 60px',
      }} />

      {/* Brilhos decorativos melhorados */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(255,255,255,0))] animate-float-slow" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.8),rgba(255,255,255,0))] animate-float-reverse" />
      
      {/* Efeito de orbs adicionais */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 rounded-full blur-3xl opacity-15 bg-orange-300 animate-float-medium" />
      <div className="absolute bottom-1/3 -right-24 w-80 h-80 rounded-full blur-3xl opacity-10 bg-yellow-200 animate-float-slow-reverse" />

      <main className="w-full max-w-md text-center bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 animate-fade-in relative z-10">

        {/* Foto com efeito ao clicar */}
        <button
          type="button"
          onClick={() => setActive((v) => !v)}
          className="mx-auto mb-5 block outline-none focus-visible:ring-4 focus-visible:ring-white/60 animate-fade-in-delay-1 group animate-photo-entrance"
          aria-label="Efeito na foto"
        >
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 mx-auto">
            {/* Borda decorativa animada */}
            <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
              active 
                ? "border-4 border-white scale-105 shadow-[0_0_30px_rgba(255,255,255,0.6)]" 
                : "border-2 border-white/40 group-hover:border-white/70"
            }`} />
            
            {/* Borda gradiente externa */}
            <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
              active
                ? "bg-gradient-to-br from-yellow-300 via-orange-300 to-transparent opacity-100"
                : "bg-gradient-to-br from-yellow-300 via-orange-300 to-transparent opacity-0 group-hover:opacity-50"
            } p-1 blur-sm`} />
            
            <img
              src={CONFIG.creatorImage}
              alt="Foto da criadora"
              className={`creator-photo relative w-full h-full rounded-full object-cover select-none transition-all duration-500 shadow-[0_22px_55px_rgba(0,0,0,0.25)] ${
                active ? "scale-95 rotate-6 shadow-[0_26px_70px_rgba(255,255,255,0.35)]" : "group-hover:scale-[1.02]"
              }`}
              draggable="false"
            />
          </div>
        </button>

        {/* Nome */}
        <h1 className="text-3xl font-bold text-white drop-shadow mb-2 animate-fade-in-delay-2">
          {CONFIG.name}
        </h1>

        {/* Descrição clean */}
        <p className="text-white/90 text-sm leading-relaxed mb-6 animate-fade-in-delay-2">
          {CONFIG.description}
        </p>

        {/* Separador visual */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />

        {/* Links das plataformas */}
        <section className="flex flex-col gap-3">
          {CONFIG.contentLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                className={`contentLink ${item.isPremium ? "premium" : ""}`}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <span className="flex items-center gap-3 flex-1">
                  <Icon className="flex-shrink-0" />
                  <span>{item.label}</span>
                </span>
                {item.badge && <span className="badge">{item.badge}</span>}
                <span className="btnArrow">→</span>
              </a>
            );
          })}
        </section>

        {/* Botões de redes sociais com mini animação */}
        <div className="mt-8 flex justify-center gap-6 animate-fade-in-delay-3">
          <a
            className="socialBtn instagram-social group/icon animate-icon-entrance"
            href={CONFIG.socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
            style={{ animationDelay: '0.7s' }}
          >
            <FaInstagram className="group-hover/icon:animate-icon-bounce transition-all" />
          </a>
          <a
            className="socialBtn twitter-social group/icon animate-icon-entrance"
            href={CONFIG.socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter/X"
            title="Twitter/X"
            style={{ animationDelay: '0.8s' }}
          >
            <FaXTwitter className="group-hover/icon:animate-icon-bounce transition-all" />
          </a>
          <a
            className="socialBtn threads-social group/icon animate-icon-entrance"
            href={CONFIG.socialLinks.threads}
            target="_blank"
            rel="noreferrer"
            aria-label="Threads"
            title="Threads"
            style={{ animationDelay: '0.9s' }}
          >
            <FaThreads className="group-hover/icon:animate-icon-bounce transition-all" />
          </a>
        </div>

        <footer className="mt-6 text-white/70 text-xs">
          Links oficiais
        </footer>
      </main>

      {/* Botão flutuante para Instagram */}
      <a
        href={CONFIG.socialLinks.instagram}
        target="_blank"
        rel="noreferrer"
        className="igFloat group/float animate-float-entrance"
        aria-label="Abrir Instagram"
        title="Instagram"
      >
        <FaInstagram size={22} className="group-hover/float:animate-icon-bounce" />
      </a>
    </div>
  );
}
