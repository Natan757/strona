import { Scissors, ArrowRight, Ruler, Palette, Package } from "lucide-react";

const furnitureProjects = [
  {
    id: 1,
    name: "Model 01 — Krzesło Signature",
    type: "Seria limitowana",
    price: "2800 zł",
    description:
      "Nasze autorskie krzesło zaprojektowane pod kątem maksymalnej wygody i ekspozycji kunsztu szycia. Każde krzesło numerowane.",
    features: [
      "Konstrukcja bukowa",
      "Pikowane oparcie",
      "Skóra włoska",
      "Numerowany egzemplarz",
    ],
  },
  {
    id: 2,
    name: "Fotel Custom Bespoke",
    type: "Na zamówienie",
    price: "od 4500 zł",
    description:
      "Projektujemy i wykonujemy mebel całkowicie od zera, pod Twoje wymiary i estetykę wnętrza.",
    features: [
      "Indywidualny projekt",
      "Dowolne wymiary",
      "Wybór materiałów",
      "Konsultacje designerskie",
    ],
  },
  {
    id: 3,
    name: "Pufa Workshop",
    type: "Seria",
    price: "1200 zł",
    description:
      "Minimalistyczna pufa wykonana z resztek luksusowych tkanin tapicerskich. Zero waste w praktyce.",
    features: [
      "Upcycling tkanin",
      "Kompaktowy design",
      "Idealna do małych przestrzeni",
      "Wypełnienie HR foam",
    ],
  },
];

