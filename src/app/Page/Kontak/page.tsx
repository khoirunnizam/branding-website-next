"use client";
import React, { useState } from "react";

export default function Kontak() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih, ${formData.nama}! Pesan kamu sudah terkirim 🚀`);
    setFormData({ nama: "", email: "", pesan: "" });
  };

  return (
    <section
      id="Kontak"
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-20"
    >
      <div
        data-aos="zoom-in"
        className="w-full max-w-5xl rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-md md:p-16"
      >
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent">
            Hubungi Kami
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-300">
            Punya ide, pertanyaan, atau ingin berkolaborasi? Kami siap membantu.
          </p>
        </div>

        <div data-aos="zoom-in" className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-gray-300">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Informasi Kontak
            </h3>
            <p>📍 Jl. Aspal No. 999, Tulungagung</p>
            <p>📞 +62 XXXX XXXX XXX</p>
            <p>✉️ hello@stackuniverse.dev</p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-blue-400 transition hover:text-blue-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-blue-400 transition hover:text-blue-300"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-blue-400 transition hover:text-blue-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              value={formData.nama}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white placeholder-gray-400 transition focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Aktif"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white placeholder-gray-400 transition focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <textarea
              name="pesan"
              placeholder="Tulis pesanmu di sini..."
              value={formData.pesan}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white placeholder-gray-400 transition focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90"
            >
              Kirim Pesan 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
