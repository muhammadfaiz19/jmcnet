# JMCNET - Frontend (Next.js)

Website Company Profile resmi **JMCNET** (SGC Network) dengan Landing Page, Dashboard Admin Backstage, dan Chatbot AI.

---

## 🛠️ Cara Setup & Menjalankan

### 1. Konfigurasi Environment (`.env`)
Buat berkas `.env` di dalam root folder `jmcnet/`:
```env
BACKEND_URL=http://localhost:9091
```

### 2. Akun Akses Admin Bawaan
Anda dapat masuk menggunakan email dan password sesuai dengan nilai variabel `INITIAL_ADMIN_EMAIL` dan `INITIAL_ADMIN_PASSWORD` pada berkas `.env` backend Anda.

### 3. Langkah Menjalankan
```bash
# Instalasi dependensi
npm install

# Jalankan development server
npm run dev
```
Aplikasi frontend akan aktif di [http://localhost:3000](http://localhost:3000).

---

## 🔍 Troubleshooting (Pemecahan Masalah)

- **Looping Redirect Halaman Login**:
  - *Solusi*: Sistem secara otomatis menghapus cookie `access_token` menggunakan interceptor respons Axios jika mendeteksi status `401 Unauthorized` (Token Expired) dari backend dan mengalihkan user secara bersih ke `/admin/login`.
- **Logo / Dokumen Kosong**:
  - *Solusi*: Unggah logo dan dokumen terlebih dahulu di menu **Dashboard Admin -> Pengaturan Situs** agar konten Landing Page terisi otomatis.
