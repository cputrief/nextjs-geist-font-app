# Portfolio Website - Web Developer

Sebuah website portfolio responsif yang modern untuk web developer, dibangun menggunakan HTML5, CSS3, JavaScript, dan Bootstrap 5.

## 🚀 Fitur Utama

### ✨ Desain & UI/UX
- **Desain Modern & Bersih**: Interface minimalis dengan fokus pada konten
- **Fully Responsive**: Tampil sempurna di desktop, tablet, dan mobile
- **Dark/Light Mode**: Toggle mode gelap dan terang dengan penyimpanan preferensi
- **Smooth Animations**: Animasi halus dan transisi yang menarik
- **Typography**: Menggunakan Google Fonts (Poppins) untuk tampilan profesional

### 📱 Responsivitas
- **Mobile-First Design**: Dioptimalkan untuk perangkat mobile
- **Breakpoints**: Mendukung semua ukuran layar (320px - 1920px+)
- **Touch-Friendly**: Elemen interaktif yang mudah diakses di perangkat sentuh
- **Hamburger Menu**: Navigasi mobile yang intuitif

### 🎯 Sections & Konten
1. **Hero Section**: Foto profil, nama, subtitle, dan CTA buttons
2. **About Section**: Deskripsi diri dan informasi personal
3. **Skills Section**: Progress bar animasi untuk keahlian teknis
4. **Portfolio Section**: Galeri proyek dengan modal detail
5. **Contact Section**: Form kontak dengan validasi dan Google Maps placeholder
6. **Footer**: Copyright dan link media sosial

### 🔧 Fungsionalitas
- **Form Validation**: Validasi real-time dan server-side untuk form kontak
- **Smooth Scrolling**: Navigasi halus antar section
- **Preloader**: Loading animation saat halaman dimuat
- **Scroll to Top**: Tombol kembali ke atas
- **Modal Portfolio**: Detail proyek dalam modal Bootstrap
- **Typing Animation**: Efek mengetik pada hero section
- **Progress Bar Animation**: Animasi skill bars saat scroll
- **Local Storage**: Penyimpanan preferensi dark mode dan form auto-save

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Semantic markup dan accessibility
- **CSS3**: Flexbox, Grid, Custom Properties, Animations
- **JavaScript (ES6+)**: Modern JavaScript dengan async/await
- **Bootstrap 5**: Framework CSS untuk responsivitas
- **Google Fonts**: Typography (Poppins)

## 📁 Struktur Folder

```
portfolio/
├── index.html          # File HTML utama
├── css/
│   └── style.css       # Custom CSS styles
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   └── images/         # Folder untuk gambar (opsional)
└── README.md           # Dokumentasi
```

## 🚀 Cara Menggunakan

### 1. Instalasi
```bash
# Clone atau download project
# Tidak perlu instalasi dependencies karena menggunakan CDN
```

### 2. Menjalankan Website
```bash
# Buka file index.html di browser
# Atau gunakan live server untuk development
```

### 3. Kustomisasi Konten

#### Mengubah Informasi Personal
Edit file `index.html` pada bagian berikut:

```html
<!-- Hero Section -->
<h1>Halo, Saya <span class="text-primary">Nama Anda</span></h1>
<h2>Profesi Anda</h2>

<!-- About Section -->
<li><strong>Nama:</strong> Nama Lengkap Anda</li>
<li><strong>Email:</strong> email@anda.com</li>
<!-- dst... -->
```

#### Mengubah Foto Profil
Ganti URL gambar pada:
```html
<img src="URL_FOTO_ANDA" alt="Profile Picture" class="img-fluid profile-img">
```

#### Menambah/Mengubah Skills
Edit bagian skills di `index.html`:
```html
<div class="skill-item mb-4">
    <div class="d-flex justify-content-between mb-2">
        <span class="skill-name">Nama Skill</span>
        <span class="skill-percentage">Persentase%</span>
    </div>
    <div class="progress">
        <div class="progress-bar" data-width="Persentase"></div>
    </div>
</div>
```

#### Mengubah Portfolio Items
Edit atau tambah item portfolio:
```html
<div class="col-lg-4 col-md-6 mb-4">
    <div class="portfolio-item">
        <div class="portfolio-image">
            <img src="URL_GAMBAR_PROYEK" alt="Nama Proyek">
            <div class="portfolio-overlay">
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#portfolioModalX">
                    Lihat Detail
                </button>
            </div>
        </div>
        <div class="portfolio-content">
            <h4>Nama Proyek</h4>
            <p>Deskripsi singkat proyek</p>
        </div>
    </div>
</div>
```

### 4. Konfigurasi Google Maps

Untuk mengaktifkan Google Maps, uncomment dan edit bagian ini di `index.html`:

