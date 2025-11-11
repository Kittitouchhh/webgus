// src/components/Footer.jsx
import { Github, Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-gray-300 pt-5 pb-3 px-6 md:px-20 mt-10">
      <div className="mx-auto grid md:grid-cols-2 gap-5 border-b border-gray-700 pb-8">
        
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">GUSSUKE</h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            Passionate Frontend Developer who loves crafting smooth, aesthetic,
            and high-performance user experiences.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-violet-400" /> s66111596@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-violet-400" /> +66 81 399 6955
            </p>
            <div className="flex gap-4 mt-3">
              <a href="https://github.com/Kittitouchhh" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition">
                <Github size={22} />
              </a>
              <a href="https://www.facebook.com/kittitouch.gus.sakulsakpinit/" className="hover:text-violet-400 transition">
                <Facebook size={22} />
              </a>
              <a href="https://www.instagram.com/gussuke_76/" className="hover:text-violet-400 transition">
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm mt-6">
        <p>© 2025 Gussuke. All Rights Reserved.</p>
        <p className="hover:text-violet-400 transition">Made with  using React & TailwindCSS</p>
      </div>
    </footer>
  );
}
