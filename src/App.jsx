import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Instagram, Sun, Moon, ChevronDown, ExternalLink, ShoppingCart } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-lg') : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold" style={{ color: '#1a8f89' }}>𝙆𝙀𝙆 𝕏 𝙋𝙧𝙤𝙟𝙚𝙘𝙩𝙨</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('home')} className="hover:opacity-70 transition-opacity">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:opacity-70 transition-opacity">About</button>
              <button onClick={() => scrollToSection('services')} className="hover:opacity-70 transition-opacity">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:opacity-70 transition-opacity">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="hover:opacity-70 transition-opacity">Contact</button>
              <a 
                href="https://skuyykek69.github.io/jasa/" 
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ color: '#1a8f89' }}
              >
                Order Web
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {/* Mobile Menu Button */}
              <button onClick={toggleMenu} className="md:hidden p-2">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:opacity-70 transition-opacity">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:opacity-70 transition-opacity">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:opacity-70 transition-opacity">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 hover:opacity-70 transition-opacity">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:opacity-70 transition-opacity">Contact</button>
              <a 
                href="https://skuyykek69.github.io/jasa/" 
                className="block w-full text-left py-2 hover:opacity-70 transition-opacity"
                style={{ color: '#1a8f89' }}
              >
                Order Web
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(img/bg.jpg)',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.4)',
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in text-white drop-shadow-lg">
            Fajar Onky Hariadi
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-white drop-shadow-lg" style={{ color: '#1a8f89' }}>
            Multitalented Freelancer
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto drop-shadow-lg">
            Profesional lintas industri dengan keahlian teknis, digital, dan operasional
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#1a8f89' }}
          >
            Get In Touch
          </button>
          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-white opacity-70" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Saya adalah seorang profesional lintas industri yang berdedikasi dengan rekam jejak yang luas dalam bidang teknis, operasional, hingga layanan pelanggan. Saya tidak sekedar bekerja, saya belajar dan beradaptasi.
            </p>
            <p>
              Dengan pengalaman mulai dari ketelitian teknis di industri manufaktur kayu dan mekanik, hingga solusi digital sebagai praktisi IT freelance, saya memiliki kemampuan unik untuk memahami masalah dari berbagai sudut pandang.
            </p>
            <p>
              Perjalanan karier saya di bidang retail, farmasi, dan otomotif (detailing) telah membentuk saya menjadi pribadi yang sangat detail, adaptif, dan berorientasi pada hasil. Saya percaya bahwa kombinasi antara keterampilan teknis tangan (hands-on) dan pemikiran analitis digital membuat saya mampu memberikan solusi yang praktis dan efisien bagi setiap proyek yang saya tangani.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a8f89' }}>Technical Skills</h3>
              <ul className="space-y-2">
                <li>• Web Development</li>
                <li>• Digital Solutions</li>
                <li>• IT Troubleshooting</li>
                <li>• System Implementation</li>
              </ul>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a8f89' }}>Professional Experience</h3>
              <ul className="space-y-2">
                <li>• Operator Mesin</li>
                <li>• Mekanik Teralis</li>
                <li>• Car Detailing Specialist</li>
                <li>• Retail & Pharmacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-lg shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#1a8f89' }}>
                <span className="text-2xl text-white">💻</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Pembuatan website modern, responsif, dan user-friendly. Dari landing page hingga aplikasi web kompleks yang sesuai dengan kebutuhan bisnis Anda.
              </p>
              <a 
                href="https://skuyykek69.github.io/jasa/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 font-medium hover:bg-opacity-10 transition-all"
                style={{ 
                  borderColor: '#1a8f89',
                  color: '#1a8f89'
                }}
              >
                <ShoppingCart size={18} />
                Lihat Paket & Harga
              </a>
            </div>

            <div className={`p-8 rounded-lg shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#1a8f89' }}>
                <span className="text-2xl text-white">✨</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Car Detailing</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Layanan perawatan kendaraan profesional dengan detail dan ketelitian tinggi. Membuat kendaraan Anda tampil seperti baru dengan treatment berkualitas.
              </p>
            </div>

            <div className={`p-8 rounded-lg shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#1a8f89' }}>
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Multitalent Services</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Layanan pelanggan yang serba bisa dengan pengalaman lintas industri. Solusi fleksibel dan adaptif untuk berbagai kebutuhan bisnis dan operasional Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src="img/project1.jpg" 
                  alt="Digital Invitation Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Undangan Digital</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Undangan digital modern dan praktis yang memungkinkan pengiriman banyak undangan sekaligus dalam waktu singkat. Solusi efisien untuk acara spesial Anda.
                </p>
                <a 
                  href="https://beta-invitation.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: '#1a8f89' }}
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src="img/project2.png" 
                  alt="Financial Record Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Financial Record</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Aplikasi web catatan keuangan sederhana berbasis sistem rekap. Membantu Anda mengelola dan memantau keuangan dengan mudah dan terstruktur.
                </p>
                <a 
                  href="https://kek-finance.web.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: '#1a8f89' }}
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className={`text-lg mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Siap membantu mewujudkan proyek Anda. Hubungi saya melalui salah satu channel di bawah ini.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:kekprojects@gmail.com"
              className={`p-6 rounded-lg shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <Mail size={32} className="mx-auto mb-4" style={{ color: '#1a8f89' }} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Klik untuk kirim email</p>
            </a>

            <a 
              href="https://wa.me/6285551234202"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <Phone size={32} className="mx-auto mb-4" style={{ color: '#1a8f89' }} />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Klik untuk chat</p>
            </a>

            <a 
              href="https://instagram.com/thisonky._/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <Instagram size={32} className="mx-auto mb-4" style={{ color: '#1a8f89' }} />
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Klik untuk follow</p>
            </a>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              📍 Based in Lumajang, Jawa Timur, Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            ©️ 2026 𝙆𝙀𝙆 𝕏 𝙋𝙧𝙤𝙟𝙚𝙘𝙩𝙨. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}