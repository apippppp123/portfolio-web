# Portofolio — Ahmad Rafif Har Messina (535250183)

Website portofolio responsif untuk Tugas Praktikum 5 — Layout/Tata Letak Responsif.
Dibuat murni dengan **HTML + CSS**, tanpa framework/library. JavaScript hanya
digunakan untuk fungsionalitas toggle hamburger menu pada tampilan mobile.

## Struktur file
```
.
├── index.html
├── style.css
├── script.js
└── README.md
```

## Cara menjalankan secara lokal
Cukup buka `index.html` langsung di browser, atau jalankan local server, misalnya:
```bash
python3 -m http.server 8000
```
lalu buka `http://localhost:8000` di browser.

## Cara deploy ke GitHub Pages via Git (step by step)

1. **Buat repository baru di GitHub**
   - Buka github.com → New repository → beri nama, misalnya `portfolio-web`.
   - Jangan centang "Add a README" kalau kamu sudah punya file lokal ini.

2. **Inisialisasi git di folder proyek** (jalankan di dalam folder ini)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: portofolio responsif"
   ```

3. **Hubungkan ke repository GitHub**
   ```bash
   git branch -M main
   git remote add origin https://github.com/<username-kamu>/portfolio-web.git
   git push -u origin main
   ```

4. **Aktifkan GitHub Pages**
   - Buka repository di GitHub → tab **Settings** → menu **Pages** (di sidebar kiri).
   - Pada **Build and deployment** → **Source**, pilih **Deploy from a branch**.
   - Pada **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
   - Tunggu 1–2 menit, GitHub akan menampilkan link deployment, biasanya berbentuk:
     `https://<username-kamu>.github.io/portfolio-web/`

5. **Verifikasi**
   - Buka link tersebut, pastikan halaman tampil dengan benar (navbar, landing page,
     riwayat pendidikan, proyek, dan footer).
   - Cek juga tampilan mobile (resize browser atau buka lewat HP) untuk memastikan
     hamburger menu berfungsi dan media query bekerja.

6. **Kumpulkan tugas**
   - Turn-in **link repository GitHub**: `https://github.com/<username-kamu>/portfolio-web`
   - Turn-in **link deployment GitHub Pages**: `https://<username-kamu>.github.io/portfolio-web/`

## Catatan
- Nama & NIM sudah dicantumkan di bagian hero (kartu identitas) dan footer.
- Setiap kali melakukan perubahan setelah deploy pertama, cukup jalankan:
  ```bash
  git add .
  git commit -m "Update: <deskripsi perubahan>"
  git push
  ```
  GitHub Pages akan otomatis memperbarui halaman dalam beberapa menit.
