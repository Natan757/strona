import { ArrowRight, Heart, Award, Users } from "lucide-react";

export default function Page() {
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
              className="text-[#8B7355] font-semibold"
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
      <header className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#8B7355] uppercase tracking-wider text-sm font-medium mb-4">
              Kaletnictwo • Tapicerstwo • Rzemiosło
            </p>

            <h1 className="font-crimson-text text-5xl md:text-6xl font-bold text-[#2C2416] leading-tight">
              Materiał, który ma głos.
              <br />
              <span className="text-[#8B7355]">Forma, która zostaje.</span>
            </h1>

            <p className="mt-6 text-lg text-[#5C5346] leading-relaxed max-w-xl">
              Tworzymy torebki i realizacje tapicerskie z szacunkiem do materiału,
              precyzją kroju i spokojem pracy ręcznej. Od projektów codziennych po
              limitowane serie.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/torebki"
                className="inline-flex items-center justify-center gap-2 bg-[#2C2416] text-white px-7 py-3 hover:bg-[#3D3020] transition-colors"
              >
                Zobacz torebki <ArrowRight size={18} />
              </a>
              <a
                href="/tapicerstwo"
                className="inline-flex items-center justify-center gap-2 border border-[#2C2416] text-[#2C2416] px-7 py-3 hover:bg-[#2C2416] hover:text-white transition-colors"
              >
                Tapicerstwo <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#FAF9F6] border border-[#E5E3DC] p-4">
                <p className="text-sm text-[#8B7355] font-medium">Ręczne szycie</p>
                <p className="text-[#2C2416] font-semibold">Precyzja</p>
              </div>
              <div className="bg-[#FAF9F6] border border-[#E5E3DC] p-4">
                <p className="text-sm text-[#8B7355] font-medium">Materiały</p>
                <p className="text-[#2C2416] font-semibold">Premium</p>
              </div>
              <div className="bg-[#FAF9F6] border border-[#E5E3DC] p-4">
                <p className="text-sm text-[#8B7355] font-medium">Projekty</p>
                <p className="text-[#2C2416] font-semibold">Bespoke</p>
              </div>
              <div className="bg-[#FAF9F6] border border-[#E5E3DC] p-4">
                <p className="text-sm text-[#8B7355] font-medium">Podejście</p>
                <p className="text-[#2C2416] font-semibold">Slow craft</p>
              </div>
            </div>
          </div>

          {/* “Mock” hero visual */}
          <div className="relative">
            <div className="aspect-[4/3] w-full border border-[#E5E3DC] bg-[#FAF9F6] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2C2416]/5 via-transparent to-[#8B7355]/10" />
              <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#8B7355]/15 blur-2xl" />
              <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#2C2416]/10 blur-2xl" />

              <div className="relative h-full p-8 flex flex-col justify-end">
                <p className="text-[#5C5346] text-sm uppercase tracking-widest">
                  Studio note
                </p>
                <p className="mt-2 text-[#2C2416] font-crimson-text text-3xl font-semibold">
                  “Dobre rzeczy nie krzyczą.”
                </p>
                <p className="mt-3 text-[#5C5346]">
                  Minimalizm w formie, maksimum w wykonaniu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick links */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-[#8B7355] uppercase tracking-wider text-sm font-medium mb-2">
                Odkryj
              </p>
              <h2 className="font-crimson-text text-4xl font-bold text-[#2C2416]">
                Co robimy
              </h2>
            </div>
            <a
              href="/o-nas"
              className="hidden sm:inline-flex items-center gap-2 text-[#2C2416] hover:text-[#8B7355] transition-colors font-medium"
            >
              Poznaj pracownię <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/torebki"
              className="group border border-[#E5E3DC] bg-white p-6 hover:border-[#8B7355] transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-crimson-text text-2xl font-semibold text-[#2C2416]">
                  Torebki
                </h3>
                <ArrowRight className="text-[#8B7355] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="mt-3 text-[#5C5346] leading-relaxed">
                Projekty codzienne i limitowane serie. Skóra, tkanina, metal – z
                precyzją i spokojem.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-[#8B7355] font-medium">
                <Heart size={16} /> Detal &amp; proporcje
              </div>
            </a>

            <a
              href="/tapicerstwo"
              className="group border border-[#E5E3DC] bg-white p-6 hover:border-[#8B7355] transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-crimson-text text-2xl font-semibold text-[#2C2416]">
                  Tapicerstwo
                </h3>
                <ArrowRight className="text-[#8B7355] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="mt-3 text-[#5C5346] leading-relaxed">
                Renowacje i realizacje od zera – konstrukcja, wypełnienie,
                obicia. Trwałość na lata.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-[#8B7355] font-medium">
                <Award size={16} /> Rzemiosło &amp; trwałość
              </div>
            </a>

            <a
              href="/meble"
              className="group border border-[#E5E3DC] bg-white p-6 hover:border-[#8B7355] transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-crimson-text text-2xl font-semibold text-[#2C2416]">
                  Meble
                </h3>
                <ArrowRight className="text-[#8B7355] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="mt-3 text-[#5C5346] leading-relaxed">
                Autorskie formy i projekty custom. Komfort, proporcje i
                wykończenie dopięte na ostatni ścieg.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-[#8B7355] font-medium">
                <Users size={16} /> Projekt &amp; konsultacje
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white border-t border-[#E5E3DC]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#8B7355] uppercase tracking-wider text-sm font-medium mb-3">
              Start od rozmowy
            </p>
            <h2 className="font-crimson-text text-4xl font-bold text-[#2C2416]">
              Powiedz, czego potrzebujesz.
            </h2>
            <p className="mt-4 text-[#5C5346] leading-relaxed">
              Opisz pomysł, podeślij inspiracje i wymiary. Odpowiemy z propozycją
              kierunku, materiałów i orientacyjną wyceną.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#2C2416] text-white px-7 py-3 hover:bg-[#3D3020] transition-colors"
              >
                Napisz do nas <ArrowRight size={18} />
              </a>
              <a
                href="/o-nas"
                className="inline-flex items-center justify-center gap-2 border border-[#2C2416] text-[#2C2416] px-7 py-3 hover:bg-[#2C2416] hover:text-white transition-colors"
              >
                Jak pracujemy <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="border border-[#E5E3DC] bg-[#FAF9F6] p-8">
            <h3 className="font-crimson-text text-2xl font-semibold text-[#2C2416]">
              Szybkie info
            </h3>
            <ul className="mt-4 space-y-3 text-[#5C5346]">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 bg-[#8B7355] rounded-full" />
                <span>Realizacje w Polsce i wysyłka w UE (po uzgodnieniu).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 bg-[#8B7355] rounded-full" />
                <span>Materiały: skóra naturalna, tkaniny tapicerskie, okucia.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 bg-[#8B7355] rounded-full" />
                <span>Czas realizacji zależy od projektu i dostępności materiałów.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#FAF9F6] border-t border-[#E5E3DC]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#5C5346]">
            © {new Date().getFullYear()} <span className="text-[#2C2416] font-semibold">BAGSBYAGA</span>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/o-nas"
              className="text-[#2C2416] hover:text-[#8B7355] transition-colors font-medium"
            >
              Pracownia
            </a>
            <a
              href="/kontakt"
              className="text-[#2C2416] hover:text-[#8B7355] transition-colors font-medium"
            >
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
