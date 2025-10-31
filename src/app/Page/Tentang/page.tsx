"use client";

export default function Tentang() {
  return (
    <section id="Tentang" className="bg-gray-50 px-6 py-16 md:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        <div data-aos="fade-up" className="w-full md:w-1/2">
          <img
            src="/img/about.png"
            alt="Tentang StackUniverse"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div data-aos="fade-down" className="w-full text-center md:w-1/2 md:text-left">
          <h2 className="mb-4 text-3xl font-extrabold text-gray-800 md:text-4xl">
            Tentang <span className="text-blue-600">StackUniverse</span>
          </h2>
          <p className="mb-6 leading-relaxed text-gray-600">
            <strong>StackUniverse</strong> adalah komunitas belajar dan ngobar
            seputar teknologi, coding, serta inovasi digital. Kami hadir untuk
            menjadi ruang bagi para tech enthusiast agar bisa berkembang
            bersama, berbagi ilmu, dan berkolaborasi membangun karya nyata.
          </p>
          <p className="mb-6 leading-relaxed text-gray-600">
            Di sini, kamu bisa belajar bareng teman-teman yang satu visi —
            mengeksplorasi dunia teknologi dengan semangat kolaborasi. Kami
            percaya, setiap ide kecil bisa tumbuh jadi inovasi besar kalau
            dikerjakan bersama.
          </p>

          <a
            href="#Kontak"
            className="inline-block rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Bergabung Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
