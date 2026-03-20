"use client";

import { useState, useCallback } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Instagram,
  Clock,
} from "lucide-react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "torebki",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`Błąd ${response.status}: ${response.statusText}`);
        }

        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: "torebki",
          message: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      } catch (err) {
        console.error("Error:", err);
        setError(
          "Nie udało się wysłać wiadomości. Spróbuj ponownie lub wyślij email bezpośrednio."
        );
      } finally {
        setLoading(false);
      }
    },
    [formData]
  );

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
            <a
              href="/o-nas"
              className="text-[#2C2416] hover:text-[#8B7355] transition-colors font-medium"
            >
              Pracownia
            </a>
            <a href="/kontakt" className="text-[#8B7355] font-semibold">
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
              Kontakt
            </p>
            <h1 className="font-crimson-text text-5xl font-bold text-[#2C2416] mb-6">
              Daj nam wiadomość
            </h1>
            <p className="text-lg text-[#5C5346] leading-relaxed">
              Masz pytanie o torebkę, chcesz renowować mebel, czy marzysz o
              customowym projekcie? Odpowiadamy szybko i chętnie.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-crimson-text text-3xl font-bold text-[#2C2416] mb-8">
                Formularz kontaktowy
              </h2>

              {success && (
                <div className="mb-6 p-4 bg-[#E8F5E9] border border-[#4CAF50] text-[#2E7D32] rounded-sm">
                  ✓ Dziękujemy! Wiadomość wysłana pomyślnie. Odpowiemy w ciągu
                  24 godzin.
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-[#FFEBEE] border border-[#F44336] text-[#C62828] rounded-sm">
                  ✗ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#2C2416] font-semibold mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E5E3DC] bg-white focus:outline-none focus:border-[#8B7355] transition-colors"
                    placeholder="Twoje imię"
                  />
                </div>

                <div>
                  <label className="block text-[#2C2416] font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E5E3DC] bg-white focus:outline-none focus:border-[#8B7355] transition-colors"
                    placeholder="twoj@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[#2C2416] font-semibold mb-2">
                    Telefon (opcjonalnie)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E5E3DC] bg-white focus:outline-none focus:border-[#8B7355] transition-colors"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <label className="block text-[#2C2416] font-semibold mb-2">
                    O co pytasz?
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E5E3DC] bg-white focus:outline-none focus:border-[#8B7355] transition-colors"
                  >
                    <option value="torebki">Torebki</option>
                    <option value="tapicerstwo">Tapicerstwo / renowacja</option>
                    <option value="meble">Meble autorskie / custom</option>
                    <option value="inne">Inne zapytanie</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#2C2416] font-semibold mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#E5E3DC] bg-white focus:outline-none focus:border-[#8B7355] transition-colors resize-none"
                    placeholder="Opisz krótko, co Cię interesuje..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#2C2416] text-white py-3 hover:bg-[#3D3020] disabled:opacity-50 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
                  {!loading && <ArrowRight size={18} />}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-crimson-text text-3xl font-bold text-[#2C2416] mb-8">
                Dane kontaktowe
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F0EDE5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#2C2416]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2416] mb-1">Email</h3>
                    <a
                      href="mailto:hello@bagsbyaga.com"
                      className="text-[#8B7355] hover:text-[#2C2416] transition-colors"
                    >
                      hello@bagsbyaga.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F0EDE5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#2C2416]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2416] mb-1">
                      Telefon
                    </h3>
                    <a
                      href="tel:+48123456789"
                      className="text-[#8B7355] hover:text-[#2C2416] transition-colors"
                    >
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F0EDE5] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#2C2416]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2416] mb-1">
                      Adres pracowni
                    </h3>
                    <p className="text-[#5C5346]">
                      ul. Rycerska 9<br />
                      00-000 Warszawa
                      <br />
                      Polska
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F0EDE5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-[#2C2416]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2416] mb-1">
                      Godziny otwarcia
                    </h3>
                    <p className="text-[#5C5346]">
                      Pn–Pt: 10:00–18:00
                      <br />
                      Sb: 11:00–15:00
                      <br />
                      Nd: zamknięte
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F0EDE5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram size={24} className="text-[#2C2416]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2416] mb-1">
                      Śledź nas
                    </h3>
                    <a
                      href="https://instagram.com/bagsbyaga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8B7355] hover:text-[#2C2416] transition-colors"
                    >
                      @bagsbyaga
                    </a>
                  </div>
                </div>
              </div>

              {/* Open Day */}
              <div className="mt-12 p-6 bg-[#F0EDE5] border-l-4 border-[#2C2416]">
                <h3 className="font-crimson-text text-xl font-bold text-[#2C2416] mb-2">
                  Otwarty dzień pracowni
                </h3>
                <p className="text-[#5C5346] mb-2">
                  Każdy czwartek 14:00–18:00
                </p>
                <p className="text-sm text-[#5C5346]">
                  Zapraszamy do spaceru po warsztacie, obejrzenia procesu,
                  zadania pytań. Nie trzeba rezerwacji!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-crimson-text text-4xl font-bold text-[#2C2416] mb-12 text-center">
            Za kulisami na Instagramie
          </h2>

          <div className="text-center mb-8">
            <p className="text-[#5C5346] text-lg mb-6">
              Śledź proces tworzenia naszych torebek, renowacje mebli i
              behind-the-scenes z pracowni.
            </p>
            <a
              href="https://instagram.com/bags_by_aga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2C2416] text-white px-8 py-3 hover:bg-[#3D3020] transition-colors font-medium"
            >
              <Instagram size={18} />
              Odwiedź profil @bags_by_aga
            </a>
          </div>

          {/* Instagram Embed */}
          <div className="w-full max-w-2xl mx-auto">
            <iframe
              src="https://www.instagram.com/bagsbyaga/embed"
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
          </div>
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