```html
<!-- Ganti YOUR_API_KEY dengan API key Google Maps Anda -->
<iframe src="https://www.google.com/maps/embed?pb=YOUR_API_KEY" 
        width="100%" height="300" style="border:0;" allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

**Cara mendapatkan Google Maps API Key:**
1. Kunjungi [Google Cloud Console](https://console.cloud.google.com/)
2. Buat project baru atau pilih project yang ada
3. Aktifkan Maps JavaScript API
4. Buat credentials (API Key)
5. Konfigurasi restrictions untuk keamanan

## 🎨 Kustomisasi Styling

### Mengubah Warna Tema
Edit CSS variables di `css/style.css`:

```css
:root {
    --primary-color: #007bff;    /* Warna utama */
    --secondary-color: #6c757d;  /* Warna sekunder */
    --text-primary: #212529;     /* Warna teks utama */
    /* dst... */
}
```

### Mengubah Font
Ganti Google Fonts di `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=NamaFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Dan update CSS:
```css
:root {
    --font-family: 'NamaFont', sans-serif;
}
```

## 📱 Fitur Mobile

- **Touch Gestures**: Swipe dan tap yang responsif
- **Viewport Optimization**: Meta viewport untuk mobile
- **Fast Loading**: Optimasi gambar dan resource
- **Offline Ready**: Siap untuk implementasi Service Worker

## ♿ Accessibility

- **Semantic HTML**: Struktur HTML yang bermakna
- **ARIA Labels**: Label untuk screen reader
- **Keyboard Navigation**: Navigasi menggunakan keyboard
- **Focus Management**: Pengelolaan focus yang baik
- **Color Contrast**: Kontras warna yang memenuhi standar WCAG

## 🔧 Pengembangan Lanjutan

### Menambah Animasi
Gunakan CSS animations atau library seperti AOS.js:
```html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

### Integrasi Analytics
Tambahkan Google Analytics atau service lainnya:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### Form Backend
Integrasikan dengan backend service:
- **Netlify Forms**: Untuk hosting di Netlify
- **Formspree**: Service form handling
- **EmailJS**: Kirim email langsung dari frontend
- **Custom Backend**: PHP, Node.js, Python, dll.

### PWA (Progressive Web App)
Tambahkan manifest.json dan service worker:
```json
{
  "name": "Portfolio Website",
  "short_name": "Portfolio",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#007bff",
  "background_color": "#ffffff"
}
```

## 🚀 Deployment

### GitHub Pages
1. Upload ke GitHub repository
2. Aktifkan GitHub Pages di Settings
3. Pilih branch dan folder
4. Website akan tersedia di `username.github.io/repository-name`

### Netlify
1. Drag & drop folder ke Netlify
2. Atau connect dengan GitHub repository
3. Auto-deploy setiap ada perubahan

### Vercel
1. Import project dari GitHub
2. Deploy otomatis dengan custom domain

### Traditional Hosting
1. Upload semua file via FTP
2. Pastikan index.html di root directory
3. Konfigurasi domain dan SSL

## 🐛 Troubleshooting

### Masalah Umum

**1. Gambar tidak muncul**
- Periksa URL gambar
- Pastikan path relatif benar
- Cek CORS policy untuk external images

**2. Form tidak berfungsi**
- Periksa JavaScript console untuk error
- Pastikan Bootstrap JS sudah dimuat
- Validasi HTML form attributes

**3. Dark mode tidak tersimpan**
- Periksa localStorage support di browser
- Clear browser cache
- Periksa JavaScript console

**4. Animasi tidak smooth**
- Periksa CSS transitions
- Disable animations di reduced motion
- Optimasi performance

### Performance Tips

1. **Optimasi Gambar**: Gunakan format WebP dan lazy loading
2. **Minify CSS/JS**: Compress file untuk production
3. **CDN**: Gunakan CDN untuk Bootstrap dan fonts
4. **Caching**: Implementasi browser caching
5. **Gzip**: Enable compression di server

## 📞 Support & Kontribusi

### Melaporkan Bug
1. Buka issue di GitHub repository
2. Sertakan detail browser dan device
3. Screenshot jika memungkinkan
4. Steps to reproduce

### Kontribusi
1. Fork repository
2. Buat feature branch
3. Commit changes
4. Submit pull request

### Kontak Developer
- **Email**: ahmad.rizki@email.com
- **LinkedIn**: [Profile LinkedIn]
- **GitHub**: [GitHub Profile]

## 📄 Lisensi

MIT License - Bebas digunakan untuk project personal dan komersial.

## 🙏 Credits

- **Bootstrap**: Framework CSS
- **Google Fonts**: Typography
- **Unsplash**: Stock photos untuk demo
- **Font Awesome**: Icons (jika digunakan)

---

**Dibuat dengan ❤️ untuk komunitas developer Indonesia**

*Terakhir diupdate: Januari 2024*
