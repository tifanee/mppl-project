# SPIRIT-APP (Sistem Informasi Terpadu SPIRIT FMIPA IPB)
### Proyek MPPL R1 Kelompok 07 Ilmu Komputer IPB Semester 7 (2022)

## Deskripsi Umum
SPIRIT-APP merupakan **sistem informasi searah kepada publik yang diperbarui secara berkala** mengenai penyelenggaraan jalannya event olahraga dan kesenian terbesar di FMIPA IPB, yakni SPIRIT (Sport Competition and Art Festival on MIPA Faculty). Sistem ini terbagi ke dalam **dua modul**, yakni laman informasi yang dapat diakses oleh publik yang berisi mengenai informasi SPIRIT yang mencakup departemen yang mengikuti berikut atlet beserta artis yang terlibat, hasil serta jadwal pertandingan olahraga atau pementasan seni, detail pertandingan dimana pengguna dapat menuliskan komentar dan dukungannya secara *anonymous*, perolehan medali, dan artikel atau berita terkait jalannya penyelenggaraan SPIRIT. Modul lainnya merupakan panel admin yang dapat membantu panitia atau stakeholders terkait dalam mengolah *database* dari informasi yang akan ditampilkan ke publik.

Anggota dan Peran Kelompok 07
| No |           Nama          |    NIM    |        Role        |
|:--:|:-----------------------:|:---------:|:------------------:|
| 1  | Laudza Muhammad Afin T. | G64190052 | Project Manager    |
| 2  | Tiffanee Anindhita      | G64190080 | UI/UX Designer     |
| 3  | Risda Awalia            | G64190106 | System Analyst     |
| 4  | Febri Bawahir           | G64190096 | Fullstack Engineer |
| 5  | Novaldi                 | G64190086 | Dev-Ops Engineer   |

## Latar Belakang
Acara kompetisi olahraga maupun kontes seni selalu menjadi tontonan menarik setiap orang baik skala sekolah hingga internasional. Sebagai ilustrasi, Departemen Pemuda dan Olahraga serta Departemen Seni dan Budaya BEM FMIPA di setiap tahun selalu menyelenggarakan kompetisi akbar olahraga dan seni dalam cakupan fakultas yang bernama SPIRIT (Sport Competition and Art Festival on MIPA Faculty). SPIRIT merupakan perlombaan antar mahasiswa dalam Fakultas Matematika dan Ilmu Pengetahuan Alam IPB pada bidang olahraga dan seni. Nantinya, juara-juara dari kompetisi tersebut akan menjadi kontingen yang mewakili FMIPA pada kompetisi olahraga dan seni tingkat universitas yakni Olimpiade Mahasiswa IPB dan IPB Art Contest.

Pada pelaksanaannya, sampai saat ini belum ada suatu platform sistem informasi terpadu yang dapat dijadikan sumber informasi kredibel bagi warga FMIPA IPB dalam mengikuti perkembangan perhelatan SPIRIT. Media informasi yang digunakan oleh pihak panitia terkait penyelenggaraan SPIRIT hanya memanfaatkan media sosial instagram yang hanya menampilkan informasi terbatas dan cenderung tidak diperbaharui secara berkala. Hal tersebut mengakibatkan kebingungan bagi publik khususnya mahasiswa FMIPA mengenai jadwal, hasil, informasi umum peserta, bagan pertandingan, dan perolehan medali setiap atlet, artis, tim atau departemennya. Salah satu alasan mengapa penggunaan media sosial Instagram tidak efektif untuk menyebarkan informasi adalah pada untuk satu publikasi diperlukan template desain yang mumpuni dimana hal tersebut sangat membutuhkan waktu panitia sehingga menghambat alur publikasi.

Dalam upaya membantu untuk mengatasi permasalahan tersebut, penulis melalui panitia SPIRIT sebagai client berniat untuk mengembangkan platform digital berupa website untuk seluruh keperluan publikasi kompetisi baik olahraga maupun seni. Informasi yang tersedia pada platform tersebut seperti jadwal pertandingan, tempat pertandingan,  klasemen hasil pertandingan, hingga artikel terkait pelaksanaan kompetisi baik olahraga maupun seni. Melalui platform tersebut, pihak panitia tidak perlu menghabiskan banyak waktu untuk memikirkan template design, sebab hal tersebut telah terintegrasi dengan front-end website sehingga panitia dapat berfokus pada isi informasi yang akan dipublikasikan dan mempercepat alur publikasi. Selain itu, kelebihan dari website ini dibandingkan lainnya adalah pengguna dapat memberikan dukungan atau komentarnya pada laman detail pertandingan olahraga sebagai wujud sarana berekspresi mahasiswa.

## Tujuan Sistem
- Sebuah sistem yang mampu memberikan informasi terpadu satu arah kepada publik, khususnya warga FMIPA IPB mengenai jalannya penyelenggaraan SPIRIT yang diperbarui secara cepat dan berkala.
- Memberikan kemudahan bagi panitia SPIRIT untuk dapat mengelola database secara berkala sehingga informasi yang tersaji kepada publik selalu *up-to-date*.

