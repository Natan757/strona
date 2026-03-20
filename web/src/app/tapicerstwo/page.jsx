import {
  Armchair,
  ArrowRight,
  CheckCircle,
  Clock,
  Palette,
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "Quick Refresh",
    duration: "3-5 dni",
    priceFrom: "400 zł",
    description:
      "Wymiana samej tkaniny w prostych siedziskach – krzesła kuchenne, pufy, ławeczki.",
    includes: [
      "Demontaż starej tapicerki",
      "Wymiana tkaniny/skóry",
      "Montaż nowego materiału",
      "Konsultacja kolorystyczna",
    ],
  },
  {
    id: 2,
    name: "Heritage Restoration",
    duration: "2-4 tygodnie",
    priceFrom: "1200 zł",
    description:
      "Pełna odbudowa mebli vintage i antyków – wymiana pasów, sprężyn, pianek, konstrukcji.",
    includes: [
      "Analiza konstrukcji",
      "Wymiana pasów nośnych",
      "Naprawa sprężyn lub wymiana na nowe",
      "Wymiana pianek i tapicerki",
      "Renowacja stelaża (opcjonalnie)",
    ],
  },
];

const beforeAfter = [
  {
    id: 1,
    title: "Fotel PRL – lata 60.",
    before: "Zniszczona welurowa tapicerka, zapadnięte siedzisko",
    after: "Luksusowa skóra Nappa, nowe sprężyny, odnowiony stelaż bukowy",
    category: "Heritage Restoration",
  },
  {
    id: 2,
    title: "Krzesła vintage x 4",
    before: "Poplamiona tkanina, luźne połączenia",
    after: "Tkanina tapicerska w kolorze musztardowym, wzmocniona konstrukcja",
    category: "Quick Refresh",
  },
  {
    id: 3,
    title: "Sofa Mid-Century Modern",
    before: "Zatarte siedziska, pęknięta skóra",
    after: "Skóra włoska, nowe wypełnienie HR foam, odnowione drewniane nogi",
    category: "Heritage Restoration",
  },
];

