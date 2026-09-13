'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Star } from 'lucide-react'

export default function LandingPage() {
  const router = useRouter()
  const handleRedirect = () => router.push('/network')

  // Liste des partenaires agences immobilières
  const partners = [
    { name: "Century 21", text: "CENTURY 21" },
    { name: "RE/MAX", text: "RE/MAX" },
    { name: "Orpi", text: "ORPI" },
    { name: "Keller Williams", text: "KW FRANCE" },
    { name: "Stéphane Plaza", text: "PLAZA IMMOBILIER" },
    { name: "IAD", text: "IAD FRANCE" },
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#1e0d01] font-sans antialiased selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center p-4">
        <nav className="w-full max-w-[1000px] flex items-center justify-between rounded-full bg-white/80 px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl border border-[#1e0d01]/10 transition-all duration-300">

          {/* Logo ImmoAllié */}
          <a href="./" className="flex items-center gap-2 group">
            <span className="text-xl font-black tracking-tight text-[#2E66F6] group-hover:scale-105 transition-transform">
              Immo<span className="text-[#1e0d01]">Allié</span>
            </span>
          </a>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#1e0d01]">
            <a href="#features" className="hover:opacity-75 transition-opacity">Fonctionnalités</a>
            <a href="#pricing" className="hover:opacity-75 transition-opacity">Tarifs</a>
            <button onClick={handleRedirect} className="hover:opacity-75 transition-opacity">Réseau</button>
          </div>

          {/* Get Started Button */}
          <div>
            <button
              onClick={handleRedirect}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#1e0d01] shadow-sm border border-[#1e0d01]/10 hover:bg-slate-50 hover:scale-[1.02] transition-all"
            >
              Accéder à la plateforme
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-8 overflow-hidden">

        {/* Background Blur Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-blue-400/20 to-blue-200/20 blur-[120px] pointer-events-none rounded-full animate-pulse" />

        <div className="mx-auto max-w-[1100px] flex flex-col items-center text-center relative z-10">

          {/* Tag New */}
          <button
            onClick={handleRedirect}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#1e0d01]/10 bg-white px-4 py-1.5 shadow-sm hover:scale-[1.02] transition mb-8 animate-fade-in"
          >
            <span className="flex items-center gap-1.5 bg-[#2E66F6]/10 text-[#2E66F6] px-2.5 py-0.5 rounded-full text-[11px] font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2E66F6] animate-ping" />
              Nouveau
            </span>
            <span className="text-xs font-medium text-[#1e0d01]/70">Essai gratuit 90 jours disponible</span>
          </button>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1e0d01] max-w-[900px] leading-[1.08] transition-all">
            Le réseau privé du co-courtage immobilier
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-base text-[#1e0d01]/60 max-w-[640px] leading-relaxed font-medium">
            Rejoignez une communauté exclusive d'agents immobiliers certifiés. Partagez vos mandats exclusifs, collaborez en toute transparence et maximisez vos opportunités de vente avec une commission 50/50.
          </p>

          {/* Hero CTA Button */}
          <div className="mt-8">
            <button
              onClick={handleRedirect}
              className="inline-flex items-center gap-2 rounded-full bg-[#2E66F6] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(46,102,246,0.3)] hover:brightness-110 hover:scale-105 transition-all duration-300"
            >
              Découvrir la plateforme
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Rating & Reviews Section */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#1e0d01]">
            <div className="flex -space-x-2">
              <img src="https://framerusercontent.com/images/SqNwL1Tw7L1E0WNkpyNItGDs.png?width=512&height=512" alt="Avatar 1" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
              <img src="https://framerusercontent.com/images/FaQR5JopfGvV9PdVkQKdqdkM4Y.png?width=512&height=512" alt="Avatar 2" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
              <img src="https://framerusercontent.com/images/j5beBC8E1nADaydjfFw27YLtUyQ.png?width=512&height=512" alt="Avatar 3" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
            </div>

            <div className="h-4 w-[1px] bg-[#1e0d01]/10" />
            <span>127+ Agents Vérifiés</span>
            <div className="h-4 w-[1px] bg-[#1e0d01]/10" />

            <div className="flex items-center gap-1.5">
              <span>94%</span>
              <div className="flex text-[#eba100]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[#1e0d01]/60">Taux d'acceptation</span>
            </div>
          </div>

          {/* Dashboard Preview Image */}
          <div className="mt-14 w-full rounded-[24px] border border-slate-200/80 bg-white shadow-[0_30px_100px_rgba(30,13,1,0.1)] overflow-hidden hover:shadow-[0_40px_120px_rgba(30,13,1,0.15)] transition-shadow duration-500">
            <div className="relative bg-slate-950 aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center">
              <img
                src="https://framerusercontent.com/images/HMM78V7QyElZ1rgeuwTqXVh2r4.png?width=4080&height=2959"
                alt="Dashboard Preview"
                className="absolute inset-0 w-full h-full object-cover hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* BRAND / PARTNERS SECTION */}
      <section className="relative py-16 px-4 border-t border-[#1e0d01]/10 bg-white/50 overflow-hidden">
        <div className="mx-auto max-w-[1100px] text-center mb-8">
          <p className="text-[11px] uppercase tracking-widest text-[#1e0d01]/50 font-bold">
            Adopté par les meilleurs professionnels en France
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex items-center max-w-[1100px] mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee space-x-16 min-w-max items-center">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center text-lg font-black tracking-wider text-[#1e0d01]/30 hover:text-[#2E66F6] transition-colors duration-300"
              >
                {partner.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="relative py-24 px-4 overflow-hidden border-t border-[#1e0d01]/10">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
          <div className="w-full max-w-[1200px] h-full flex items-center justify-center px-4">
            <div className="w-full h-px relative flex items-center justify-between">
              <div className="w-2.5 h-2.5 rounded-full bg-white border border-[rgba(30,13,1,0.12)] shadow-sm z-10" />
              <div className="absolute inset-x-0 h-px border-t border-dashed border-[rgba(30,13,1,0.12)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-white border border-[rgba(30,13,1,0.12)] shadow-sm z-10" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] relative z-10">

          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(30,13,1,0.1)] bg-white px-4 py-1.5 shadow-sm mb-6 hover:scale-105 transition">
              <span className="text-xs font-bold text-[#1e0d01]">Fonctionnalités</span>
              <svg className="h-4 w-4 text-[#2E66F6]" viewBox="0 0 25 25" fill="currentColor">
                <path d="M 0.235 9.718 L 7.525 0.361 C 8.095 -0.371 9.164 0.085 9.164 1.059 L 9.164 8.302 C 9.164 8.886 9.583 9.359 10.1 9.359 L 13.645 9.359 C 14.451 9.359 14.88 10.432 14.348 11.115 L 7.058 20.472 C 6.488 21.204 5.42 20.749 5.42 19.774 L 5.42 12.531 C 5.42 11.947 5.001 11.474 4.484 11.474 L 0.938 11.474 C 0.132 11.474 -0.297 10.401 0.235 9.718 Z" transform="translate(5.209 2.083)" />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1e0d01] max-w-[700px] mb-4">
              Co-courtage simplifié et sécurisé
            </h2>

            <p className="text-sm sm:text-base text-[#1e0d01]/60 max-w-[600px] font-medium leading-relaxed">
              Une plateforme complète conçue pour les professionnels de l'immobilier qui souhaitent développer leur réseau et maximiser leurs transactions.
            </p>
          </div>

          <div className="space-y-6">

            {/* Ligne 1 : 2 cartes grandes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Carte 1 : Réseau Vérifié */}
              <div className="rounded-[20px] border border-white bg-[#fafafa] p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-6 rounded-xl overflow-hidden aspect-[16/9] bg-white border border-white/5 relative">
                  <img
                    src="https://framerusercontent.com/images/IeoZkp15RNnms3DLvQu03eYkRRA.png"
                    alt="Réseau Vérifié"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e0d01] mb-2">Réseau d'Agents Vérifiés</h3>
                  <p className="text-xs sm:text-sm text-[#1e0d01]/60 leading-relaxed">
                    Accédez à une communauté exclusive de 127+ agents immobiliers certifiés partout en France. Chaque professionnel est vérifié pour garantir des collaborations de confiance.
                  </p>
                </div>
              </div>

              {/* Carte 2 : Mandats Exclusifs */}
              <div className="rounded-[20px] border border-white bg-[#fafafa] p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-6 rounded-xl overflow-hidden aspect-[16/9] bg-white border border-white/5 relative">
                  <img
                    src="https://framerusercontent.com/images/OkLS35BGhVWI8Rae54CP13jG5M.png"
                    alt="Mandats Exclusifs"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e0d01] mb-2">Partage de Mandats Exclusifs</h3>
                  <p className="text-xs sm:text-sm text-[#1e0d01]/60 leading-relaxed">
                    Publiez vos biens en vente et accédez aux mandats de votre réseau. Commission 50/50 pré-négociée pour une collaboration transparente et équitable.
                  </p>
                </div>
              </div>

            </div>

            {/* Ligne 2 : 3 cartes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Carte 3 : Recherche Intelligente */}
              <div className="rounded-[20px] border border-white bg-[#fafafa] p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-6 rounded-xl overflow-hidden aspect-[16/10] bg-white border border-white/5">
                  <img
                    src="https://framerusercontent.com/images/Udl3ZGYUmYdyELsY5KHNqjgwoKs.png"
                    alt="Recherche Intelligente"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e0d01] mb-2">Recherche Croisée Acheteurs</h3>
                  <p className="text-xs sm:text-sm text-[#1e0d01]/60 leading-relaxed">
                    Trouvez rapidement les biens qui correspondent aux critères de vos clients grâce aux filtres avancés (localisation, prix, DPE, surface).
                  </p>
                </div>
              </div>

              {/* Carte 4 : Visites Coordonnées */}
              <div className="rounded-[20px] border border-white bg-[#fafafa] p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-6 rounded-xl overflow-hidden aspect-[16/10] bg-white border border-white/5 relative">
                  <img
                    src="https://framerusercontent.com/images/u5wtFUW6YqF1WYftEyavID1HQQ.png"
                    alt="Visites Coordonnées"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e0d01] mb-2">Visites Coordonnées 48h</h3>
                  <p className="text-xs sm:text-sm text-[#1e0d01]/60 leading-relaxed">
                    Organisez des visites rapidement avec le mandataire tout en conservant la relation avec votre client. Réponse moyenne sous 2 heures.
                  </p>
                </div>
              </div>

              {/* Carte 5 : Transactions Sécurisées */}
              <div className="rounded-[20px] border border-white bg-[#fafafa] p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-6 rounded-xl overflow-hidden aspect-[16/10] bg-white border border-white/5">
                  <img
                    src="https://framerusercontent.com/images/XKMrnFASmSlKubPmTe0CZTfpbRs.png"
                    alt="Transactions Sécurisées"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e0d01] mb-2">Protocole Sécurisé</h3>
                  <p className="text-xs sm:text-sm text-[#1e0d01]/60 leading-relaxed">
                    Transactions encadrées par des conditions claires. Le vendeur reste avec l'agent mandataire, vous gérez votre acheteur.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="relative py-24 px-4 overflow-hidden border-t border-[#1e0d01]/10">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
          <div className="w-full max-w-[1200px] h-full flex items-center justify-center px-4">
            <div className="w-full h-px relative flex items-center justify-between">
              <div className="w-2.5 h-2.5 rounded-full bg-white border border-[rgba(30,13,1,0.12)] shadow-sm z-10" />
              <div className="absolute inset-x-0 h-px border-t border-dashed border-[rgba(30,13,1,0.12)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-white border border-[rgba(30,13,1,0.12)] shadow-sm z-10" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] relative z-10">

          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1e0d01]/10 bg-white px-4 py-1.5 shadow-sm mb-6 hover:scale-105 transition">
              <span className="text-xs font-bold text-[#1e0d01]">Tarifs</span>
              <svg className="h-4 w-4 text-[#2E66F6]" viewBox="0 0 25 25" fill="currentColor">
                <path d="M 7.971 19.927 C 12.373 19.927 15.942 16.359 15.942 11.957 C 15.942 5.978 7.971 0 7.971 0 C 7.584 2.478 7.205 3.808 5.978 5.978 C 4.782 5.425 4.484 4.982 3.986 3.736 C 1.993 5.978 0 8.967 0 11.957 C 0 16.359 3.569 19.927 7.971 19.927 Z" />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1e0d01] mb-4">
              Un seul tarif, tout inclus
            </h2>
            <p className="text-sm sm:text-base text-[#1e0d01]/60 font-medium max-w-[600px]">
              Abonnement annuel avec essai gratuit de 90 jours. Accédez au réseau complet sans limite et sans frais cachés.
            </p>
          </div>

          <div className="max-w-md mx-auto">

            {/* CARTE UNIQUE : Pro */}
            <div className="relative bg-gradient-to-b from-[#6b9efa]/80 to-[#2E66F6]/80 rounded-[20px] p-[2px] shadow-lg">
              <div className="absolute -top-3 right-6 bg-white text-[#1e0d01] text-[10px] font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider z-20">
                Essai 90j Gratuit
              </div>

              <div className="bg-white rounded-[18px] p-6">
                <div>
                  <div className="bg-[#2E66F6]/10 rounded-xl p-5 mb-6 text-center relative">
                    <p className="text-base font-bold text-[#1e0d01]">ImmoAllié Pro</p>
                    <div className="flex items-baseline justify-center gap-1 my-2">
                      <h2 className="text-4xl font-black text-[#1e0d01]">365€</h2>
                      <span className="text-xs text-[#1e0d01]/60">/ an</span>
                    </div>
                    <p className="text-xs text-[#1e0d01]/60 mt-1">Réseau professionnel complet</p>

                    <button
                      onClick={handleRedirect}
                      className="mt-5 w-full py-3 px-4 rounded-full bg-[#2E66F6] text-xs font-bold text-white shadow-[0_10px_24px_rgba(46,102,246,0.2)] hover:brightness-110 transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Commencer l'essai gratuit
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs font-bold text-[#1e0d01]">Inclus dans l'abonnement :</p>
                    <div className="space-y-3 text-xs text-[#1e0d01]/70">
                      <div className="flex items-center gap-2.5 pb-2 border-b border-[#1e0d01]/5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2E66F6]" />
                        <span>Accès au réseau de 127+ agents vérifiés</span>
                      </div>
                      <div className="flex items-center gap-2.5 pb-2 border-b border-[#1e0d01]/5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2E66F6]" />
                        <span>Publication illimitée de mandats exclusifs</span>
                      </div>
                      <div className="flex items-center gap-2.5 pb-2 border-b border-[#1e0d01]/5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2E66F6]" />
                        <span>Recherche croisée avec filtres avancés</span>
                      </div>
                      <div className="flex items-center gap-2.5 pb-2 border-b border-[#1e0d01]/5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2E66F6]" />
                        <span>Demandes de visite en temps réel</span>
                      </div>
                      <div className="flex items-center gap-2.5 pb-2 border-b border-[#1e0d01]/5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2E66F6]" />
                        <span>Commission 50/50 transparente</span>
                      </div>
                      <div className="flex items-center gap-2.5 pb-2 border-b border-[#1e0d01]/5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2E66F6]" />
                        <span>Protocole de transaction sécurisée</span>
                      </div>
                      <div className="flex items-center gap-2.5 pb-2 border-b border-[#1e0d01]/5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2E66F6]" />
                        <span>Réponse moyenne sous 2 heures</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2E66F6]" />
                        <span>Support prioritaire 7j/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <p className="text-xs text-[#1e0d01]/50 font-medium">
              Sans engagement • Annulation à tout moment • Aucun frais avant le 91e jour
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 px-4 border-t border-[#1e0d01]/10 bg-white/50 text-center text-xs text-[#1e0d01]/60">
        <div className="mx-auto max-w-[1100px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold text-[#1e0d01] text-sm">ImmoAllié © 2026</span>
          <div className="flex gap-6 font-medium">
            <button onClick={handleRedirect} className="hover:text-[#1e0d01] transition-colors">Politique de Confidentialité</button>
            <button onClick={handleRedirect} className="hover:text-[#1e0d01] transition-colors">Conditions Générales</button>
            <button onClick={handleRedirect} className="hover:text-[#1e0d01] transition-colors">Nous Contacter</button>
          </div>
        </div>
      </footer>

    </main>
  )
}