export default function MeblePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-[#E5E3DC] z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="font-crimson-text text-2xl font-semibold text-[#2C2416]"
          >
            BAGSBYAGA
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-[#2C2416] hover:text-[#8B7355] transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="/torebki"
              className="text-[#2C2416] hover:text-[#8B7355] transition-colors font-medium"
            >
              Torebki
            </a>
            <a
              href="/tapicerstwo"
              className="text-[#2C2416] hover:text-[#8B7355] transition-colors font-medium"
            >
              Tapicerstwo
            </a>
            <a href="/meble" className="text-[#8B7355] font-semibold">
              Meble
            </a>
            <a
              href="/o-nas"
              className="text-[#2C2416] hover:text-[#8B7355] transition-colors font-medium"
            >
              Pracownia
            </a>
            <a
              href="/kontakt"
              className="bg-[#2C2416] text-white px-6 py-2 hover:bg-[#3D3020] transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#8B7355] uppercase tracking-wider text-sm font-medium mb-4">
                Meble autorskie
              </p>
              <h1 className="font-crimson-text text-5xl font-bold text-[#2C2416] mb-6">
                Projektujemy od zera
              </h1>
              <p className="text-lg text-[#5C5346] leading-relaxed mb-8">
                Każde nasze krzesło to statement piece – połączenie maksymalnej
                wygody z ekspozycją kunsztu tapicerskiego. Pracujemy na
                naturalnych materiałach, projektujemy konstrukcje pod konkretną
                przestrzeń, tworzymy meble, które będą służyć dekadami.
              </p>
              <div className="flex gap-4">
                <a
                  href="/kontakt"
                  className="bg-[#2C2416] text-white px-8 py-3 hover:bg-[#3D3020] transition-colors inline-flex items-center gap-2"
                >
                  Rozpocznij projekt
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="relative h-[400px] bg-[#DDD8CC] rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-[#8B7355]">
                <Scissors size={100} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-crimson-text text-4xl font-bold text-[#2C2416] mb-4">
              Nasze projekty
            </h2>
            <p className="text-[#5C5346] text-lg max-w-2xl mx-auto">
              Od limitowanych serii po w pełni customowe zamówienia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {furnitureProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[#E5E3DC] overflow-hidden hover:border-[#8B7355] transition-all"
              >
                <div className="relative bg-[#F0EDE5] aspect-square flex items-center justify-center">
                  <Scissors
                    size={80}
                    className="text-[#D4C5B0]"
                    strokeWidth={1}
                  />
                  <div className="absolute top-4 left-4 bg-[#2C2416] text-white px-3 py-1 text-xs font-medium uppercase">
                    {project.type}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-crimson-text text-2xl font-bold text-[#2C2416] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-[#8B7355] font-semibold text-lg mb-3">
                    {project.price}
                  </p>
                  <p className="text-[#5C5346] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#FAF9F6] text-[#5C5346] px-3 py-1 border border-[#E5E3DC]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/kontakt"
                    className="w-full bg-[#2C2416] text-white py-3 hover:bg-[#3D3020] transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    Zapytaj o projekt
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-crimson-text text-4xl font-bold text-[#2C2416] mb-12 text-center">
            Jak wygląda proces bespoke?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2C2416] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler size={32} />
              </div>
              <h3 className="font-crimson-text text-xl font-bold text-[#2C2416] mb-2">
                1. Konsultacja i wymiary
              </h3>
              <p className="text-[#5C5346] text-sm leading-relaxed">
                Spotykamy się (online lub offline), rozmawiamy o Twoich
                potrzebach. Mierzymy przestrzeń, ustalamy wymiary i funkcję
                mebla.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#8B7355] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette size={32} />
              </div>
              <h3 className="font-crimson-text text-xl font-bold text-[#2C2416] mb-2">
                2. Projekt i materiały
              </h3>
              <p className="text-[#5C5346] text-sm leading-relaxed">
                Przygotowujemy szkice 2D/3D. Razem wybieramy drewno na
                konstrukcję, tapicerkę, kolor wykończenia. Dostajesz próbki.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#5C5346] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Package size={32} />
              </div>
              <h3 className="font-crimson-text text-xl font-bold text-[#2C2416] mb-2">
                3. Produkcja i dostawa
              </h3>
              <p className="text-[#5C5346] text-sm leading-relaxed">
                Czas produkcji: 4-8 tygodni (w zależności od złożoności).
                Dokumentujemy postępy. Dostarczamy osobiście i montujemy na
                miejscu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-[#F0EDE5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-crimson-text text-4xl font-bold text-[#2C2416] mb-6 text-center">
            Filozofia projektowania
          </h2>
          <div className="space-y-6 text-[#5C5346] leading-relaxed">
            <p>
              W naszych meblach nie ma kompromisów. Każde krzesło zaczyna się od
              konstrukcji drewnianej – używamy buku, dębu lub orzecha. Stelaże
              klejone są tradycyjnymi metodami stolarskimi (połączenia czopowe,
              wzmocnienia), co gwarantuje trwałość.
            </p>
            <p>
              Tapicerka to nasza strefa komfortu. Stosujemy pasy jutowe lub
              gumowe (w zależności od konstrukcji), sprężyny faliste lub
              serpentynowe, wielowarstwowe pianki HR o różnej gęstości. To samo
              podejście, co w renowacji mebli vintage – bo wiemy, jak budować na
              dekady.
            </p>
            <p>
              Wykończenia szyjemy ręcznie. Możemy wykonać pikowanie kapitone,
              listwowanie, plisy – wszystko, czego nauczyliśmy się przy
              tapicerowaniu antyków, przenosimy na nowe projekty.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#2C2416] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-crimson-text text-4xl font-bold mb-6">
            Masz pomysł na swój mebel?
          </h2>
          <p className="text-lg text-[#D4C5B0] leading-relaxed mb-8">
            Opowiedz nam o swojej przestrzeni. Możliwe, że potrzebujesz czegoś,
            czego jeszcze nie ma w katalogu – to idealny moment, żeby
            zaprojektować coś unikalnego.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-[#2C2416] px-8 py-3 hover:bg-[#F0EDE5] transition-colors font-medium"
          >
            Umów konsultację projektową
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2416] text-white py-12 px-6 border-t border-[#4A3F30]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-crimson-text text-2xl font-semibold mb-4">
              BAGSBYAGA
            </div>
            <p className="text-[#D4C5B0] text-sm">
              Rzemieślnicza integralność w każdym ściegu
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produkty</h4>
            <ul className="space-y-2 text-[#D4C5B0]">
              <li>
                <a
                  href="/torebki"
                  className="hover:text-white transition-colors"
                >
                  Torebki
                </a>
              </li>
              <li>
                <a
                  href="/tapicerstwo"
                  className="hover:text-white transition-colors"
                >
                  Tapicerstwo
                </a>
              </li>
              <li>
                <a href="/meble" className="hover:text-white transition-colors">
                  Meble
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">O nas</h4>
            <ul className="space-y-2 text-[#D4C5B0]">
              <li>
                <a href="/o-nas" className="hover:text-white transition-colors">
                  Pracownia
                </a>
              </li>
              <li>
                <a
                  href="/kontakt"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-[#D4C5B0] text-sm">
              <li>hello@bagsbyaga.com</li>
              <li>+48 123 456 789</li>
              <li>Warszawa, Polska</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#4A3F30] text-center text-[#D4C5B0] text-sm">
          © 2024 BagsByAga. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