export default function TapierstwoPage() {
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
            <a href="/tapicerstwo" className="text-[#8B7355] font-semibold">
              Tapicerstwo
            </a>
            <a
              href="/meble"
              className="text-[#2C2416] hover:text-[#8B7355] transition-colors font-medium"
            >
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
                Renowacja i tapicerstwo
              </p>
              <h1 className="font-crimson-text text-5xl font-bold text-[#2C2416] mb-6">
                Przywracamy życie Twoim meblom
              </h1>
              <p className="text-lg text-[#5C5346] leading-relaxed mb-8">
                Każdy mebel niesie historię. Fotel po babci, vintage'owe krzesła
                z pchlego targu, Mid-Century Modern spod Poznania – każdy z nich
                zasługuje na drugie życie. Naprawiamy z szacunkiem dla
                konstrukcji i z mistrzostwem w doborze materiałów.
              </p>
              <div className="flex gap-4">
                <a
                  href="/kontakt"
                  className="bg-[#2C2416] text-white px-8 py-3 hover:bg-[#3D3020] transition-colors inline-flex items-center gap-2"
                >
                  Wyślij zdjęcia
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="relative h-[400px] bg-[#DDD8CC] rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-[#8B7355]">
                <Armchair size={100} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-crimson-text text-4xl font-bold text-[#2C2416] mb-4">
              Nasze usługi
            </h2>
            <p className="text-[#5C5346] text-lg max-w-2xl mx-auto">
              Od szybkich wymian po pełną odbudowę konstrukcji – dopasowujemy
              metodę do potrzeb Twojego mebla
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[#E5E3DC] p-8 hover:border-[#8B7355] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-crimson-text text-3xl font-bold text-[#2C2416]">
                    {service.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-[#8B7355] font-semibold text-lg">
                      od {service.priceFrom}
                    </div>
                    <div className="text-[#5C5346] text-sm flex items-center gap-1 justify-end mt-1">
                      <Clock size={14} />
                      {service.duration}
                    </div>
                  </div>
                </div>

                <p className="text-[#5C5346] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="font-semibold text-[#2C2416] mb-3">
                    W cenie:
                  </div>
                  {service.includes.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-[#5C5346]"
                    >
                      <CheckCircle
                        size={18}
                        className="text-[#8B7355] mt-0.5 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/kontakt"
                  className="w-full bg-[#2C2416] text-white py-3 hover:bg-[#3D3020] transition-colors font-medium flex items-center justify-center gap-2"
                >
                  Zamów wycenę
                  <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-crimson-text text-4xl font-bold text-[#2C2416] mb-12 text-center">
            Jak wygląda proces?
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#2C2416] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-crimson-text text-2xl font-bold text-[#2C2416] mb-2">
                  Wyślij zdjęcia
                </h3>
                <p className="text-[#5C5346] leading-relaxed">
                  Zrób kilka fotek swojego mebla (całość + zbliżenie na
                  uszkodzenia). Wyślij przez formularz kontaktowy lub na email.
                  Opisz, co Cię boli – czy to zapadnięte siedzisko, zniszczona
                  skóra, czy rozchwiane połączenia.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#8B7355] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-crimson-text text-2xl font-bold text-[#2C2416] mb-2">
                  Wycena i dobór materiału
                </h3>
                <p className="text-[#5C5346] leading-relaxed">
                  Dostaniesz preliminarną wycenę (z podziałem na robociznę +
                  materiał). Wysyłamy Ci próbki tkanin/skór do wyboru. Jeśli
                  masz własny materiał – super, pracujemy na nim.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#5C5346] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-crimson-text text-2xl font-bold text-[#2C2416] mb-2">
                  Praca w warsztacie
                </h3>
                <p className="text-[#5C5346] leading-relaxed">
                  Mebel trafia do nas na warsztat. Demontujemy go do gołej
                  konstrukcji (jeśli Heritage Restoration), wymieniamy pasy,
                  sprężyny, pianki. Każdy etap dokumentujemy – dostaniesz fotki
                  z przebiegu prac.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#2C2416] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-crimson-text text-2xl font-bold text-[#2C2416] mb-2">
                  Odbiór lub dostawa
                </h3>
                <p className="text-[#5C5346] leading-relaxed">
                  Po zakończeniu prac dzwonimy. Możesz odebrać osobiście z
                  pracowni (pokażemy Ci, co zrobiliśmy) albo zamówimy kuriera
                  specjalistycznego (meble wymagają ostrożnej dostawy).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 px-6 bg-[#F0EDE5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-crimson-text text-4xl font-bold text-[#2C2416] mb-4">
              Przed i po
            </h2>
            <p className="text-[#5C5346] text-lg">
              Zobacz, jak wygląda magia renowacji w naszej pracowni
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfter.map((project) => (
              <div key={project.id} className="bg-white overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="bg-[#DDD8CC] aspect-square flex items-center justify-center border-r border-white">
                    <div className="text-center p-4">
                      <div className="text-xs text-[#5C5346] uppercase tracking-wider mb-2">
                        Przed
                      </div>
                      <Armchair
                        size={48}
                        className="text-[#8B7355] mx-auto"
                        strokeWidth={1}
                      />
                    </div>
                  </div>
                  <div className="bg-[#C5BDB0] aspect-square flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-xs text-white uppercase tracking-wider mb-2">
                        Po
                      </div>
                      <Armchair
                        size={48}
                        className="text-white mx-auto"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs bg-[#FAF9F6] text-[#8B7355] px-3 py-1 inline-block mb-3 border border-[#E5E3DC]">
                    {project.category}
                  </div>
                  <h3 className="font-crimson-text text-xl font-bold text-[#2C2416] mb-3">
                    {project.title}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-[#5C5346]">
                      <span className="font-semibold">Przed:</span>{" "}
                      {project.before}
                    </div>
                    <div className="text-[#2C2416]">
                      <span className="font-semibold">Po:</span> {project.after}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Selection CTA */}
      <section className="py-20 px-6 bg-[#2C2416] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Palette size={48} className="mx-auto mb-6 text-[#D4C5B0]" />
          <h2 className="font-crimson-text text-4xl font-bold mb-6">
            Nie wiesz, jaki materiał wybrać?
          </h2>
          <p className="text-lg text-[#D4C5B0] leading-relaxed mb-8">
            Skóra Nappa, welur, tkanina tapicerska Kvadrat, a może
            tkaninetechniczne? Pomożemy Ci dobrać materiał, który będzie pasował
            do charakteru mebla i intensywności użytkowania.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-[#2C2416] px-8 py-3 hover:bg-[#F0EDE5] transition-colors font-medium"
          >
            Zamów konsultację
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
              <li>bagsbyaga@gmail.com</li>
              <li>+48 606 643 742</li>
              <li>Busko-Zdrój, Polska</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#4A3F30] text-center text-[#D4C5B0] text-sm">
          © 2026 BagsByAga. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