## User Story
- Sebagai seorang mahasiswa FMIPA IPB, saya ingin dapat mengetahui berbagai macam informasi terkait penyelenggaraan SPIRIT agar saya dapat stay up-to-date, tahu jadwal pertandingan, dan dapat memberikan dukungan.
- Sebagai seorang panitia SPIRIT FMIPA IPB, saya ingin dapat diberikan kemudahan untuk mengatur database sistem informasi agar saya dapat menyajikan informasi terkait SPIRIT kepada publik secara berkala.

## Cakupan Sistem
### Apa yang akan kami kembangkan?
- Aplikasi website yang dapat diakses dari browser melalui perangkat apapun.
- Berisi informasi mengenai cabang olahraga atau seni yang dipertandingkan, informasi umum mengenai peserta atau tim, jadwal serta hasil pertandingan, detail pertandingan olahraga, dan perolehan medali.
- Pojok publikasi berupa artikel serta dokumentasi mengenai jalannya SPIRIT yang ditulis langsung oleh panitia SPIRIT.
- Fitur memberikan dukungan atau tanggapan pada setiap pertandingan yang diadakan.
- Panel admin tersendiri yang dapat diakses oleh admin yang telah diberikan otorisasi oleh super_admin. Lewat panel ini admin yang telah terotorisasi dapat melakukan CRUD terhadap atlet, artis, olahraga, seni, pertandingan, dan press release atau artikel SPIRIT.

### Apa yang tidak akan kami kembangkan?
- Sistem pendaftaran atau registrasi atlet dan artis untuk mengikuti kegiatan SPIRIT.
- Forum diskusi yang antar pengguna. Sistem akan jauh lebih kompleks.

## Kebutuhan Sistem
### User
- Publik, terutama warga FMIPA IPB
- Admin, panitia SPIRIT FMIPA IPB.
### Fitur utama
- (Publik) Melihat informasi terkait penyelenggaraan SPIRIT FMIPA IPB.
- (Admin) Mengatur informasi yang dilihat publik pada laman utama.
### Lingkungan Pengembangan
- MongoDB - Document Database
- ExpressJS - Node.js Web Framework
- ReactJS - Client-side Javascript framework
- NodeJS - Premier Javascript web server
- Figma - UIUX Tools
- Visual Studio Code - Text Editor
- Trello - Project Management
- Drawio - Diagram Maker Tools

## Risiko dan Pencegahan
> Deadline yang ketat dan kesibukan tim pengembang.

Project Manager mengecek progress dan mengingatkan tim mengenai task yang harus segera diselesaikan.

> Manajemen proyek yang buruk.

Project Manager memastikan setiap anggota tim untuk melaksanakan tugasnya masing-masing guna meminimalisir terjadinya manajemen yang buruk.

> Isu dan bug pada kode.

Engineer melakukan testing dan debugging secara berkala.

> Budget dari klien yang tidak memadai.

Project Manager membahas bersama klien mengenai fitur yang akan dibuat dan budget yang dibutuhkan dalam pengembangan.

> Masalah serta miskomunikasi dengan stakeholders.

Project Manager bertemu atau berkomunikasi langsung dengan para stakeholders terkait untuk meluruskan/menghindari miskomunikasi.

## Metodologi Software Dev. Life Cycle
> SCRUM

Menurut pendapat ahli, Scrum sangat cocok diterapkan pada proyek perangkat lunak pada cakupan yang kecil dan berjangka pendek serta budget yang sangat terbatas. Selain itu, seluruh anggota tim yang terlibat dalam pengerjaan proyek merupakan mahasiswa yang memiliki kesibukan yang berbeda-beda. Oleh karena itu, metodologi pengembangan perangkat lunak yang fleksibel dan dapat menyesuaikan kesibukan anggota di setiap sprintnya dirasa paling cocok untuk proyek ini.

## Our Trello
https://ipb.link/spiritapp-trello

![trello-snapshot](https://user-images.githubusercontent.com/77919010/204895209-e4fbafac-bd2f-4f44-a1c3-2da6932016f3.jpg)

## Our Design System and Figma
https://ipb.link/spiritapp-figma

![design-system-spirit](https://user-images.githubusercontent.com/77919010/204895354-99742231-f9ee-4251-968c-2b48d9141566.png)
![figma-snapshot](https://user-images.githubusercontent.com/77919010/204895525-bc75f604-5270-4e04-b321-41f5ac9f63f2.png)

## Use Case Diagram
https://ipb.link/spiritapp-usecase

![UseCaseDiagram MPPL07 Final](https://user-images.githubusercontent.com/77919010/204895680-2480d15d-3b62-465f-8527-30d84a62340c.jpg)

## Activity Diagram
Seluruh Activity Diagram pada proyek ini dapat dilihat pada link di bawah ini.

https://ipb.link/spiritapp-activity

## Entity Relationship Diagram
https://ipb.link/spiritapp-erd

![ERD MPPL07 Final](https://user-images.githubusercontent.com/77919010/204896064-767138ea-ad60-41c0-9789-3da54db59584.jpg)

## Test Cases Sheet
Seluruh test case pada proyek ini dapat dilihat pada link di bawah ini.

https://ipb.link/spiritapp-testcases
