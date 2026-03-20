import { ArrowRight, Heart, Users, Award } from "lucide-react";

export default function ONasPage() {
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
            <a
              href="/meble"
              className="text-[#2C2416] hover:text-[#8B7355] transition-colors font-medium"
            >
              Meble
            </a>
            <a href="/o-nas" className="text-[#8B7355] font-semibold">
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
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#8B7355] uppercase tracking-wider text-sm font-medium mb-4">
            O nas
          </p>
          <h1 className="font-crimson-text text-5xl font-bold text-[#2C2416] mb-6">
            Miejsce, gdzie materiał ma głos
          </h1>
          <p className="text-lg text-[#5C5346] leading-relaxed">
            Nasza pracownia to przestrzeń, w której spotykają się dwie tradycje:
            kaletnictwo i tapicerstwo. Obie opierają się na tej samej zasadzie –
            szacunku dla materiału, precyzji w kroju i mistrzostwie w szyciu.
            Torebka i fotel różnią się skalą, ale nie duchem pracy.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#DDD8CC] aspect-[4/3] rounded-sm flex items-center justify-center">
              <Users size={80} className="text-[#8B7355]" strokeWidth={1} />
            </div>
            <div>
              <h2 className="font-crimson-text text-3xl font-bold text-[#2C2416] mb-6">
                Jak to się zaczęło?
              </h2>
              <div className="space-y-4 text-[#5C5346] leading-relaxed">
                <p>
                  Zaczynaliśmy od renowacji mebli – ludzie przynosili krzesła po
                  babci, fotele z pchlego targu, stare kanapy. Pracując przy
                  tych projektach, zauważyliśmy, że większość z nich wymaga nie
                  tylko wymiany tapicerki, ale też solidnego podejścia do
                  konstrukcji.
                </p>
                <p>
                  W międzyczasie zaczęliśmy eksperymentować z galanterią
                  skórzaną – wykorzystując ścinki z dużych projektów
                  tapicerskich, tworzyliśmy portfele, torebki, etui. To był
                  naturalny krok. Skóra, która miała trafić do kosza, dostawała
                  drugie życie.
                </p>
                <p>
                  Dziś prowadzimy pełnowymiarową pracownię, w której możesz
                  zamówić torebkę premium, odnowić fotel vintage i zaprojektować
                  autorskie krzesło – wszystko w jednym miejscu, z gwarancją
                  tego samego poziomu wykonania.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-crimson-text text-4xl font-bold text-[#2C2416] mb-16 text-center">
            Nasze wartości
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2C2416] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="font-crimson-text text-2xl font-bold text-[#2C2416] mb-3">
                Rzemiosło ręczne
              </h3>
              <p className="text-[#5C5346] leading-relaxed">
                Nie używamy półautomatów. Każdy stębnówka, każde ręczne
                ścienianie, każdy czop w drewnie to praca wykwalifikowanego
                rzemieślnika.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#8B7355] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="font-crimson-text text-2xl font-bold text-[#2C2416] mb-3">
                Trwałość i jakość
              </h3>
              <p className="text-[#5C5346] leading-relaxed">
                Projektujemy i wykonujemy przedmioty na dekady. Używamy
                naturalnych materiałów, które pięknie się starzeją – skóra
                nabiera patyny, drewno ciemnieje.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#5C5346] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="font-crimson-text text-2xl font-bold text-[#2C2416] mb-3">
                Circular Craft
              </h3>
              <p className="text-[#5C5346] leading-relaxed">
                Naprawiamy zamiast wyrzucać. Wykorzystujemy ścinki. Tworzymy
                produkty, które można naprawić – to przeciwwaga dla fast fashion
                i mebli jednorazowych.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="py-20 px-6 bg-[#F0EDE5]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-crimson-text text-4xl font-bold text-[#2C2416] mb-12 text-center">
            Nasza pracownia
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#5C5346] leading-relaxed mb-4">
                Pracownia podzielona jest na trzy strefy: strefę brudną
                (szlifowanie stelaży, klejenie konstrukcji), krojownię (wielki
                stół do rozkroju błamów skóry i belek tkanin) oraz strefę czystą
                do szycia.
              </p>
              <p className="text-[#5C5346] leading-relaxed mb-4">
                Używamy profesjonalnych maszyn: stebnówki tapicerskiej z
                potrójnym transportem (do ciężkich tkanin i skóry), maszyny
                ramiennej (do trudnych kształtów w torebkach), ścieniarki do
                pocieniania brzegów.
              </p>
              <p className="text-[#5C5346] leading-relaxed">
                Mamy również mały showroom, gdzie możesz zobaczyć gotowe torebki
                i próbniki materiałów do wyboru.
              </p>
            </div>
            <div className="bg-[#DDD8CC] aspect-[4/3] rounded-sm flex items-center justify-center">
              <Award size={80} className="text-[#8B7355]" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#2C2416] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-crimson-text text-4xl font-bold mb-6">
            Chcesz zobaczyć nas w akcji?
          </h2>
          <p className="text-lg text-[#D4C5B0] leading-relaxed mb-8">
            Zapraszamy do pracowni na kawę. Pokażemy Ci, jak powstają nasze
            produkty, opowiemy o procesie, damy dotknąć materiałów. To nie jest
            sklep – to warsztat.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-[#2C2416] px-8 py-3 hover:bg-[#F0EDE5] transition-colors font-medium"
          >
            Umów wizytę w pracowni
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
