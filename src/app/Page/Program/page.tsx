"use client";

export default function Program() {
  const ProgramList = [
    {
      id: 1,
      title: "Belajar & Mentoring",
      desc: "Program belajar interaktif dan mentoring langsung bersama mentor berpengalaman di bidang teknologi, coding, dan startup.",
      img: "/Program1.jpg",
    },
    {
      id: 2,
      title: "Kolaborasi Proyek",
      desc: "Kesempatan untuk ikut mengerjakan proyek open-source atau proyek komunitas agar kamu bisa belajar langsung dari praktik nyata.",
      img: "/Program2.jpg",
    },
    {
      id: 3,
      title: "Event & Sharing Session",
      desc: "Ikuti event rutin, webinar, atau sesi sharing teknologi yang diselenggarakan oleh komunitas StackUniverse.",
      img: "/Program3.jpg",
    },
  ];

  return (
    <section id="Program" className="bg-white px-6 py-16 md:px-20">
      <div data-aos="zoom-in" className="mx-auto mb-12 max-w-6xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-800 md:text-4xl">
          Program & Kegiatan Kami
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          StackUniverse hadir sebagai wadah bagi para tech enthusiast untuk
          belajar, berkembang, dan berkolaborasi dalam dunia teknologi.
        </p>
      </div>

      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth md:grid md:grid-cols-3 md:overflow-visible">
        {ProgramList.map((item) => (
          <div
            data-aos="flip-left"
            key={item.id}
            className="min-w-[80%] snap-center overflow-hidden rounded-2xl bg-gray-50 shadow-md transition hover:shadow-lg md:min-w-0"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                {item.title}
              </h3>
              <p className="mb-4 text-gray-600">{item.desc}</p>
              <a
                href="#Kontak"
                className="inline-block rounded-full bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
              >
                Gabung Sekarang
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
