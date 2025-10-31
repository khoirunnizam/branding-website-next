"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold text-white">StackUniverse</h2>
          <p className="mt-2 text-sm">
            Komunitas belajar teknologi, kolaborasi, dan ngobar seru untuk
            generasi developer masa depan.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-white">Navigasi</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#Beranda" className="transition hover:text-white">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="#Tentang" className="transition hover:text-white">
                Tentang
              </Link>
            </li>
            <li>
              <Link href="#Blog" className="transition hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#Kontak" className="transition hover:text-white">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-white">Ikuti Kami</h3>
          <div className="flex gap-4">
            <Link
              href="https://instagram.com/stackuniverse"
              className="transition hover:text-pink-400"
            >
              Instagram
            </Link>
            <Link
              href="https://github.com/stackuniverse"
              className="transition hover:text-gray-100"
            >
              GitHub
            </Link>
            <Link
              href="https://youtube.com/@stackuniverse"
              className="transition hover:text-red-500"
            >
              YouTube
            </Link>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <p>Tulungagung, Indonesia</p>
            <p>Ngobar setiap Sabtu sore — join dan belajar bareng!</p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} StackUniverse. Dibangun dengan semangat
        kolaborasi & kopi ☕.
      </div>
    </footer>
  );
}
