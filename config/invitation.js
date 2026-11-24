/* ============================================================
   DATA UNDANGAN — CHICHI & NICKO · WEDDING DAY
   Ubah data di file ini saja. Desain tidak perlu disentuh.
   ============================================================ */
module.exports = {
  slug: 'chichi-nicko-wedding-day',          // dipakai sebagai prefix kunci Redis (jangan sama dengan proyek lain)
  projectLabel: 'Chichi & Nicko — Wedding Day',
  names: 'Chichi & Nicko',
  title: 'The Wedding of Chichi & Nicko',
  description: 'Undangan pernikahan Chichi Sevia Mardaleina & Nicko Dwi Yumile · Akad Nikah & Resepsi · Selasa, 22 Desember 2026 · Trenggalek',
  siteUrl: '',                               // opsional, mis. https://chichi-nicko.vercel.app (atau isi env SITE_URL di Vercel)

  /* >>> DESAIN FINAL YANG DIPUBLIKASIKAN <<<
     Pilih satu: blooming-romance | burgundy-editorial | champagne-elegance | botanical-garden | timeless-classic
     Bisa juga ditimpa lewat Environment Variable FINAL_DESIGN. */
  finalDesign: 'timeless-classic',

  maxGuests: 5,                              // jumlah tamu maksimum per RSVP
  order: ['bride', 'groom'],                 // urutan tampil mempelai
  couple: {
    bride: { name: 'Chichi Sevia Mardaleina', nick: 'Chichi', role: 'Putri', parents: 'Bapak Gatot Sumarno & Ibu Sunarti', photo: '/assets/img/bride-blue.png' },
    groom: { name: 'Nicko Dwi Yumile', nick: 'Nicko', role: 'Putra', parents: 'Bapak Supriyanto & Ibu Suyatmi', photo: '/assets/img/groom-blue.png' },
  },

  events: [
    { id: 'akad', title: 'Akad Nikah', dateText: 'Selasa, 22 Desember 2026', timeText: '08.00 WIB – selesai', start: '2026-12-22T08:00:00+07:00', end: '2026-12-22T10:00:00+07:00',
      venue: 'Kediaman Mempelai Wanita', address: 'RT. 04 RW. 01 Dusun Sukorejo Desa Karangsoko Kec. Trenggalek' },
    { id: 'resepsi', title: 'Resepsi', dateText: 'Selasa, 22 Desember 2026', timeText: '10.00 WIB – selesai', start: '2026-12-22T10:00:00+07:00', end: '2026-12-22T14:00:00+07:00',
      venue: 'Kediaman Mempelai Wanita', address: 'RT. 04 RW. 01 Dusun Sukorejo Desa Karangsoko Kec. Trenggalek' },
  ],
  // Pencarian Google Maps berdasarkan alamat (tanpa koordinat karangan). Ganti dengan koordinat/tautan pin jika sudah ada.
  mapQuery: 'RT. 04 RW. 01 Dusun Sukorejo, Desa Karangsoko, Kecamatan Trenggalek, Kabupaten Trenggalek, Jawa Timur',

  // Teks asli dari client, hanya dipecah per kalimat/klausa agar bisa ditata. Urutan dan kata tidak diubah.
  story: [
    { label: '2025', text: 'Tahun 2025 menjadi awal perkenalan kami berdua berkat teman kami, tidak langsung memutuskan untuk saling mencintai,' },
    { label: 'April 2026', text: 'selang 1 tahun kemudian ditahun 2026 kurang lebih pada bulan April 2026 akhirnya memutuskan untuk saling mencintai satu sama lain,' },
    { label: 'Juli 2026', text: 'berlanjut pada bulan Juli kami melangsungkan Lamaran.' },
    { label: 'Kini', text: 'Hingga saat ini, tibalah waktunya bagi kami untuk menyempurnakan ikatan suci atas nama Ibadah.' },
  ],

  gifts: [
    { bank: 'Bank Mandiri', number: '1710018866353', owner: 'CHICHI SEVIA MARDALEINA' },
    { bank: 'Bank BRI', number: '655401035944537', owner: 'CHICHI SEVIA MARDALEINA' },
  ],
  giftAddress: 'RT. 04 RW. 01 Dusun Sukorejo Desa Karangsoko Kec. Trenggalek',

  copy: {
    salam: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
    intro: 'Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami.',
    closing: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.',
    wassalam: "Wassalamu'alaikum Warahmatullahi Wabarakatuh",
    families: ['Keluarga Bapak Gatot Sumarno & Ibu Sunarti', 'Keluarga Bapak Supriyanto & Ibu Suyatmi'],
    giftNote: 'Doa restu Anda adalah hadiah terindah bagi kami. Namun jika berkenan memberi tanda kasih, Anda dapat menggunakan informasi berikut.',
    rsvpNote: 'Mohon konfirmasi kehadiran Anda agar kami dapat menyiapkan penyambutan terbaik.',
  },
  quote: { ar: 'وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ',
    id: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.', src: 'QS. Ar-Rum: 21' },

  photos: [
    { alt: 'Nicko dan Chichi berdiri berdampingan', pos: '50% 34%' },
    { alt: 'Chichi duduk di samping Nicko dengan rangkaian bunga merah marun', pos: '50% 36%' },
    { alt: 'Nicko dan Chichi bergandengan tangan', pos: '50% 33%' },
    { alt: 'Nicko dan Chichi berjalan sambil saling menatap', pos: '50% 30%' },
    { alt: 'Nicko dan Chichi dalam cahaya sorot lembut', pos: '50% 36%' },
  ],
  waTemplate: "Assalamu'alaikum Wr. Wb.\n\nKepada Yth. {nama}\n\nDengan memohon rahmat Allah SWT, kami mengundang Anda ke pernikahan Chichi & Nicko (Selasa, 22 Desember 2026). Buka undangan digital kami:\n{link}\n\nMerupakan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restu.\n\nWassalamu'alaikum Wr. Wb.",
};
