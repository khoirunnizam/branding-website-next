"use client";

export default function Blog() {
  const blogList = [
    {
      id: 1,
      title: "Kenapa Website Penting untuk Komunitas Modern",
      date: "20 Oktober 2025",
      desc: "Website bukan cuma tempat informasi — ini identitas digital. Lewat website, komunitas bisa menunjukkan visi, kegiatan, dan karya ke publik.",
      img: "/blog1.jpg",
    },
    {
      id: 2,
      title: "Langkah Awal Membangun Platform Digital Sendiri",
      date: "15 Oktober 2025",
      desc: "Mulai dari domain, desain, hingga hosting. Artikel ini membahas langkah sederhana membangun platform digital yang solid sejak awal.",
      img: "/blog2.jpg",
    },
    {
      id: 3,
      title: "Belajar Kolaborasi Lewat Open Source Project",
      date: "10 Oktober 2025",
      desc: "Kontribusi di proyek open source adalah cara nyata untuk belajar bareng, berbagi pengalaman, dan mengasah kemampuan teamwork di dunia nyata.",
      img: "/blog3.jpg",
    },
  ];

  return (
    <section id="Blog" className="bg-gray-50 px-6 py-16 md:px-20">
      <div data-aos="zoom-in" className="mx-auto mb-12 max-w-6xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-800 md:text-4xl">
          Blog & Artikel
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Cerita, ide, dan pembelajaran dari perjalanan kami membangun ekosistem
          digital yang terbuka untuk semua.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {blogList.map((item) => (
          <div
            data-aos="flip-left"
            key={item.id}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-56 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <p className="mb-2 text-sm text-gray-400">{item.date}</p>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mb-4 flex-1 text-gray-600">{item.desc}</p>
              <a
                href="#"
                className="mt-auto font-medium text-blue-600 hover:underline"
              >
                Baca Selengkapnya →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
