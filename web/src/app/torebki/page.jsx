import { ShoppingBag, Heart, ArrowRight } from "lucide-react";

const bags = [
  {
    id: 1,
    name: "Shopper Essential",
    line: "Daily",
    price: "590 zł",
    description:
      'Funkcjonalny tote bag z bydlęcej skóry naturalnej. Pojemność na laptop 13" i dokumenty A4.',
    image: "/images/bags/shopper-essential.jpg",
    features: ["Skóra bydlęca", "Ręczne szwy", "Podszewka z płótna"],
  },
  {
    id: 2,
    name: "Crossbody Classic",
    line: "Daily",
    price: "450 zł",
    description:
      "Kompaktowa torebka na ramię, idealna na co dzień. Kieszeń wewnętrzna na telefon.",
    image: "/images/bags/crossbody-classic.jpg",
    features: ["Skóra naturalna", "Regulowany pasek", "Zamek YKK"],
  },
  {
    id: 3,
    name: "Artisan No. 1",
    line: "Premium",
    price: "1250 zł",
    description:
      "Numerowana torebka z kolekcji limitowanej. Pikowanie wykonane techniką tapicerską.",
    image: "/images/bags/artisan-no-1.jpg",
    features: ["Skóra włoska", "Numerowany egzemplarz", "Pikowanie ręczne"],
  },
  {
    id: 4,
    name: "Weekend Bag",
    line: "Premium",
    price: "1890 zł",
    description:
      "Podróżna torba wykończona tkaniną tapicerską. Kunszt w każdym detalu.",
    image: "/images/bags/weekend-bag.jpg",
    features: ["Skóra + tkanina", "Wyściełane dno", "Mosiężne okucia"],
  },
  {
    id: 5,
    name: "Clutch Evening",
    line: "Premium",
    price: "680 zł",
    description:
      "Elegancka kopertówka na specjalne okazje. Minimalistyczna forma, maksymalna elegancja.",
    image: null,
    features: ["Skóra Nappa", "Zamek magnetyczny", "Łańcuszek"],
  },
  {
    id: 6,
    name: "Daily Tote",
    line: "Daily",
    price: "520 zł",
    description:
      "Prosty shopper z tkaniny technicznej odpornej na wodę. Wytrzymały i praktyczny.",
    image: null,
    features: ["Tkanina tech", "Odporna na wodę", "Dno wzmocnione"],
  },
];

export default function TorebkiPage() {
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
            <a href="/torebki" className="text-[#8B7355] font-semibold">
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
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-[#8B7355] uppercase tracking-wider text-sm font-medium mb-4">
              Kolekcja torebek
            </p>
            <h1 className="font-crimson-text text-5xl font-bold text-[#2C2416] mb-6">
              Bez logo. Z duszą.
            </h1>
            <p className="text-lg text-[#5C5346] leading-relaxed">
              Każda torebka z naszej pracowni to manifest slow fashion. Używamy
              wysokogatunkowych skór i tkanin technicznych, które pięknie się
              starzeją. Nie gonisz trendu – kupujesz przedmiot na lata.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-6 bg-[#F0EDE5] border-y border-[#E5E3DC]">
        <div className="max-w-7xl mx-auto flex gap-6 items-center">
          <span className="text-[#5C5346] font-medium">Filtruj:</span>
          <button className="px-6 py-2 bg-[#2C2416] text-white rounded-full font-medium">
            Wszystkie
          </button>
          <button className="px-6 py-2 bg-white text-[#2C2416] hover:bg-[#2C2416] hover:text-white transition-colors rounded-full font-medium">
            Daily
          </button>
          <button className="px-6 py-2 bg-white text-[#2C2416] hover:bg-[#2C2416] hover:text-white transition-colors rounded-full font-medium">
            Premium
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bags.map((bag) => (
              <div
                key={bag.id}
                className="group bg-white border border-[#E5E3DC] hover:border-[#8B7355] transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative bg-[#F0EDE5] aspect-[3/4] overflow-hidden">
                  {bag.image ? (
                    <img
                      src={bag.image}
                      alt={bag.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : null}

                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag
                      size={80}
                      className="text-[#D4C5B0]"
                      strokeWidth={1}
                    />
                  </div>

                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart size={20} className="text-[#2C2416]" />
                  </button>
                  <div className="absolute top-4 left-4 bg-[#2C2416] text-white px-3 py-1 text-xs font-medium uppercase">
                    {bag.line}
                  </div>
                </div>

                {/* Product info */}
                <div className="p-6">
                  <h3 className="font-crimson-text text-2xl font-bold text-[#2C2416] mb-2">
                    {bag.name}
                  </h3>
                  <p className="text-[#8B7355] font-semibold text-lg mb-3">
                    {bag.price}
                  </p>
                  <p className="text-[#5C5346] text-sm leading-relaxed mb-4">
                    {bag.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {bag.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#FAF9F6] text-[#5C5346] px-3 py-1 border border-[#E5E3DC]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-[#2C2416] text-white py-3 hover:bg-[#3D3020] transition-colors font-medium flex items-center justify-center gap-2">
                    Zapytaj o dostępność
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization CTA */}
      <section className="py-20 px-6 bg-[#2C2416] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-crimson-text text-4xl font-bold mb-6">
            Customizacja torebki
          </h2>
          <p className="text-lg text-[#D4C5B0] leading-relaxed mb-8">
            Chcesz, aby Twoja torebka pasowała kolorystycznie do fotela w
            salonie? Możemy wykonać ją w tej samej skórze lub tkaninie
            tapicerskiej. To nasza unikalna usługa cross-craft.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-[#2C2416] px-8 py-3 hover:bg-[#F0EDE5] transition-colors font-medium"
          >
            Zamów projekt custom
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
