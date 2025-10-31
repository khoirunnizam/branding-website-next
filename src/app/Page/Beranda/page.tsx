export default function Beranda() {
  return (
    <section
      id="Beranda"
      className="relative flex h-[100vh] items-center justify-center bg-cover bg-center text-center"
      style={{
        backgroundImage: "url('/img/heroimg.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-blue-900/60 to-cyan-700/10"></div>

      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
          Selamat Datang di{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            StackUniverse
          </span>
        </h1>

        <p className="mb-6 text-lg text-gray-200 md:text-xl">
          Komunitas belajar dan ngobar seputar teknologi, coding, dan inovasi.
          Tempat terbaik buat kamu berkembang bareng para tech enthusiast!
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <a
            href="#Tentang"
            className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Pelajari Lebih Lanjut
          </a>
          <a
            href="#Kontak"
            className="rounded-full border border-white px-6 py-3 font-medium text-white transition hover:bg-white hover:text-gray-900"
          >
            Gabung Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
