const icon = (name) => {
  const icons = {
    dashboard: '<svg viewBox="0 0 24 24"><path d="M3 3h8v8H3V3Zm2 2v4h4V5H5Zm8-2h8v5h-8V3Zm2 2v1h4V5h-4ZM3 13h8v8H3v-8Zm2 2v4h4v-4H5Zm8-5h8v11h-8V10Zm2 2v7h4v-7h-4Z"/></svg>',
    application: '<svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6V2Zm2 2v16h10V8h-4V4H8Zm2 8h6v2h-6v-2Zm0 4h6v2h-6v-2Z"/></svg>',
    status: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-1 3h2v5.6l3.5 2.1-1 1.7-4.5-2.7V7Z"/></svg>',
    document: '<svg viewBox="0 0 24 24"><path d="M7 2h7l5 5v15H7V2Zm2 2v16h8V8h-4V4H9Zm2 8h4v2h-4v-2Zm0 4h4v2h-4v-2Z"/></svg>',
    profile: '<svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 10c-5 0-8 2.5-8 5.5V22h16v-2.5c0-3-3-5.5-8-5.5Zm0 2c3.8 0 6 1.7 6 3.5v.5H6v-.5c0-1.8 2.2-3.5 6-3.5Z"/></svg>',
    queue: '<svg viewBox="0 0 24 24"><path d="M4 4h16v5H4V4Zm2 2v1h12V6H6Zm-2 5h16v5H4v-5Zm2 2v1h12v-1H6Zm-2 5h16v4H4v-4Zm2 2h12v0H6Z"/></svg>',
    verify: '<svg viewBox="0 0 24 24"><path d="M10 2h4l1 2h4v18H5V4h4l1-2Zm1.2 2-.5 1h2.6l-.5-1h-1.6ZM7 6v14h10V6h-1.3l-.7 1H9l-.7-1H7Zm8.7 4.7 1.4 1.4-5.3 5.3-3-3 1.4-1.4 1.6 1.6 3.9-3.9Z"/></svg>',
    query: '<svg viewBox="0 0 24 24"><path d="M4 3h16v14H8l-4 4V3Zm2 2v11.2l1.2-1.2H18V5H6Zm5 2h2v5h-2V7Zm0 6.5h2v2h-2v-2Z"/></svg>',
    payment: '<svg viewBox="0 0 24 24"><path d="M3 5h18v14H3V5Zm2 2v2h14V7H5Zm0 4v6h14v-6H5Zm2 2h5v2H7v-2Z"/></svg>',
    batch: '<svg viewBox="0 0 24 24"><path d="M4 3h16v6H4V3Zm2 2v2h12V5H6ZM4 11h16v10H4V11Zm2 2v6h12v-6H6Zm2 1h4v2H8v-2Z"/></svg>',
    reports: '<svg viewBox="0 0 24 24"><path d="M4 20V9h4v11H4Zm6 0V4h4v16h-4Zm6 0v-7h4v7h-4Z"/></svg>',
    settings: '<svg viewBox="0 0 24 24"><path d="m19.4 13 .1-1-.1-1 2-1.5-2-3.5-2.5 1a8 8 0 0 0-1.7-1L15 3h-4l-.3 3a8 8 0 0 0-1.7 1L6.5 6l-2 3.5 2 1.5-.1 1 .1 1-2 1.5 2 3.5 2.5-1a8 8 0 0 0 1.7 1l.3 3h4l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.5-2.1-1.5ZM13.4 19h-2.8l-.2-2.4-.7-.3a6 6 0 0 1-1.8-1l-.6-.5-2 .8-1.4-2.4 1.7-1.3-.1-.8v-1l.1-.8-1.7-1.3 1.4-2.4 2 .8.6-.5a6 6 0 0 1 1.8-1l.7-.3.2-2.4h2.8l.2 2.4.7.3a6 6 0 0 1 1.8 1l.6.5 2-.8 1.4 2.4-1.7 1.3.1.8v1l-.1.8 1.7 1.3-1.4 2.4-2-.8-.6.5a6 6 0 0 1-1.8 1l-.7.3-.2 2.4ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/></svg>',
    users: '<svg viewBox="0 0 24 24"><path d="M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm7 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM9 13c-4.1 0-7 2.1-7 5v3h14v-3c0-2.9-2.9-5-7-5Zm0 2c3.1 0 5 1.4 5 3v1H4v-1c0-1.6 1.9-3 5-3Zm7-1c-.4 0-.8 0-1.2.1a7 7 0 0 1 2.5 2.1c1.7.3 2.7 1.1 2.7 2v.8h-2v2h4v-2.8c0-2.5-2.5-4.2-6-4.2Z"/></svg>',
    audit: '<svg viewBox="0 0 24 24"><path d="M5 2h14v20H5V2Zm2 2v16h10V4H7Zm2 3h6v2H9V7Zm0 4h6v2H9v-2Zm0 4h4v2H9v-2Z"/></svg>',
    chevron: '<svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7-1.4-1.4 5.6-5.6-5.6-5.6L9 5Z"/></svg>',
    search: '<svg viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 1 0 4.7 13.3l4.2 4.1 1.4-1.4-4.1-4.2A7.5 7.5 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="m9.2 16.2-4.1-4.1L3.7 13.5 9.2 19 20.3 7.9l-1.4-1.4-9.7 9.7Z"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-1 3h2v5.6l3.5 2.1-1 1.7-4.5-2.7V7Z"/></svg>',
    alert: '<svg viewBox="0 0 24 24"><path d="M12 2 1 21h22L12 2Zm0 4 7.5 13h-15L12 6Zm-1 4v5h2v-5h-2Zm0 6.5v2h2v-2h-2Z"/></svg>',
    upload: '<svg viewBox="0 0 24 24"><path d="m12 3 5 5-1.4 1.4L13 6.8V16h-2V6.8L8.4 9.4 7 8l5-5ZM4 18h16v3H4v-3Zm2 2h12v-1H6v1Z"/></svg>',
    bank: '<svg viewBox="0 0 24 24"><path d="m12 2 10 5v2H2V7l10-5Zm0 2.2L6.5 7h11L12 4.2ZM4 11h3v7H4v-7Zm5 0h3v7H9v-7Zm5 0h3v7h-3v-7Zm5 0h1v7h-1v-7ZM2 20h20v2H2v-2Z"/></svg>',
    home: '<svg viewBox="0 0 24 24"><path d="m12 2 10 9-1.3 1.5-1.7-1.6V22h-6v-7h-2v7H5V10.9l-1.7 1.6L2 11l10-9Zm0 2.7-5 4.5V20h2v-7h6v7h2V9.2l-5-4.5Z"/></svg>',
    download: '<svg viewBox="0 0 24 24"><path d="M11 3h2v10.2l3.6-3.6L18 11l-6 6-6-6 1.4-1.4 3.6 3.6V3ZM4 19h16v2H4v-2Z"/></svg>',
    refresh: '<svg viewBox="0 0 24 24"><path d="M12 4a8 8 0 0 1 7.4 5H17l3 3 3-3h-1.5A10 10 0 1 0 22 15h-2a8 8 0 1 1-8-11Z"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z"/></svg>',
    info: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-1 7h2v6h-2v-6Zm0-4h2v2h-2V7Z"/></svg>'
  };
  return icons[name] || icons.info;
};

const roleConfig = {
  mangsa: {
    name: 'Ahmad Salleh', initials: 'AS', role: 'Pemohon BWI',
    nav: [
      ['Utama'],
      ['dashboard', 'Ringkasan', 'dashboard'],
      ['application', 'Permohonan Saya', 'application'],
      ['status', 'Status & Bayaran', 'status'],
      ['document', 'Dokumen', 'document'],
      ['profile', 'Profil & Akaun Bank', 'profile']
    ]
  },
  jkm: {
    name: 'Nor Aini', initials: 'NA', role: 'Pegawai Pengesah JKM',
    nav: [
      ['Operasi JKM'],
      ['jkm-dashboard', 'Papan Pemuka', 'dashboard'],
      ['jkm-queue', 'Barisan Semakan', 'queue', '18'],
      ['jkm-areas', 'Kawasan Bencana', 'reports', '6'],
      ['jkm-pps', 'Direktori PPS', 'home', '12'],
      ['jkm-documents', 'Semakan Dokumen', 'verify', '7'],
      ['jkm-reports', 'Laporan Daerah', 'reports']
    ]
  },
  nadma: {
    name: 'Firdaus Rahman', initials: 'FR', role: 'Pegawai Kelulusan NADMA',
    nav: [
      ['Operasi NADMA'],
      ['nadma-dashboard', 'Papan Pemuka', 'dashboard'],
      ['nadma-review', 'Semakan Kelayakan', 'verify', '26'],
      ['nadma-query', 'Pengurusan Kuiri', 'query', '11'],
      ['nadma-zones', 'Kawasan Bencana', 'home', '18'],
      ['nadma-approved', 'Diluluskan', 'check'],
      ['nadma-reports', 'Analitik Nasional', 'reports']
    ]
  },
  bsn: {
    name: 'Siti Hajar', initials: 'SH', role: 'Pegawai Operasi BSN',
    nav: [
      ['Operasi Pembayaran'],
      ['bsn-dashboard', 'Papan Pemuka', 'dashboard'],
      ['bsn-batches', 'Kelompok Bayaran', 'batch', '4'],
      ['bsn-eft', 'Pengesahan EFT', 'payment', '9'],
      ['bsn-trace', 'Jejak Transaksi', 'status', '12'],
      ['bsn-cash', 'Kutipan Tunai', 'bank', '13'],
      ['bsn-reconcile', 'Rekonsiliasi', 'reports']
    ]
  },
  admin: {
    name: 'Pentadbir Portal', initials: 'PP', role: 'Pentadbir Sistem',
    nav: [
      ['Pentadbiran'],
      ['admin-dashboard', 'Kesihatan Sistem', 'dashboard'],
      ['admin-users', 'Pengguna & Peranan', 'users'],
      ['admin-workflow', 'Konfigurasi Aliran', 'settings'],
      ['admin-audit', 'Log Audit', 'audit'],
      ['admin-reports', 'Laporan Menyeluruh', 'reports']
    ]
  }
};

const sampleCases = [
  { id: 'BWI-2026-001284', name: 'Ahmad Salleh', ic: '850412-10-4481', district: 'Klang', state: 'Selangor', date: '24 Jul 2026', status: 'Dalam semakan NADMA', statusClass: 'info', amount: 'RM1,000', bank: 'BSN •••• 8421', risk: 'Rendah' },
  { id: 'BWI-2026-001297', name: 'Nurul Izzati', ic: '900218-08-5234', district: 'Temerloh', state: 'Pahang', date: '24 Jul 2026', status: 'Dokumen tidak lengkap', statusClass: 'warning', amount: 'RM1,000', bank: 'Maybank •••• 0712', risk: 'Sederhana' },
  { id: 'BWI-2026-001306', name: 'Ravi Kumar', ic: '780621-07-3021', district: 'Hilir Perak', state: 'Perak', date: '25 Jul 2026', status: 'Disahkan JKM', statusClass: 'success', amount: 'RM1,000', bank: 'CIMB •••• 1904', risk: 'Rendah' },
  { id: 'BWI-2026-001318', name: 'Siti Mariam', ic: '820903-03-6208', district: 'Pasir Mas', state: 'Kelantan', date: '25 Jul 2026', status: 'Permohonan dikuiri', statusClass: 'error', amount: 'RM1,000', bank: 'Tiada akaun', risk: 'Tinggi' },
  { id: 'BWI-2026-001325', name: 'Lim Wei Jian', ic: '930114-01-1552', district: 'Segamat', state: 'Johor', date: '26 Jul 2026', status: 'Menunggu semakan JKM', statusClass: 'neutral', amount: 'RM1,000', bank: 'Public Bank •••• 3116', risk: 'Rendah' },
  { id: 'BWI-2026-001331', name: 'Mohd Arif', ic: '870728-11-2488', district: 'Kemaman', state: 'Terengganu', date: '26 Jul 2026', status: 'Bayaran sedang diproses', statusClass: 'info', amount: 'RM1,000', bank: 'BSN •••• 9302', risk: 'Rendah' }
];

const disasterAreas = [
  { id:'ZON-SGR-KLG-04', state:'Selangor', district:'Klang', area:'Kapar, Meru & Sri Muda', disaster:'Banjir', severity:'Kritikal', severityClass:'error', pps:4, families:457, people:1836, applications:612, approved:421, last:'28 Jul 2026, 11:45 pagi' },
  { id:'ZON-PHG-TMR-02', state:'Pahang', district:'Temerloh', area:'Mentakab & Lanchang', disaster:'Banjir', severity:'Tinggi', severityClass:'warning', pps:3, families:318, people:1284, applications:406, approved:290, last:'28 Jul 2026, 11:32 pagi' },
  { id:'ZON-KTN-PSM-01', state:'Kelantan', district:'Pasir Mas', area:'Rantau Panjang', disaster:'Banjir', severity:'Tinggi', severityClass:'warning', pps:4, families:289, people:1142, applications:366, approved:251, last:'28 Jul 2026, 11:21 pagi' },
  { id:'ZON-JHR-SGM-03', state:'Johor', district:'Segamat', area:'Chaah & Labis', disaster:'Banjir', severity:'Sederhana', severityClass:'info', pps:2, families:177, people:694, applications:224, approved:173, last:'28 Jul 2026, 10:58 pagi' },
  { id:'ZON-PRK-HPR-02', state:'Perak', district:'Hilir Perak', area:'Teluk Intan', disaster:'Banjir kilat', severity:'Sederhana', severityClass:'info', pps:2, families:134, people:512, applications:169, approved:119, last:'28 Jul 2026, 10:43 pagi' },
  { id:'ZON-TRG-KMN-01', state:'Terengganu', district:'Kemaman', area:'Chukai & Kijal', disaster:'Ribut', severity:'Pemantauan', severityClass:'neutral', pps:1, families:73, people:286, applications:92, approved:68, last:'28 Jul 2026, 10:15 pagi' }
];

const ppsDirectory = [
  { id:'PPS-SGR-KLG-001', name:'SK Taman Sri Murni', state:'Selangor', district:'Klang', mukim:'Kapar', zone:'ZON-SGR-KLG-04', disaster:'Banjir', families:168, people:642, capacity:760, occupancy:84, status:'Hampir penuh', statusClass:'warning', coordinator:'PKMD Klang', phone:'03-3341 2200', last:'11:42 pagi' },
  { id:'PPS-SGR-KLG-002', name:'Dewan Komuniti Meru', state:'Selangor', district:'Klang', mukim:'Meru', zone:'ZON-SGR-KLG-04', disaster:'Banjir', families:121, people:488, capacity:740, occupancy:66, status:'Aktif', statusClass:'success', coordinator:'PKMD Klang', phone:'03-3341 2200', last:'11:38 pagi' },
  { id:'PPS-SGR-KLG-003', name:'SK Telok Gong', state:'Selangor', district:'Klang', mukim:'Pelabuhan Klang', zone:'ZON-SGR-KLG-04', disaster:'Banjir', families:96, people:376, capacity:650, occupancy:58, status:'Aktif', statusClass:'success', coordinator:'PKMD Klang', phone:'03-3341 2200', last:'11:30 pagi' },
  { id:'PPS-PHG-TMR-001', name:'SMK Mentakab', state:'Pahang', district:'Temerloh', mukim:'Mentakab', zone:'ZON-PHG-TMR-02', disaster:'Banjir', families:144, people:568, capacity:680, occupancy:84, status:'Hampir penuh', statusClass:'warning', coordinator:'PKMD Temerloh', phone:'09-296 1470', last:'11:19 pagi' },
  { id:'PPS-PHG-TMR-002', name:'Dewan Lanchang', state:'Pahang', district:'Temerloh', mukim:'Lanchang', zone:'ZON-PHG-TMR-02', disaster:'Banjir', families:91, people:362, capacity:620, occupancy:58, status:'Aktif', statusClass:'success', coordinator:'PKMD Temerloh', phone:'09-296 1470', last:'11:11 pagi' },
  { id:'PPS-KTN-PSM-001', name:'SK Gual Tinggi', state:'Kelantan', district:'Pasir Mas', mukim:'Rantau Panjang', zone:'ZON-KTN-PSM-01', disaster:'Banjir', families:152, people:603, capacity:690, occupancy:87, status:'Hampir penuh', statusClass:'warning', coordinator:'PKMD Pasir Mas', phone:'09-790 9055', last:'11:03 pagi' },
  { id:'PPS-JHR-SGM-001', name:'Dewan Serbaguna Chaah', state:'Johor', district:'Segamat', mukim:'Chaah', zone:'ZON-JHR-SGM-03', disaster:'Banjir', families:103, people:401, capacity:720, occupancy:56, status:'Aktif', statusClass:'success', coordinator:'PKMD Segamat', phone:'07-931 1122', last:'10:51 pagi' },
  { id:'PPS-PRK-HPR-001', name:'SMK Seri Perak', state:'Perak', district:'Hilir Perak', mukim:'Durian Sebatang', zone:'ZON-PRK-HPR-02', disaster:'Banjir kilat', families:78, people:298, capacity:600, occupancy:50, status:'Aktif', statusClass:'success', coordinator:'PKMD Hilir Perak', phone:'05-622 1763', last:'10:34 pagi' },
  { id:'PPS-TRG-KMN-001', name:'Dewan Sivik Chukai', state:'Terengganu', district:'Kemaman', mukim:'Chukai', zone:'ZON-TRG-KMN-01', disaster:'Ribut', families:73, people:286, capacity:550, occupancy:52, status:'Aktif', statusClass:'success', coordinator:'PKMD Kemaman', phone:'09-859 1515', last:'10:12 pagi' }
];

const bsnPaymentSteps = [
  {
    title: 'Arahan bayaran diterima BSN',
    description: 'Fail arahan NADMA diterima melalui saluran integrasi selamat dan nombor kelompok dijana.',
    time: '28 Jul 2026, 10:02 pagi',
    code: 'RCV-00',
    owner: 'Gerbang Integrasi BSN',
    reference: 'BATCH-280726-01'
  },
  {
    title: 'Integriti kelompok disahkan',
    description: 'Checksum, jumlah penerima, nilai keseluruhan dan tandatangan digital dipadankan.',
    time: '28 Jul 2026, 10:04 pagi',
    code: 'VAL-00',
    owner: 'Payment Validation Service',
    reference: '2,309 rekod sah'
  },
  {
    title: 'Akaun penerima divalidasi',
    description: 'Status akaun, nombor akaun dan padanan nama pemegang disemak sebelum transaksi dibentuk.',
    time: '28 Jul 2026, 10:11 pagi',
    code: 'ACC-00',
    owner: 'Account Verification',
    reference: 'BSN •••• 8421'
  },
  {
    title: 'Arahan EFT dibentuk',
    description: 'Transaksi RM1,000 dijana dengan rujukan unik dan dimasukkan ke dalam barisan pemprosesan.',
    time: '28 Jul 2026, 10:18 pagi',
    code: 'EFT-10',
    owner: 'Payment Orchestrator',
    reference: 'EFT-20260728-0194'
  },
  {
    title: 'EFT dihantar ke sistem teras',
    description: 'Arahan pembayaran dihantar untuk posting ke akaun penerima dan menunggu respons muktamad.',
    time: '28 Jul 2026, 10:25 pagi',
    code: 'EFT-20',
    owner: 'Core Banking',
    reference: 'Posting dalam proses'
  },
  {
    title: 'Keputusan transaksi diterima',
    description: 'Sistem teras mengesahkan transaksi berjaya dan baki penerima telah dikreditkan.',
    time: '28 Jul 2026, 11:42 pagi',
    code: 'EFT-00',
    owner: 'Core Banking',
    reference: 'Berjaya dikreditkan'
  },
  {
    title: 'Rekonsiliasi NADMA–BSN selesai',
    description: 'Arahan asal, nilai transaksi dan keputusan EFT dipadankan tanpa perbezaan.',
    time: '28 Jul 2026, 11:50 pagi',
    code: 'REC-00',
    owner: 'Reconciliation Engine',
    reference: 'Perbezaan RM0'
  },
  {
    title: 'Notifikasi dan resit diterbitkan',
    description: 'SMS pembayaran dan resit digital tersedia untuk pemohon dalam portal.',
    time: '28 Jul 2026, 11:53 pagi',
    code: 'NTF-00',
    owner: 'Notification Gateway',
    reference: 'SMS-882194'
  }
];

const state = {
  role: localStorage.getItem('bwi-role') || 'mangsa',
  route: localStorage.getItem('bwi-route') || 'dashboard',
  formStep: 1,
  notificationsOpen: false,
  applicationStatus: localStorage.getItem('bwi-status') || 'nadma-review',
  bsnStep: Number.parseInt(localStorage.getItem('bwi-bsn-step') || '0', 10)
};

const main = document.getElementById('main-content');
const navList = document.getElementById('nav-list');
const pageTitle = document.getElementById('page-title');
const breadcrumb = document.getElementById('breadcrumb');
const roleSwitcher = document.getElementById('role-switcher');
const sidebar = document.getElementById('sidebar');

const titles = {
  dashboard: 'Ringkasan Permohonan', application: 'Permohonan Saya', status: 'Status & Bayaran', document: 'Dokumen Sokongan', profile: 'Profil & Akaun Bank',
  'jkm-dashboard': 'Papan Pemuka JKM', 'jkm-queue': 'Barisan Semakan JKM', 'jkm-areas': 'Kawasan Bencana', 'jkm-pps': 'Direktori PPS', 'jkm-documents': 'Semakan Dokumen', 'jkm-reports': 'Laporan Daerah',
  'nadma-dashboard': 'Papan Pemuka NADMA', 'nadma-review': 'Semakan Kelayakan', 'nadma-query': 'Pengurusan Kuiri', 'nadma-zones': 'Kawasan Bencana Nasional', 'nadma-approved': 'Permohonan Diluluskan', 'nadma-reports': 'Analitik Nasional',
  'bsn-dashboard': 'Papan Pemuka BSN', 'bsn-batches': 'Kelompok Bayaran', 'bsn-eft': 'Pengesahan EFT', 'bsn-trace': 'Jejak Transaksi BSN', 'bsn-cash': 'Kutipan Tunai', 'bsn-reconcile': 'Rekonsiliasi',
  'admin-dashboard': 'Kesihatan Sistem', 'admin-users': 'Pengguna & Peranan', 'admin-workflow': 'Konfigurasi Aliran', 'admin-audit': 'Log Audit', 'admin-reports': 'Laporan Menyeluruh'
};

function setRole(role) {
  state.role = role;
  localStorage.setItem('bwi-role', role);
  const firstRoute = roleConfig[role].nav.find(item => item.length > 1)?.[0] || 'dashboard';
  state.route = firstRoute;
  localStorage.setItem('bwi-route', firstRoute);
  roleSwitcher.value = role;
  updateIdentity();
  renderNav();
  renderRoute();
  showToast('Paparan ditukar', `Portal kini memaparkan modul untuk ${roleConfig[role].role}.`);
}

function updateIdentity() {
  const cfg = roleConfig[state.role];
  document.getElementById('user-name').textContent = cfg.name;
  document.getElementById('user-role').textContent = cfg.role;
  document.getElementById('avatar').textContent = cfg.initials;
}

function renderNav() {
  const nav = roleConfig[state.role].nav;
  navList.innerHTML = nav.map(item => {
    if (item.length === 1) return `<div class="nav-section-label">${item[0]}</div>`;
    const [route, label, iconName, count] = item;
    return `<button class="nav-item ${state.route === route ? 'active' : ''}" data-route="${route}" type="button">
      <span class="icon" aria-hidden="true">${icon(iconName)}</span>
      <span>${label}</span>
      ${count ? `<span class="nav-count">${count}</span>` : ''}
    </button>`;
  }).join('');

  navList.querySelectorAll('[data-route]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.route = btn.dataset.route;
      localStorage.setItem('bwi-route', state.route);
      renderNav();
      renderRoute();
      sidebar.classList.remove('open');
    });
  });
}

function updateHeader(title) {
  pageTitle.textContent = title;
  breadcrumb.textContent = `${roleConfig[state.role].role} / Portal BWI`;
  document.title = `${title} | Portal BWI`;
}

function renderRoute() {
  const roleRoutes = roleConfig[state.role].nav.filter(i => i.length > 1).map(i => i[0]);
  if (!roleRoutes.includes(state.route)) {
    state.route = roleRoutes[0];
  }
  updateHeader(titles[state.route] || 'Portal BWI');
  const routes = {
    dashboard: renderApplicantDashboard,
    application: renderApplication,
    status: renderStatus,
    document: renderDocuments,
    profile: renderProfile,
    'jkm-dashboard': () => renderAgencyDashboard('JKM'),
    'jkm-queue': () => renderCaseQueue('JKM'),
    'jkm-areas': () => renderDisasterAreas('JKM'),
    'jkm-pps': renderPPS,
    'jkm-documents': renderJKMDocuments,
    'jkm-reports': () => renderReports('Daerah Klang'),
    'nadma-dashboard': () => renderAgencyDashboard('NADMA'),
    'nadma-review': () => renderCaseQueue('NADMA'),
    'nadma-query': renderQueryManagement,
    'nadma-zones': () => renderDisasterAreas('NADMA'),
    'nadma-approved': renderApproved,
    'nadma-reports': () => renderReports('Nasional'),
    'bsn-dashboard': () => renderAgencyDashboard('BSN'),
    'bsn-batches': renderPaymentBatches,
    'bsn-eft': renderEFT,
    'bsn-trace': renderBsnTrace,
    'bsn-cash': renderCashPayments,
    'bsn-reconcile': renderReconcile,
    'admin-dashboard': renderAdminDashboard,
    'admin-users': renderUsers,
    'admin-workflow': renderWorkflow,
    'admin-audit': renderAudit,
    'admin-reports': () => renderReports('Menyeluruh')
  };
  main.innerHTML = '';
  (routes[state.route] || renderApplicantDashboard)();
  bindCommonActions();
}

function pageHeader(kicker, title, text, actions = '') {
  return `<div class="page-header">
    <div><p class="eyebrow">${kicker}</p><h2>${title}</h2><p>${text}</p></div>
    ${actions ? `<div class="header-actions">${actions}</div>` : ''}
  </div>`;
}

function metricCard(label, value, foot, iconName, color = 'var(--color-primary)', soft = 'var(--color-primary-soft)', change = '') {
  return `<article class="card metric-card" style="--metric-color:${color};--metric-soft:${soft}">
    <div class="metric-top"><span class="metric-icon" aria-hidden="true">${icon(iconName)}</span>${change ? `<span class="metric-change">${change}</span>` : ''}</div>
    <p class="metric-label">${label}</p><p class="metric-value">${value}</p><p class="metric-foot">${foot}</p>
  </article>`;
}

function renderApplicantDashboard() {
  main.innerHTML = `<section class="page">
    ${pageHeader('Selamat datang', 'Ahmad Salleh', 'Pantau perkembangan permohonan BWI anda dari pendaftaran sehingga bayaran diterima.', '<button class="primary-button" data-go="application">Lihat permohonan</button>')}

    <div class="action-banner" role="status">
      <div><h3>Permohonan sedang disemak oleh NADMA</h3><p>Tiada tindakan diperlukan buat masa ini. Anggaran semakan dalaman: 2–4 hari bekerja.</p></div>
      <span class="status-chip info">Dalam semakan</span>
    </div>

    <div class="grid cols-4" style="margin-top:18px">
      ${metricCard('No. permohonan', '001284', 'BWI-2026-001284', 'application')}
      ${metricCard('Kemajuan', '60%', '3 daripada 5 peringkat selesai', 'status', 'var(--color-secondary)', '#e8f7f3')}
      ${metricCard('Jumlah bantuan', 'RM1,000', 'Tertakluk kelulusan akhir', 'payment', 'var(--color-success)', 'var(--color-success-soft)')}
      ${metricCard('Kemas kini terakhir', '26 Jul', '10:42 pagi', 'clock', 'var(--color-accent)', 'var(--color-warning-soft)')}
    </div>

    <div class="grid main-side" style="margin-top:18px">
      <article class="card">
        <div class="card-header"><div><h3>Jejak permohonan</h3><p>Status semasa merentas agensi.</p></div><button class="link-button" data-go="status">Lihat penuh</button></div>
        <div class="card-body">
          <ol class="timeline">
            <li class="timeline-item done"><div class="timeline-marker">${icon('check')}</div><div class="timeline-copy"><h4>Pendaftaran diterima</h4><p>Maklumat permohonan dan profil KIR telah dihantar.</p><time>24 Jul 2026, 9:15 pagi</time></div></li>
            <li class="timeline-item done"><div class="timeline-marker">${icon('check')}</div><div class="timeline-copy"><h4>Disahkan oleh JKM</h4><p>Identiti, PPS dan dokumen sokongan telah disahkan.</p><time>25 Jul 2026, 3:20 petang</time></div></li>
            <li class="timeline-item current"><div class="timeline-marker">${icon('clock')}</div><div class="timeline-copy"><h4>Semakan kelayakan NADMA</h4><p>Semakan rekod berganda, alamat dan kelayakan isi rumah.</p><time>Sedang diproses</time></div></li>
            <li class="timeline-item"><div class="timeline-marker">4</div><div class="timeline-copy"><h4>Pemprosesan bayaran BSN</h4><p>Dimulakan selepas kelulusan NADMA.</p></div></li>
            <li class="timeline-item"><div class="timeline-marker">5</div><div class="timeline-copy"><h4>Bayaran diterima</h4><p>Notifikasi akan dihantar melalui SMS dan portal.</p></div></li>
          </ol>
        </div>
      </article>

      <div class="grid">
        <article class="card pad progress-block">
          <p class="eyebrow">Kelengkapan profil</p><h3>Semua maklumat lengkap</h3><p>Maklumat hubungan, kediaman dan akaun bank telah disahkan.</p>
          <div class="progress-row"><div class="progress-track"><div class="progress-fill" style="width:100%"></div></div><span class="progress-label">100%</span></div>
        </article>
        <article class="card">
          <div class="card-header"><div><h3>Tindakan pantas</h3><p>Akses fungsi utama permohonan.</p></div></div>
          <div class="card-body grid">
            <button class="secondary-button full" data-go="document">${icon('document')} Semak dokumen</button>
            <button class="secondary-button full" data-go="profile">${icon('bank')} Kemas kini akaun bank</button>
            <button class="secondary-button full" id="download-receipt">${icon('download')} Muat turun akuan penerimaan</button>
          </div>
        </article>
      </div>
    </div>

    <article class="card" style="margin-top:18px">
      <div class="card-header"><div><h3>Aktiviti terkini</h3><p>Sejarah tindakan pada permohonan anda.</p></div></div>
      <div class="card-body"><div class="activity-list">
        <div class="activity-item"><span class="activity-icon">${icon('verify')}</span><div class="activity-copy"><strong>Permohonan dihantar kepada NADMA</strong><p>JKM Daerah Klang telah melengkapkan pengesahan.</p></div><time>26 Jul</time></div>
        <div class="activity-item"><span class="activity-icon">${icon('document')}</span><div class="activity-copy"><strong>Bil utiliti disahkan</strong><p>Alamat kediaman sepadan dengan rekod permohonan.</p></div><time>25 Jul</time></div>
        <div class="activity-item"><span class="activity-icon">${icon('application')}</span><div class="activity-copy"><strong>Permohonan berjaya dihantar</strong><p>Nombor rujukan BWI-2026-001284 dijana.</p></div><time>24 Jul</time></div>
      </div></div>
    </article>
  </section>`;
}

function renderApplication() {
  main.innerHTML = `<section class="page">
    ${pageHeader('Permohonan BWI', 'Maklumat permohonan', 'Lengkapkan maklumat wajib dan semak semula sebelum dihantar.', '<span class="status-chip success">Telah dihantar</span>')}
    <div class="card stepper" aria-label="Kemajuan borang">
      ${['Maklumat KIR','Isi rumah','Kediaman','Bank & dokumen','Pengesahan'].map((s,i)=>`<div class="step ${i < 4 ? 'done' : 'active'}"><span class="step-circle">${i < 4 ? icon('check') : i+1}</span><span class="step-copy"><strong>${s}</strong><span>${i < 4 ? 'Lengkap' : 'Semakan akhir'}</span></span></div>`).join('')}
    </div>
    <div class="grid main-side" style="margin-top:18px">
      <article class="card form-card">
        <div class="form-section">
          <h3>Maklumat Ketua Isi Rumah</h3><p>Maklumat asas pemohon utama.</p>
          <div class="form-grid">
            <div class="form-field"><label for="app-name">Nama penuh</label><input id="app-name" value="Ahmad bin Salleh" disabled /></div>
            <div class="form-field"><label for="app-ic">No. MyKad</label><input id="app-ic" value="850412-10-4481" disabled /></div>
            <div class="form-field"><label for="app-phone">No. telefon</label><input id="app-phone" value="012-345 6789" /></div>
            <div class="form-field"><label for="app-email">E-mel</label><input id="app-email" value="ahmad.salleh@example.my" /></div>
          </div>
        </div>
        <div class="form-section">
          <h3>Maklumat kediaman terjejas</h3><p>Alamat hendaklah sepadan dengan dokumen sokongan.</p>
          <div class="form-grid">
            <div class="form-field" style="grid-column:1/-1"><label for="app-address">Alamat penuh</label><textarea id="app-address">No. 28, Jalan Murni 3, Taman Sri Murni, 41050 Klang, Selangor</textarea></div>
            <div class="form-field"><label for="app-disaster">Jenis bencana</label><select id="app-disaster"><option>Banjir</option><option>Ribut</option><option>Tanah runtuh</option></select></div>
            <div class="form-field"><label for="app-pps">Pusat Pemindahan Sementara</label><input id="app-pps" value="SK Taman Sri Murni" /></div>
            <div class="form-field"><label for="app-date">Tarikh kejadian</label><input id="app-date" type="date" value="2026-07-23" /></div>
            <div class="form-field"><label for="app-household">Bilangan ahli isi rumah</label><input id="app-household" type="number" value="5" min="1" /></div>
          </div>
        </div>
        <div class="form-section">
          <h3>Kaedah pembayaran</h3><p>Maklumat akaun bagi pembayaran EFT jika diluluskan.</p>
          <div class="form-grid">
            <div class="form-field"><label for="app-bank">Bank</label><select id="app-bank"><option>Bank Simpanan Nasional</option><option>Maybank</option><option>CIMB Bank</option></select></div>
            <div class="form-field"><label for="app-account">No. akaun</label><input id="app-account" value="1419288421" inputmode="numeric" /></div>
            <div class="form-field" style="grid-column:1/-1"><label for="app-account-name">Nama pemegang akaun</label><input id="app-account-name" value="AHMAD BIN SALLEH" /></div>
          </div>
        </div>
        <div class="form-section">
          <label style="display:flex;gap:10px;align-items:flex-start"><input type="checkbox" checked style="width:20px;height:20px;margin-top:2px" /> <span>Saya mengesahkan bahawa semua maklumat yang diberikan adalah benar dan membenarkan semakan silang oleh agensi berkaitan.</span></label>
        </div>
        <div class="form-actions"><button class="secondary-button" id="save-form">Simpan perubahan</button><button class="primary-button" data-go="status">Lihat status</button></div>
      </article>
      <aside class="grid">
        <article class="card pad"><p class="eyebrow">Ringkasan</p><dl class="detail-list">
          <div class="detail-row"><dt>No. permohonan</dt><dd>BWI-2026-001284</dd></div>
          <div class="detail-row"><dt>Tarikh dihantar</dt><dd>24 Jul 2026</dd></div>
          <div class="detail-row"><dt>Lokasi PPS</dt><dd>SK Taman Sri Murni</dd></div>
          <div class="detail-row"><dt>Status</dt><dd><span class="status-chip info">Semakan NADMA</span></dd></div>
        </dl></article>
        <article class="card pad"><h3 style="margin-top:0">Maklumat penting</h3><p style="color:var(--color-text-muted);font-size:.82rem">Perubahan pada alamat, ahli isi rumah atau akaun bank selepas pengesahan mungkin memerlukan semakan semula.</p></article>
      </aside>
    </div>
  </section>`;
}

function renderStatus() {
  const approved = state.applicationStatus === 'approved';
  const paid = state.bsnStep >= bsnPaymentSteps.length;
  const activeBsnStep = state.bsnStep > 0 && !paid ? bsnPaymentSteps[state.bsnStep - 1] : null;
  const progress = !approved ? 60 : paid ? 100 : state.bsnStep === 0 ? 72 : Math.min(98, 72 + Math.round((state.bsnStep / bsnPaymentSteps.length) * 26));
  const headline = !approved
    ? 'Dalam semakan NADMA'
    : paid
      ? 'Bayaran berjaya dikreditkan'
      : state.bsnStep === 0
        ? 'Permohonan diluluskan NADMA'
        : activeBsnStep.title;
  const summary = !approved
    ? 'Semakan kelayakan dan ketekalan maklumat sedang dijalankan.'
    : paid
      ? 'BSN telah menyelesaikan transaksi, rekonsiliasi dan penghantaran notifikasi pembayaran.'
      : state.bsnStep === 0
        ? 'Arahan bayaran sedang disediakan untuk dihantar kepada BSN.'
        : activeBsnStep.description;
  const overallClass = paid ? 'success' : 'info';
  const overallLabel = paid ? 'Selesai' : approved ? 'Dalam proses bayaran' : 'Sedang diproses';

  const bsnTrace = bsnPaymentSteps.map((step, index) => {
    const number = index + 1;
    const finalComplete = state.bsnStep >= bsnPaymentSteps.length;
    const done = finalComplete || number < state.bsnStep;
    const current = !finalComplete && number === state.bsnStep;
    const statusClass = done ? 'done' : current ? 'current' : 'pending';
    const statusLabel = done ? 'Selesai' : current ? 'Sedang diproses' : 'Belum dimulakan';
    const statusChip = done ? 'success' : current ? 'info' : 'neutral';
    const shownTime = done ? step.time : current ? 'Sedang diproses' : 'Belum dimulakan';
    return `<li class="bsn-stage-item ${statusClass}">
      <div class="bsn-stage-number">${done ? icon('check') : number}</div>
      <div class="bsn-stage-copy">
        <div class="bsn-stage-title-row"><h4>${step.title}</h4><span class="status-chip ${statusChip}">${statusLabel}</span></div>
        <p>${step.description}</p>
        <div class="bsn-stage-meta"><span>${icon('clock')} ${shownTime}</span><span>Kod: <strong>${current || done ? step.code : '—'}</strong></span><span>Rujukan: <strong>${current || done ? step.reference : '—'}</strong></span></div>
      </div>
    </li>`;
  }).join('');

  const nextAction = !approved
    ? `<button class="success-button full" id="simulate-approval">${icon('check')} Simulasi kelulusan NADMA</button>`
    : state.bsnStep < bsnPaymentSteps.length
      ? `<button class="primary-button full" id="advance-bsn-stage">${icon('refresh')} ${state.bsnStep === 0 ? 'Hantar arahan ke BSN' : 'Langkah BSN seterusnya'}</button>`
      : `<button class="success-button full" id="download-payment-receipt">${icon('download')} Muat turun resit bayaran</button>`;

  main.innerHTML = `<section class="page">
    ${pageHeader('Status hujung-ke-hujung', 'Jejak permohonan BWI', 'Paparan masa nyata bagi setiap peringkat pemprosesan JKM, NADMA dan jejak transaksi terperinci BSN.', '<button class="secondary-button" id="refresh-status">'+icon('refresh')+' Segar semula</button>')}
    <article class="card pad progress-block">
      <div style="display:flex;justify-content:space-between;gap:16px;align-items:flex-start;flex-wrap:wrap"><div><p class="eyebrow">Status semasa</p><h3>${headline}</h3><p>${summary}</p></div><span class="status-chip ${overallClass}">${overallLabel}</span></div>
      <div class="progress-row"><div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div><span class="progress-label">${progress}%</span></div>
    </article>

    <div class="grid main-side" style="margin-top:18px">
      <article class="card">
        <div class="card-header"><div><h3>Garis masa antara agensi</h3><p>No. rujukan BWI-2026-001284</p></div></div>
        <div class="card-body"><ol class="timeline">
          <li class="timeline-item done"><div class="timeline-marker">${icon('check')}</div><div class="timeline-copy"><h4>Permohonan diterima</h4><p>Permohonan berjaya dihantar melalui MyIBJKM.</p><time>24 Jul 2026, 9:15 pagi</time></div></li>
          <li class="timeline-item done"><div class="timeline-marker">${icon('check')}</div><div class="timeline-copy"><h4>Semakan JKM selesai</h4><p>Rekod PPS, identiti dan dokumen telah disahkan.</p><time>25 Jul 2026, 3:20 petang</time></div></li>
          <li class="timeline-item ${approved ? 'done' : 'current'}"><div class="timeline-marker">${approved ? icon('check') : icon('clock')}</div><div class="timeline-copy"><h4>Semakan kelayakan NADMA</h4><p>Semakan pertindihan isi rumah, alamat dan syarat bantuan.</p><time>${approved ? '27 Jul 2026, 2:10 petang' : 'Sedang diproses'}</time></div></li>
          <li class="timeline-item ${paid ? 'done' : state.bsnStep > 0 ? 'current' : ''}"><div class="timeline-marker">${paid ? icon('check') : '4'}</div><div class="timeline-copy"><h4>Pemprosesan bayaran BSN</h4><p>Validasi kelompok, akaun, EFT, keputusan transaksi dan rekonsiliasi.</p><time>${paid ? '28 Jul 2026, 11:53 pagi' : state.bsnStep > 0 ? `Langkah ${state.bsnStep} daripada ${bsnPaymentSteps.length}` : approved ? 'Menunggu penghantaran kelompok' : 'Belum dimulakan'}</time></div></li>
          <li class="timeline-item ${paid ? 'done' : ''}"><div class="timeline-marker">${paid ? icon('check') : '5'}</div><div class="timeline-copy"><h4>Bayaran diterima</h4><p>Resit dan notifikasi pembayaran tersedia kepada pemohon.</p><time>${paid ? '28 Jul 2026, 11:53 pagi' : 'Belum dimulakan'}</time></div></li>
        </ol></div>
      </article>
      <div class="grid">
        <article class="card pad"><p class="eyebrow">Maklumat bayaran</p><dl class="detail-list">
          <div class="detail-row"><dt>Jumlah</dt><dd>RM1,000</dd></div>
          <div class="detail-row"><dt>Kaedah</dt><dd>EFT</dd></div>
          <div class="detail-row"><dt>Bank</dt><dd>BSN •••• 8421</dd></div>
          <div class="detail-row"><dt>ID kelompok</dt><dd>${state.bsnStep > 0 ? 'BATCH-280726-01' : 'Belum dijana'}</dd></div>
          <div class="detail-row"><dt>Rujukan transaksi</dt><dd>${state.bsnStep >= 4 ? 'EFT-20260728-0194' : 'Belum dijana'}</dd></div>
          <div class="detail-row"><dt>Status bayaran</dt><dd><span class="status-chip ${paid ? 'success' : state.bsnStep > 0 ? 'info' : 'neutral'}">${paid ? 'Berjaya' : state.bsnStep > 0 ? 'Diproses BSN' : 'Belum diproses'}</span></dd></div>
        </dl></article>
        <article class="card pad"><h3 style="margin-top:0">Simulasi proses</h3><p style="color:var(--color-text-muted);font-size:.82rem">Gerakkan permohonan melalui setiap langkah BSN untuk menguji paparan status.</p>${nextAction}<button class="ghost-button full" id="reset-process" style="margin-top:9px">Tetapkan semula simulasi</button></article>
      </div>
    </div>

    <article class="card bsn-trace-card" style="margin-top:18px">
      <div class="card-header"><div><p class="eyebrow">Peringkat BSN</p><h3>Jejak transaksi pembayaran</h3><p>Setiap perubahan direkodkan dengan masa, kod respons dan rujukan transaksi.</p></div><span class="tag">SLA sasaran: 3 hari bekerja</span></div>
      <div class="card-body">
        <div class="trace-reference-grid">
          <div class="reference-tile"><span>Rujukan NADMA</span><strong>NADMA-PAY-20260728-004</strong></div>
          <div class="reference-tile"><span>ID kelompok BSN</span><strong>${state.bsnStep > 0 ? 'BATCH-280726-01' : 'Belum dijana'}</strong></div>
          <div class="reference-tile"><span>Saluran</span><strong>EFT terus ke akaun</strong></div>
          <div class="reference-tile"><span>Tempoh semasa</span><strong>${paid ? '1 jam 51 minit' : state.bsnStep > 0 ? 'Dalam SLA' : 'Belum bermula'}</strong></div>
        </div>
        <ol class="bsn-stage-list">${bsnTrace}</ol>
      </div>
    </article>
  </section>`;
}

function renderDocuments() {
  const docs = [
    ['Salinan_MyKad_Ahmad.pdf','PDF • 1.2 MB','Disahkan'],
    ['Bil_Air_Julai_2026.pdf','PDF • 860 KB','Disahkan'],
    ['Gambar_Rumah_01.jpg','JPG • 2.4 MB','Disahkan'],
    ['Laporan_Polis.pdf','PDF • 1.6 MB','Dalam semakan']
  ];
  main.innerHTML = `<section class="page">
    ${pageHeader('Dokumen sokongan', 'Dokumen permohonan', 'Muat naik dan pantau pengesahan dokumen yang menyokong permohonan.', '<button class="primary-button" id="upload-button">'+icon('upload')+' Muat naik dokumen</button>')}
    <div class="grid main-side">
      <article class="card form-card">
        <div class="upload-zone" id="upload-zone" tabindex="0" role="button" aria-label="Muat naik dokumen">
          <div>${icon('upload')}<strong>Seret fail ke sini atau pilih fail</strong><p>PDF, JPG atau PNG. Saiz maksimum 10 MB setiap fail.</p></div>
        </div>
        <input id="file-input" type="file" hidden multiple accept=".pdf,.jpg,.jpeg,.png" />
        <div class="document-list" id="document-list">
          ${docs.map((d,i)=>`<div class="document-item"><span class="document-icon">${icon('document')}</span><div class="document-copy"><strong>${d[0]}</strong><span>${d[1]}</span></div><span class="status-chip ${d[2]==='Disahkan'?'success':'info'}">${d[2]}</span><button class="icon-button delete-doc" aria-label="Padam ${d[0]}" data-index="${i}" type="button"><svg viewBox="0 0 24 24"><path d="M7 5V3h10v2h4v2h-2v14H5V7H3V5h4Zm2 0h6V5H9Zm-2 2v12h10V7H7Zm2 2h2v8H9V9Zm4 0h2v8h-2V9Z"/></svg></button></div>`).join('')}
        </div>
      </article>
      <aside class="grid">
        <article class="card pad"><p class="eyebrow">Keperluan dokumen</p><div class="activity-list">
          <div class="activity-item"><span class="activity-icon">${icon('check')}</span><div class="activity-copy"><strong>MyKad KIR</strong><p>Wajib dan telah diterima.</p></div></div>
          <div class="activity-item"><span class="activity-icon">${icon('check')}</span><div class="activity-copy"><strong>Bil utiliti</strong><p>Alamat telah sepadan.</p></div></div>
          <div class="activity-item"><span class="activity-icon">${icon('clock')}</span><div class="activity-copy"><strong>Laporan polis</strong><p>Semakan pegawai sedang berjalan.</p></div></div>
        </div></article>
        <article class="card pad"><h3 style="margin-top:0">Tip dokumen</h3><p style="color:var(--color-text-muted);font-size:.82rem">Pastikan gambar jelas, tidak terpotong dan maklumat alamat boleh dibaca.</p></article>
      </aside>
    </div>
  </section>`;
}

function renderProfile() {
  main.innerHTML = `<section class="page">
    ${pageHeader('Profil pemohon', 'Maklumat peribadi & pembayaran', 'Urus maklumat hubungan, alamat dan akaun bank penerima.', '<button class="primary-button" id="save-profile">Simpan perubahan</button>')}
    <div class="grid main-side">
      <article class="card form-card">
        <div class="form-section"><h3>Maklumat peribadi</h3><p>Maklumat identiti diperoleh daripada rekod pengesahan.</p><div class="form-grid">
          <div class="form-field"><label>Nama penuh</label><input value="Ahmad bin Salleh" disabled /></div>
          <div class="form-field"><label>No. MyKad</label><input value="850412-10-4481" disabled /></div>
          <div class="form-field"><label>No. telefon</label><input value="012-345 6789" /></div>
          <div class="form-field"><label>E-mel</label><input value="ahmad.salleh@example.my" /></div>
        </div></div>
        <div class="form-section"><h3>Akaun bank</h3><p>Akaun hendaklah aktif dan atas nama pemohon.</p><div class="form-grid">
          <div class="form-field"><label>Bank</label><select><option>Bank Simpanan Nasional</option><option>Maybank</option><option>CIMB Bank</option></select></div>
          <div class="form-field"><label>No. akaun</label><input value="1419288421" /></div>
          <div class="form-field" style="grid-column:1/-1"><label>Nama pemegang akaun</label><input value="AHMAD BIN SALLEH" /></div>
        </div></div>
        <div class="form-section"><h3>Alamat surat-menyurat</h3><p>Digunakan untuk sebarang komunikasi rasmi.</p><div class="form-field"><label>Alamat penuh</label><textarea>No. 28, Jalan Murni 3, Taman Sri Murni, 41050 Klang, Selangor</textarea></div></div>
      </article>
      <aside class="grid">
        <article class="card pad"><p class="eyebrow">Status pengesahan</p><div class="activity-list">
          <div class="activity-item"><span class="activity-icon">${icon('check')}</span><div class="activity-copy"><strong>Identiti</strong><p>Disahkan melalui MyKad.</p></div></div>
          <div class="activity-item"><span class="activity-icon">${icon('check')}</span><div class="activity-copy"><strong>No. telefon</strong><p>OTP berjaya disahkan.</p></div></div>
          <div class="activity-item"><span class="activity-icon">${icon('check')}</span><div class="activity-copy"><strong>Akaun bank</strong><p>Nama pemegang sepadan.</p></div></div>
        </div></article>
        <article class="card pad"><h3 style="margin-top:0">Keselamatan akaun</h3><p style="color:var(--color-text-muted);font-size:.82rem">Log masuk terakhir: 28 Jul 2026, 9:32 pagi melalui Kuala Lumpur.</p><button class="secondary-button full">Urus kata laluan</button></article>
      </aside>
    </div>
  </section>`;
}

function disasterSummaryCards() {
  const totals = disasterAreas.reduce((acc, item) => {
    acc.pps += item.pps; acc.families += item.families; acc.people += item.people; acc.applications += item.applications;
    return acc;
  }, { pps:0, families:0, people:0, applications:0 });
  return `<div class="grid cols-4">
    ${metricCard('Kawasan aktif', disasterAreas.length, '6 negeri terjejas', 'home')}
    ${metricCard('PPS beroperasi', totals.pps, `${totals.families.toLocaleString('en-US')} keluarga`, 'users', 'var(--color-secondary)', 'var(--color-secondary-soft)')}
    ${metricCard('Mangsa di PPS', totals.people.toLocaleString('en-US'), 'Data daftar masuk semasa', 'application', 'var(--color-warning)', 'var(--color-warning-soft)')}
    ${metricCard('Permohonan BWI', totals.applications.toLocaleString('en-US'), 'Daripada kawasan aktif', 'check', 'var(--color-success)', 'var(--color-success-soft)')}
  </div>`;
}

function regionalBreakdownCard(title = 'Pecahan mengikut kawasan bencana') {
  const maxPeople = Math.max(...disasterAreas.map(item => item.people));
  return `<article class="card region-card">
    <div class="card-header"><div><h3>${title}</h3><p>Jumlah mangsa berdaftar mengikut negeri dan daerah.</p></div><span class="tag">Kemas kini langsung</span></div>
    <div class="card-body region-list">
      ${disasterAreas.map(item => `<button class="region-row" type="button" data-area-filter="${item.state}">
        <span class="region-place"><strong>${item.state}</strong><small>${item.district} · ${item.area}</small></span>
        <span class="region-bar-wrap"><span class="region-track"><span class="region-fill" style="width:${Math.round(item.people/maxPeople*100)}%"></span></span><small>${item.people.toLocaleString('en-US')} mangsa</small></span>
        <span class="region-meta"><strong>${item.pps}</strong><small>PPS</small></span>
      </button>`).join('')}
    </div>
  </article>`;
}

function ppsAttentionCard(agency = 'JKM') {
  const priority = [...ppsDirectory].sort((a,b)=>b.occupancy-a.occupancy).slice(0,4);
  return `<article class="card">
    <div class="card-header"><div><h3>PPS perlu perhatian</h3><p>Keutamaan berdasarkan kadar kapasiti.</p></div><button class="link-button" data-go="${agency === 'JKM' ? 'jkm-pps' : 'nadma-zones'}">${agency === 'JKM' ? 'Lihat direktori' : 'Lihat kawasan'}</button></div>
    <div class="card-body activity-list">
      ${priority.map(item => `<div class="activity-item pps-attention-item">
        <span class="activity-icon">${icon(item.occupancy >= 80 ? 'alert' : 'home')}</span>
        <div class="activity-copy"><strong>${item.name}</strong><p>${item.district}, ${item.state} · ${item.people.toLocaleString('en-US')} mangsa</p><div class="occupancy-meter" aria-label="Kapasiti ${item.occupancy}%"><span style="width:${item.occupancy}%"></span></div></div>
        <span class="occupancy-value">${item.occupancy}%</span>
      </div>`).join('')}
    </div>
  </article>`;
}

function renderAgencyDashboard(agency) {
  const data = agency === 'JKM' ? {
    title:'Operasi semakan dan PPS', text:'Pantau kawasan bencana, pendaftaran PPS, pengesahan identiti dan dokumen sebelum dihantar kepada NADMA.',
    metrics:[['Permohonan baharu','148','Hari ini','application'],['Menunggu semakan','18','Keutamaan operasi','clock'],['Disahkan','126','85% hari ini','check'],['Dikuiri','7','Perlu tindakan','query']]
  } : agency === 'NADMA' ? {
    title:'Operasi kelayakan nasional', text:'Pantau impak kawasan bencana, kelayakan isi rumah, rekod bertindih dan arahan bayaran.',
    metrics:[['Diterima hari ini','2,846','Daripada JKM','application'],['Dalam semakan','426','SLA aktif','clock'],['Dikuiri','111','3.9% kadar kuiri','query'],['Diluluskan','2,309','RM2.31 juta','check']]
  } : {
    title:'Operasi pembayaran BWI', text:'Urus kelompok bayaran, pengesahan EFT, kutipan tunai dan rekonsiliasi transaksi mengikut kawasan bencana.',
    metrics:[['Arahan diterima','2,309','RM2.31 juta','application'],['EFT berjaya','2,144','92.9%','payment'],['EFT gagal','34','Perlu tukar kaedah','alert'],['Kutipan tunai','131','Belum dituntut','bank']]
  };
  const geoSection = agency === 'BSN' ? regionalPaymentCard() : `${regionalBreakdownCard()}${ppsAttentionCard(agency)}`;
  main.innerHTML = `<section class="page">
    ${pageHeader(`Papan pemuka ${agency}`, data.title, data.text, '<button class="secondary-button" id="export-report">'+icon('download')+' Eksport laporan</button>')}
    <div class="agency-ribbon"><span class="agency-ribbon-icon" aria-hidden="true">${icon('refresh')}</span><div><strong>Penyelarasan operasi BWI</strong><span>Data kawasan bencana, PPS, permohonan dan bayaran diselaraskan merentas JKM, NADMA dan BSN.</span></div><span class="status-chip success">Data disegerakkan</span></div>
    <div class="grid cols-4">${data.metrics.map((m,i)=>metricCard(m[0],m[1],m[2],m[3],i===2?'var(--color-warning)':i===3?'var(--color-success)':'var(--color-primary)',i===2?'var(--color-warning-soft)':i===3?'var(--color-success-soft)':'var(--color-primary-soft)',i===1?'+12%':'')).join('')}</div>
    <div class="grid main-side" style="margin-top:18px">${geoSection}</div>
    <article class="card" style="margin-top:18px"><div class="card-header"><div><h3>Permohonan terkini</h3><p>Kes yang memerlukan perhatian pegawai.</p></div><button class="link-button" data-go="${agency==='JKM'?'jkm-queue':agency==='NADMA'?'nadma-review':'bsn-batches'}">Lihat semua</button></div><div class="card-body">${caseTable(sampleCases.slice(0,5), agency)}</div></article>
  </section>`;
}

function regionalPaymentCard() {
  return `${regionalBreakdownCard('Pembayaran mengikut kawasan bencana')}<article class="card"><div class="card-header"><div><h3>Prestasi bayaran kawasan</h3><p>Kadar EFT berjaya bagi kelompok aktif.</p></div></div><div class="card-body activity-list">${disasterAreas.slice(0,4).map((item,index)=>{const rate=[94,91,89,96][index];return `<div class="activity-item"><span class="activity-icon">${icon('payment')}</span><div class="activity-copy"><strong>${item.district}, ${item.state}</strong><p>${item.approved.toLocaleString('en-US')} arahan bayaran</p><div class="occupancy-meter payment-meter"><span style="width:${rate}%"></span></div></div><strong>${rate}%</strong></div>`}).join('')}</div></article>`;
}

function caseTable(cases, agency='') {
  return `<div class="data-table-wrap"><table class="data-table"><thead><tr><th>No. permohonan</th><th>Pemohon</th><th>Daerah / negeri</th><th>Tarikh</th><th>Status</th><th>Jumlah</th><th>Tindakan</th></tr></thead><tbody>
    ${cases.map(c=>`<tr><td><button class="link-button case-id open-case" data-case="${c.id}">${c.id}</button></td><td class="person-cell"><strong>${c.name}</strong><span>${c.ic}</span></td><td>${c.district}<br><span style="color:var(--color-text-muted);font-size:.72rem">${c.state}</span></td><td>${c.date}</td><td><span class="status-chip ${c.statusClass}">${c.status}</span></td><td class="numeric">${c.amount}</td><td><button class="secondary-button open-case" data-case="${c.id}" style="min-height:38px;padding:7px 11px">Semak</button></td></tr>`).join('')}
  </tbody></table></div>`;
}

function renderCaseQueue(agency) {
  main.innerHTML = `<section class="page">
    ${pageHeader(`Operasi ${agency}`, agency === 'JKM' ? 'Barisan semakan permohonan' : 'Semakan kelayakan BWI', agency === 'JKM' ? 'Sahkan pendaftaran mangsa, dokumen dan maklumat isi rumah.' : 'Tentukan kelayakan, keluarkan kuiri atau luluskan permohonan.', '<button class="secondary-button" id="bulk-action">Tindakan pukal</button>')}
    <div class="queue-summary"><div class="queue-pill"><span>Semua kes</span><strong>148</strong></div><div class="queue-pill"><span>Keutamaan tinggi</span><strong>12</strong></div><div class="queue-pill"><span>Hampir SLA</span><strong>8</strong></div><div class="queue-pill"><span>Selesai hari ini</span><strong>126</strong></div></div>
    <article class="card pad">
      <div class="toolbar"><div class="toolbar-group"><div class="search-field">${icon('search')}<input id="case-search" placeholder="Cari nama, MyKad atau no. permohonan" /></div><select class="filter-select" id="status-filter"><option value="">Semua status</option><option>Dalam semakan NADMA</option><option>Dokumen tidak lengkap</option><option>Disahkan JKM</option><option>Permohonan dikuiri</option></select></div><button class="secondary-button" id="reset-filter">Tetap semula</button></div>
      <div id="case-table-container">${caseTable(sampleCases, agency)}</div>
    </article>
  </section>`;
}

function renderDisasterAreas(agency) {
  const scopeText = agency === 'JKM' ? 'Fokus operasi daerah, mukim, PPS dan pendaftaran mangsa.' : 'Gambaran nasional kawasan bencana, impak penduduk dan kemajuan BWI.';
  main.innerHTML = `<section class="page">
    ${pageHeader('Operasi lapangan', agency === 'JKM' ? 'Kawasan bencana daerah' : 'Kawasan bencana nasional', scopeText, '<button class="secondary-button" id="export-areas">'+icon('download')+' Eksport data</button>')}
    ${disasterSummaryCards()}
    <article class="card pad" style="margin-top:18px">
      <div class="toolbar geo-toolbar">
        <div class="toolbar-group">
          <div class="search-field">${icon('search')}<input id="area-search" placeholder="Cari negeri, daerah atau kawasan" /></div>
          <select class="filter-select" id="area-state"><option value="">Semua negeri</option>${[...new Set(disasterAreas.map(x=>x.state))].map(x=>`<option>${x}</option>`).join('')}</select>
          <select class="filter-select" id="area-disaster"><option value="">Semua bencana</option>${[...new Set(disasterAreas.map(x=>x.disaster))].map(x=>`<option>${x}</option>`).join('')}</select>
        </div>
        <button class="secondary-button" id="reset-area-filter">Tetap semula</button>
      </div>
      <div id="area-grid" class="geo-grid">${disasterAreaCards(disasterAreas)}</div>
    </article>
  </section>`;
}

function disasterAreaCards(items) {
  if (!items.length) return `<div class="empty-state geo-empty"><span class="empty-state-icon">${icon('search')}</span><h3>Tiada kawasan ditemui</h3><p>Ubah kata kunci atau penapis untuk melihat kawasan lain.</p></div>`;
  return items.map(item => `<article class="geo-card">
    <div class="geo-card-head"><div><span class="location-code">${item.id}</span><h3>${item.district}, ${item.state}</h3><p>${item.area}</p></div><span class="status-chip ${item.severityClass}">${item.severity}</span></div>
    <div class="disaster-type">${icon('alert')}<span>${item.disaster}</span></div>
    <div class="geo-stats"><div><strong>${item.pps}</strong><span>PPS aktif</span></div><div><strong>${item.families.toLocaleString('en-US')}</strong><span>Keluarga</span></div><div><strong>${item.people.toLocaleString('en-US')}</strong><span>Mangsa</span></div></div>
    <div class="geo-progress"><div><span>Kemajuan kelulusan BWI</span><strong>${Math.round(item.approved/item.applications*100)}%</strong></div><div class="occupancy-meter"><span style="width:${Math.round(item.approved/item.applications*100)}%"></span></div></div>
    <div class="geo-card-foot"><span>${item.applications.toLocaleString('en-US')} permohonan</span><time>${item.last}</time></div>
  </article>`).join('');
}

function renderPPS() {
  main.innerHTML = `<section class="page">
    ${pageHeader('Pendaftaran mangsa', 'Direktori Pusat Pemindahan Sementara', 'Urus PPS mengikut negeri, daerah, mukim dan zon bencana serta pantau kapasiti masa nyata.', '<button class="primary-button" id="add-pps">'+icon('plus')+' Daftar PPS</button>')}
    ${disasterSummaryCards()}
    <article class="card pad" style="margin-top:18px">
      <div class="toolbar geo-toolbar"><div class="toolbar-group">
        <div class="search-field">${icon('search')}<input id="pps-search" placeholder="Cari nama PPS, daerah atau mukim" /></div>
        <select class="filter-select" id="pps-state"><option value="">Semua negeri</option>${[...new Set(ppsDirectory.map(x=>x.state))].map(x=>`<option>${x}</option>`).join('')}</select>
        <select class="filter-select" id="pps-status"><option value="">Semua status</option>${[...new Set(ppsDirectory.map(x=>x.status))].map(x=>`<option>${x}</option>`).join('')}</select>
      </div><button class="secondary-button" id="reset-pps-filter">Tetap semula</button></div>
      <div id="pps-table-container">${ppsTable(ppsDirectory)}</div>
    </article>
  </section>`;
}

function ppsTable(items) {
  if (!items.length) return `<div class="empty-state"><span class="empty-state-icon">${icon('search')}</span><h3>Tiada PPS ditemui</h3><p>Ubah carian atau penapis status.</p></div>`;
  return `<div class="data-table-wrap"><table class="data-table pps-table"><thead><tr><th>PPS / zon</th><th>Kawasan</th><th>Mangsa</th><th>Kapasiti</th><th>Status</th><th>Kemas kini</th><th>Tindakan</th></tr></thead><tbody>
    ${items.map(r=>`<tr><td><div class="location-stack"><strong>${r.name}</strong><span>${r.id} · ${r.zone}</span></div></td><td><strong>${r.district}, ${r.state}</strong><br><span class="table-subtext">Mukim ${r.mukim} · ${r.disaster}</span></td><td><strong>${r.people.toLocaleString('en-US')}</strong><br><span class="table-subtext">${r.families} keluarga</span></td><td><div class="capacity-cell"><div><strong>${r.occupancy}%</strong><span>${r.people}/${r.capacity}</span></div><div class="occupancy-meter ${r.occupancy >= 80 ? 'is-high' : ''}"><span style="width:${r.occupancy}%"></span></div></div></td><td><span class="status-chip ${r.statusClass}">${r.status}</span></td><td>${r.last}<br><span class="table-subtext">${r.coordinator}</span></td><td><button class="secondary-button pps-open" data-pps="${r.id}" style="min-height:38px;padding:7px 11px">Buka</button></td></tr>`).join('')}
  </tbody></table></div>`;
}

function renderJKMDocuments() {
  main.innerHTML = `<section class="page">
    ${pageHeader('Semakan dokumen', 'Dokumen menunggu pengesahan', 'Semak kualiti, ketulenan dan padanan alamat bagi dokumen sokongan.')}
    <div class="grid cols-3">
      ${[['Bil_Air_Nurul.pdf','BWI-2026-001297','Bil utiliti','Alamat kabur'],['Laporan_Polis_Ahmad.pdf','BWI-2026-001284','Laporan polis','Semakan rutin'],['Gambar_Rumah_Ravi.jpg','BWI-2026-001306','Bukti kerosakan','Semakan rutin']].map((d,i)=>`<article class="card pad"><div style="height:150px;display:grid;place-items:center;background:var(--color-surface-muted);border:1px solid var(--color-border);border-radius:12px;color:var(--color-primary)">${icon('document')}</div><h3 style="font-size:.94rem;margin:14px 0 3px">${d[0]}</h3><p style="margin:0;color:var(--color-text-muted);font-size:.75rem">${d[1]} • ${d[2]}</p><div style="margin-top:12px"><span class="status-chip ${i===0?'warning':'info'}">${d[3]}</span></div><div class="form-actions" style="justify-content:stretch"><button class="secondary-button" style="flex:1">Kuiri</button><button class="success-button" style="flex:1">Sahkan</button></div></article>`).join('')}
    </div>
  </section>`;
}

function renderQueryManagement() {
  const queries = [sampleCases[3], sampleCases[1]];
  main.innerHTML = `<section class="page">
    ${pageHeader('Pengurusan kuiri', 'Permohonan memerlukan tindakan', 'Pantau kuiri yang dihantar kepada pemohon dan semakan semula selepas pembetulan.', '<button class="primary-button" id="create-query">'+icon('plus')+' Kuiri baharu</button>')}
    <div class="grid cols-4">${metricCard('Kuiri aktif','111','Semua negeri','query')}${metricCard('Menunggu pemohon','74','66.7%','clock')}${metricCard('Dihantar semula','29','Sedia disemak','refresh')}${metricCard('Tamat tempoh','8','Perlu eskalasi','alert','var(--color-error)','var(--color-error-soft)')}</div>
    <article class="card" style="margin-top:18px"><div class="card-header"><div><h3>Senarai kuiri</h3><p>Kuiri aktif dan sejarah maklum balas.</p></div></div><div class="card-body">${caseTable(queries,'NADMA')}</div></article>
  </section>`;
}

function renderApproved() {
  const approvedCases = sampleCases.map((c,i)=>({...c,status:i<4?'Diluluskan':'Dihantar ke BSN',statusClass:'success'}));
  main.innerHTML = `<section class="page">
    ${pageHeader('Kelulusan NADMA', 'Permohonan diluluskan', 'Semak permohonan yang telah diluluskan dan status penghantaran arahan bayaran ke BSN.', '<button class="primary-button" id="send-bsn">Hantar kelompok ke BSN</button>')}
    <div class="action-banner success"><div><h3>2,309 permohonan sedia dihantar</h3><p>Jumlah nilai arahan bayaran: RM2,309,000.</p></div><span class="status-chip success">Semakan lengkap</span></div>
    <article class="card pad" style="margin-top:18px">${caseTable(approvedCases,'NADMA')}</article>
  </section>`;
}

function renderPaymentBatches() {
  main.innerHTML = `<section class="page">
    ${pageHeader('Kelompok bayaran', 'Pengurusan arahan bayaran', 'Terima, sahkan dan proses kelompok pembayaran yang dihantar oleh NADMA.', '<button class="primary-button" id="new-batch">'+icon('plus')+' Proses kelompok</button>')}
    <div class="grid cols-4">${metricCard('Kelompok baharu','4','2,309 penerima','batch')}${metricCard('Nilai keseluruhan','RM2.31j','Hari ini','payment')}${metricCard('Sedang diproses','2','1,462 penerima','clock')}${metricCard('Selesai','18','Bulan semasa','check','var(--color-success)','var(--color-success-soft)')}</div>
    <article class="card" style="margin-top:18px"><div class="card-header"><div><h3>Senarai kelompok</h3><p>Arahan bayaran mengikut tarikh dan negeri.</p></div></div><div class="card-body"><div class="data-table-wrap"><table class="data-table"><thead><tr><th>ID kelompok</th><th>Tarikh diterima</th><th>Negeri</th><th>Penerima</th><th>Nilai</th><th>Status</th><th>Tindakan</th></tr></thead><tbody>
      ${[['BATCH-280726-01','28 Jul 2026','Selangor','842','RM842,000','Sedia diproses','info'],['BATCH-280726-02','28 Jul 2026','Pahang','620','RM620,000','Pengesahan akaun','warning'],['BATCH-270726-04','27 Jul 2026','Kelantan','516','RM516,000','EFT berjalan','info'],['BATCH-270726-03','27 Jul 2026','Johor','331','RM331,000','Selesai','success']].map(r=>`<tr><td class="case-id">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td class="numeric">${r[4]}</td><td><span class="status-chip ${r[6]}">${r[5]}</span></td><td><button class="secondary-button batch-open" style="min-height:38px;padding:7px 11px">Buka</button></td></tr>`).join('')}
    </tbody></table></div></div></article>
  </section>`;
}

function renderEFT() {
  const eftCases = sampleCases.map((c,i)=>({...c,status:i===3?'Akaun tidak sah':i===4?'Nama tidak sepadan':'Sedia EFT',statusClass:i>2?'warning':'success'}));
  main.innerHTML = `<section class="page">
    ${pageHeader('Pengesahan EFT', 'Semakan akaun penerima', 'Sahkan akaun aktif, nama pemegang dan keputusan transaksi EFT.', '<button class="primary-button" id="run-eft">Jalankan EFT</button>')}
    <div class="action-banner"><div><h3>9 rekod memerlukan semakan manual</h3><p>Periksa ketidakpadanan nama atau akaun tidak aktif sebelum EFT dijalankan.</p></div><span class="status-chip warning">Tindakan diperlukan</span></div>
    <article class="card pad" style="margin-top:18px">${caseTable(eftCases,'BSN')}</article>
  </section>`;
}


function renderBsnTrace() {
  const traceStep = state.bsnStep || 6;
  const operationalSteps = bsnPaymentSteps.map((step, index) => {
    const number = index + 1;
    const done = number < traceStep || traceStep >= bsnPaymentSteps.length;
    const current = traceStep < bsnPaymentSteps.length && number === traceStep;
    const stateClass = done ? 'done' : current ? 'current' : 'pending';
    return `<li class="bsn-stage-item ${stateClass}">
      <div class="bsn-stage-number">${done ? icon('check') : number}</div>
      <div class="bsn-stage-copy">
        <div class="bsn-stage-title-row"><h4>${step.title}</h4><span class="status-chip ${done ? 'success' : current ? 'info' : 'neutral'}">${done ? 'Selesai' : current ? 'Aktif' : 'Menunggu'}</span></div>
        <p>${step.description}</p>
        <div class="bsn-stage-meta"><span>${icon('clock')} ${done ? step.time : current ? 'Dalam pemprosesan' : 'Belum bermula'}</span><span>Kod: <strong>${done || current ? step.code : '—'}</strong></span><span>Pemilik: <strong>${step.owner}</strong></span></div>
      </div>
    </li>`;
  }).join('');

  const logs = bsnPaymentSteps.slice(0, Math.min(traceStep, bsnPaymentSteps.length)).map((step, index) => [
    step.time,
    step.owner,
    step.title,
    step.code,
    index === 4 ? 'Automatik / Core' : 'Automatik',
    step.reference
  ]);

  main.innerHTML = `<section class="page">
    ${pageHeader('Operasi pembayaran BSN', 'Jejak transaksi hujung-ke-hujung', 'Telusuri setiap peristiwa pembayaran daripada penerimaan arahan NADMA hingga notifikasi kepada mangsa.', '<button class="secondary-button" id="export-trace">'+icon('download')+' Eksport jejak</button>')}
    <div class="toolbar trace-search-toolbar">
      <div class="search-field">${icon('search')}<input id="trace-search-input" value="BWI-2026-001284" aria-label="Cari nombor permohonan, kelompok atau transaksi" /></div>
      <div class="toolbar-group"><select class="filter-select" aria-label="Pilih jenis rujukan"><option>No. permohonan</option><option>ID kelompok</option><option>Rujukan EFT</option><option>MyKad</option></select><button class="primary-button" id="trace-search">Cari transaksi</button></div>
    </div>

    <div class="grid cols-4">
      ${metricCard('Transaksi aktif','1,462','2 kelompok sedang diproses','clock')}
      ${metricCard('Berjaya hari ini','2,144','92.9% kadar berjaya','check','var(--color-success)','var(--color-success-soft)')}
      ${metricCard('Pengecualian','34','Perlu tindakan manual','alert','var(--color-warning)','var(--color-warning-soft)')}
      ${metricCard('Median masa','1j 28m','Sasaran <3 hari','status')}
    </div>

    <article class="card trace-summary-card" style="margin-top:18px">
      <div class="card-header"><div><p class="eyebrow">Transaksi dipilih</p><h3>BWI-2026-001284 · Ahmad Salleh</h3><p>Arahan bantuan RM1,000 melalui EFT ke akaun BSN •••• 8421.</p></div><span class="status-chip ${traceStep >= bsnPaymentSteps.length ? 'success' : 'info'}">${traceStep >= bsnPaymentSteps.length ? 'Selesai' : 'Dalam pemprosesan'}</span></div>
      <div class="card-body"><div class="trace-reference-grid">
        <div class="reference-tile"><span>Rujukan NADMA</span><strong>NADMA-PAY-20260728-004</strong></div>
        <div class="reference-tile"><span>ID kelompok</span><strong>BATCH-280726-01</strong></div>
        <div class="reference-tile"><span>Rujukan EFT</span><strong>${traceStep >= 4 ? 'EFT-20260728-0194' : 'Belum dijana'}</strong></div>
        <div class="reference-tile"><span>Checksum fail</span><strong>8FA2…19C0</strong></div>
      </div></div>
    </article>

    <div class="trace-layout" style="margin-top:18px">
      <article class="card">
        <div class="card-header"><div><h3>Jejak peringkat BSN</h3><p>Urutan pemprosesan, pemilik sistem dan kod respons.</p></div><span class="tag">Langkah ${Math.min(traceStep, bsnPaymentSteps.length)} / ${bsnPaymentSteps.length}</span></div>
        <div class="card-body"><ol class="bsn-stage-list">${operationalSteps}</ol></div>
      </article>
      <aside class="grid trace-side-panel">
        <article class="card pad"><p class="eyebrow">Pemantauan SLA</p><div class="sla-summary"><strong>1j 40m</strong><span>masa berlalu</span></div><div class="sla-track"><div style="width:18%"></div></div><div class="sla-labels"><span>0 jam</span><span>72 jam</span></div><p class="trace-note">Transaksi berada dalam sasaran dan tiada eskalasi diperlukan.</p></article>
        <article class="card pad"><p class="eyebrow">Tindakan operasi</p><div class="trace-action-stack"><button class="primary-button full" id="trace-advance">${icon('refresh')} Majukan langkah</button><button class="secondary-button full" id="trace-exception">${icon('alert')} Daftar pengecualian</button><button class="ghost-button full" data-go="bsn-reconcile">Buka rekonsiliasi</button></div></article>
        <article class="card pad"><p class="eyebrow">Laluan pengecualian</p><div class="exception-path"><span class="status-chip warning">EFT gagal</span><p>Akaun tidak sah → tandakan sebab → tukar kepada kutipan tunai → hantar SMS arahan kaunter.</p></div></article>
      </aside>
    </div>

    <article class="card" style="margin-top:18px">
      <div class="card-header"><div><h3>Log peristiwa transaksi</h3><p>Rekod audit teknikal untuk siasatan dan rekonsiliasi.</p></div></div>
      <div class="card-body"><div class="data-table-wrap"><table class="data-table trace-log-table"><thead><tr><th>Masa</th><th>Sistem / pemilik</th><th>Peristiwa</th><th>Kod</th><th>Aktor</th><th>Bukti / rujukan</th></tr></thead><tbody>${logs.map(row => `<tr><td>${row[0]}</td><td><strong>${row[1]}</strong></td><td>${row[2]}</td><td><span class="code-pill">${row[3]}</span></td><td>${row[4]}</td><td class="case-id">${row[5]}</td></tr>`).join('')}</tbody></table></div></div>
    </article>
  </section>`;
}

function renderCashPayments() {
  main.innerHTML = `<section class="page">
    ${pageHeader('Kutipan tunai', 'Pembayaran tunai di kaunter', 'Urus penerima tanpa akaun atau transaksi EFT yang tidak berjaya.', '<button class="secondary-button" id="export-cash">'+icon('download')+' Senarai kaunter</button>')}
    <div class="grid cols-4">${metricCard('Sedia dituntut','131','RM131,000','bank')}${metricCard('Dituntut hari ini','48','RM48,000','check')}${metricCard('Belum dituntut >7 hari','22','Perlu peringatan','clock')}${metricCard('Cawangan aktif','34','Seluruh negara','home')}</div>
    <article class="card" style="margin-top:18px"><div class="card-header"><div><h3>Senarai penerima tunai</h3><p>Pengesahan identiti diperlukan di kaunter.</p></div></div><div class="card-body">${caseTable(sampleCases.filter((_,i)=>i%2===1).map(c=>({...c,status:'Sedia dituntut',statusClass:'success'})),'BSN')}</div></article>
  </section>`;
}

function renderReconcile() {
  main.innerHTML = `<section class="page">
    ${pageHeader('Rekonsiliasi', 'Padanan transaksi pembayaran', 'Bandingkan arahan NADMA, hasil EFT dan kutipan tunai bagi penyelesaian harian.', '<button class="primary-button" id="reconcile-now">Jalankan rekonsiliasi</button>')}
    <div class="grid cols-4">${metricCard('Arahan bayaran','2,309','RM2.31 juta','application')}${metricCard('Berjaya dipadankan','2,275','98.5%','check')}${metricCard('Perbezaan','34','RM34,000','alert','var(--color-warning)','var(--color-warning-soft)')}${metricCard('Belum selesai','0','Hari sebelumnya','clock','var(--color-success)','var(--color-success-soft)')}</div>
    <div class="grid main-side" style="margin-top:18px"><article class="card"><div class="card-header"><div><h3>Ringkasan padanan</h3><p>Keputusan mengikut kaedah pembayaran.</p></div></div><div class="card-body"><div class="kpi-row"><div class="kpi-mini"><span>EFT berjaya</span><strong>2,144</strong></div><div class="kpi-mini"><span>EFT gagal</span><strong>34</strong></div><div class="kpi-mini"><span>Tunai dituntut</span><strong>48</strong></div><div class="kpi-mini"><span>Tunai belum dituntut</span><strong>83</strong></div></div></div></article><article class="card pad"><h3 style="margin-top:0">Status tutup hari</h3><p style="color:var(--color-text-muted);font-size:.82rem">Rekonsiliasi boleh ditutup selepas semua 34 perbezaan diselesaikan.</p><button class="secondary-button full" disabled>Tutup hari operasi</button></article></div>
  </section>`;
}

function renderReports(scope) {
  main.innerHTML = `<section class="page">
    ${pageHeader('Pelaporan & analitik', `Laporan ${scope}`, 'Analisis volum permohonan, tempoh pemprosesan, kelulusan dan pembayaran.', '<button class="secondary-button" id="export-report">'+icon('download')+' Eksport CSV</button><button class="primary-button">Jana laporan</button>')}
    <div class="grid cols-4">${metricCard('Jumlah permohonan','28,640','Bulan Julai','application')}${metricCard('Kadar kelulusan','91.4%','+2.1 mata','check')}${metricCard('Median masa proses','6.2 hari','Sasaran <14 hari','clock')}${metricCard('Jumlah dibayar','RM26.18j','26,180 penerima','payment','var(--color-success)','var(--color-success-soft)')}</div>
    <div class="grid main-side" style="margin-top:18px"><article class="card chart-card"><div class="card-header"><div><h3>Trend permohonan bulanan</h3><p>Permohonan diterima dan bayaran selesai.</p></div></div><div class="card-body"><div class="chart-area">${[['Feb',42,35],['Mac',55,48],['Apr',49,44],['Mei',64,54],['Jun',71,62],['Jul',88,80]].map(d=>`<div class="bar-group"><div class="bar" style="height:${d[1]}%"></div><div class="bar secondary" style="height:${d[2]}%"></div><span class="bar-label">${d[0]}</span></div>`).join('')}</div><div class="chart-legend"><span class="legend-item"><i class="legend-swatch"></i>Diterima</span><span class="legend-item"><i class="legend-swatch secondary"></i>Dibayar</span></div></div></article><article class="card"><div class="card-header"><div><h3>SLA mengikut agensi</h3><p>Median masa pemprosesan.</p></div></div><div class="card-body"><div class="activity-list">${[['JKM','1.8 hari','Dalam sasaran'],['NADMA','2.9 hari','Dalam sasaran'],['BSN','1.5 hari','Dalam sasaran']].map(a=>`<div class="activity-item"><span class="activity-icon">${icon('clock')}</span><div class="activity-copy"><strong>${a[0]}</strong><p>${a[2]}</p></div><strong>${a[1]}</strong></div>`).join('')}</div></div></article></div>
  </section>`;
}

function renderAdminDashboard() {
  main.innerHTML = `<section class="page">
    ${pageHeader('Pentadbiran sistem', 'Kesihatan & prestasi portal', 'Pantau ketersediaan sistem, integrasi agensi, keselamatan dan penggunaan.', '<button class="secondary-button" id="refresh-system">'+icon('refresh')+' Segar semula</button>')}
    <div class="grid cols-4">${metricCard('Ketersediaan','99.98%','30 hari terakhir','check','var(--color-success)','var(--color-success-soft)')}${metricCard('Pengguna aktif','4,821','24 jam terakhir','users')}${metricCard('Permintaan API','1.82j','Hari ini','refresh')}${metricCard('Amaran aktif','3','Tiada kritikal','alert','var(--color-warning)','var(--color-warning-soft)')}</div>
    <div class="grid cols-2" style="margin-top:18px"><article class="card"><div class="card-header"><div><h3>Status integrasi</h3><p>Sambungan perkhidmatan antara agensi.</p></div></div><div class="card-body"><div class="activity-list">${[['MyIBJKM','Beroperasi','42 ms'],['NADMA Eligibility API','Beroperasi','61 ms'],['BSN Payment Gateway','Beroperasi','78 ms'],['SMS Gateway','Prestasi menurun','420 ms']].map((x,i)=>`<div class="activity-item"><span class="activity-icon">${icon(i===3?'alert':'check')}</span><div class="activity-copy"><strong>${x[0]}</strong><p>${x[1]}</p></div><span class="status-chip ${i===3?'warning':'success'}">${x[2]}</span></div>`).join('')}</div></div></article><article class="card"><div class="card-header"><div><h3>Aktiviti keselamatan</h3><p>Ringkasan kawalan dan audit akses.</p></div></div><div class="card-body"><div class="kpi-row" style="grid-template-columns:repeat(2,1fr)"><div class="kpi-mini"><span>Log masuk berjaya</span><strong>8,942</strong></div><div class="kpi-mini"><span>Log masuk gagal</span><strong>17</strong></div><div class="kpi-mini"><span>Akaun dikunci</span><strong>2</strong></div><div class="kpi-mini"><span>Perubahan peranan</span><strong>5</strong></div></div></div></article></div>
  </section>`;
}

function renderUsers() {
  const users = [['Nor Aini','noraini@jkm.gov.my','JKM','Pengesah','Aktif'],['Firdaus Rahman','firdaus@nadma.gov.my','NADMA','Pelulus','Aktif'],['Siti Hajar','sitihajar@bsn.com.my','BSN','Operasi bayaran','Aktif'],['Amirul Hakim','amirul@jkm.gov.my','JKM','Penyelia','Digantung']];
  main.innerHTML = `<section class="page">${pageHeader('Pengurusan akses','Pengguna & peranan','Urus akaun pegawai, skop negeri/daerah dan hak capaian.','<button class="primary-button" id="add-user">'+icon('plus')+' Tambah pengguna</button>')}<article class="card pad"><div class="toolbar"><div class="search-field">${icon('search')}<input placeholder="Cari nama atau e-mel" /></div><select class="filter-select"><option>Semua agensi</option><option>JKM</option><option>NADMA</option><option>BSN</option></select></div><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Nama</th><th>E-mel</th><th>Agensi</th><th>Peranan</th><th>Status</th><th>Tindakan</th></tr></thead><tbody>${users.map(u=>`<tr><td><strong>${u[0]}</strong></td><td>${u[1]}</td><td>${u[2]}</td><td>${u[3]}</td><td><span class="status-chip ${u[4]==='Aktif'?'success':'warning'}">${u[4]}</span></td><td><button class="secondary-button" style="min-height:38px;padding:7px 11px">Urus</button></td></tr>`).join('')}</tbody></table></div></article></section>`;
}

function renderWorkflow() {
  const stages = [['1','Pendaftaran mangsa','JKM / MyIBJKM','Aktif'],['2','Pengesahan JKM','JKM','Aktif'],['3','Semakan kelayakan','NADMA','Aktif'],['4','Arahan bayaran','NADMA → BSN','Aktif'],['5','Pembayaran','BSN','Aktif']];
  main.innerHTML = `<section class="page">${pageHeader('Konfigurasi proses','Aliran kerja BWI','Tetapkan peringkat, SLA, status pengguna dan peraturan eskalasi.','<button class="primary-button" id="save-workflow">Simpan konfigurasi</button>')}<div class="grid main-side"><article class="card pad"><div class="activity-list">${stages.map(s=>`<div class="activity-item"><span class="activity-icon"><strong>${s[0]}</strong></span><div class="activity-copy"><strong>${s[1]}</strong><p>Pemilik: ${s[2]}</p></div><span class="status-chip success">${s[3]}</span></div>`).join('')}</div></article><aside class="card form-card"><div class="form-section"><h3>Peraturan SLA</h3><p>Had masa sebelum amaran atau eskalasi.</p><div class="form-grid"><div class="form-field"><label>Semakan JKM</label><input value="2 hari bekerja" /></div><div class="form-field"><label>Semakan NADMA</label><input value="5 hari bekerja" /></div><div class="form-field"><label>Pembayaran BSN</label><input value="3 hari bekerja" /></div><div class="form-field"><label>Tempoh respons kuiri</label><input value="7 hari kalendar" /></div></div></div></aside></div></section>`;
}

function renderAudit() {
  const logs = [['28 Jul 2026, 10:42','Firdaus Rahman','Lulus permohonan','BWI-2026-001284','10.22.14.8'],['28 Jul 2026, 10:37','Nor Aini','Sahkan dokumen','BWI-2026-001306','10.14.6.32'],['28 Jul 2026, 10:30','Siti Hajar','Jalankan EFT','BATCH-280726-01','10.31.8.12'],['28 Jul 2026, 10:18','Pentadbir Portal','Ubah peranan pengguna','USR-004812','10.1.1.5']];
  main.innerHTML = `<section class="page">${pageHeader('Pematuhan & audit','Log audit sistem','Jejak tindakan pengguna, perubahan data dan aktiviti sensitif.','<button class="secondary-button" id="export-audit">'+icon('download')+' Eksport log</button>')}<article class="card pad"><div class="toolbar"><div class="search-field">${icon('search')}<input placeholder="Cari pengguna, tindakan atau rujukan" /></div><input class="filter-select" type="date" value="2026-07-28" /></div><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Masa</th><th>Pengguna</th><th>Tindakan</th><th>Rujukan</th><th>Alamat IP</th></tr></thead><tbody>${logs.map(l=>`<tr><td>${l[0]}</td><td><strong>${l[1]}</strong></td><td>${l[2]}</td><td class="case-id">${l[3]}</td><td>${l[4]}</td></tr>`).join('')}</tbody></table></div></article></section>`;
}

function bindPPSButtons() {
  document.querySelectorAll('.pps-open').forEach(button => button.addEventListener('click', () => {
    const item = ppsDirectory.find(row => row.id === button.dataset.pps);
    if (!item) return;
    document.getElementById('dialog-title').textContent = item.name;
    document.getElementById('dialog-content').innerHTML = `<div class="dialog-summary"><div><span>ID PPS</span><strong>${item.id}</strong></div><div><span>Zon bencana</span><strong>${item.zone}</strong></div><div><span>Lokasi</span><strong>${item.mukim}, ${item.district}, ${item.state}</strong></div><div><span>Kapasiti</span><strong>${item.people.toLocaleString('en-US')} / ${item.capacity.toLocaleString('en-US')} (${item.occupancy}%)</strong></div><div><span>Penyelaras</span><strong>${item.coordinator}</strong></div><div><span>Telefon operasi</span><strong>${item.phone}</strong></div></div>`;
    document.getElementById('dialog-footer').innerHTML = `<button class="secondary-button" value="cancel">Tutup</button><button class="primary-button" value="cancel" id="pps-manage">Urus PPS</button>`;
    document.getElementById('case-dialog').showModal();
  }));
}

function bindCommonActions() {
  document.querySelectorAll('[data-go]').forEach(el => el.addEventListener('click', () => {
    state.route = el.dataset.go;
    localStorage.setItem('bwi-route', state.route);
    renderNav();
    renderRoute();
  }));
  document.querySelectorAll('.open-case').forEach(el => el.addEventListener('click', () => openCase(el.dataset.case)));

  const search = document.getElementById('case-search');
  const filter = document.getElementById('status-filter');
  const applyFilter = () => {
    const q = (search?.value || '').toLowerCase();
    const status = filter?.value || '';
    const filtered = sampleCases.filter(c => (c.id+c.name+c.ic).toLowerCase().includes(q) && (!status || c.status===status));
    const container = document.getElementById('case-table-container');
    if (container) {
      container.innerHTML = filtered.length ? caseTable(filtered, state.role.toUpperCase()) : `<div class="empty-state"><span class="empty-state-icon">${icon('search')}</span><h3>Tiada rekod ditemui</h3><p>Ubah kata kunci atau penapis status untuk melihat hasil lain.</p></div>`;
      container.querySelectorAll('.open-case').forEach(el => el.addEventListener('click', () => openCase(el.dataset.case)));
    }
  };
  search?.addEventListener('input', applyFilter);
  filter?.addEventListener('change', applyFilter);
  document.getElementById('reset-filter')?.addEventListener('click', () => { if(search) search.value=''; if(filter) filter.value=''; applyFilter(); });

  const areaSearch = document.getElementById('area-search');
  const areaState = document.getElementById('area-state');
  const areaDisaster = document.getElementById('area-disaster');
  const applyAreaFilter = () => {
    const q = (areaSearch?.value || '').toLowerCase();
    const stateFilter = areaState?.value || '';
    const disasterFilter = areaDisaster?.value || '';
    const filtered = disasterAreas.filter(item => `${item.state} ${item.district} ${item.area} ${item.id}`.toLowerCase().includes(q) && (!stateFilter || item.state === stateFilter) && (!disasterFilter || item.disaster === disasterFilter));
    const target = document.getElementById('area-grid');
    if (target) target.innerHTML = disasterAreaCards(filtered);
  };
  areaSearch?.addEventListener('input', applyAreaFilter);
  areaState?.addEventListener('change', applyAreaFilter);
  areaDisaster?.addEventListener('change', applyAreaFilter);
  document.getElementById('reset-area-filter')?.addEventListener('click', () => { if(areaSearch) areaSearch.value=''; if(areaState) areaState.value=''; if(areaDisaster) areaDisaster.value=''; applyAreaFilter(); });

  const ppsSearch = document.getElementById('pps-search');
  const ppsState = document.getElementById('pps-state');
  const ppsStatus = document.getElementById('pps-status');
  const applyPPSFilter = () => {
    const q = (ppsSearch?.value || '').toLowerCase();
    const stateFilter = ppsState?.value || '';
    const statusFilter = ppsStatus?.value || '';
    const filtered = ppsDirectory.filter(item => `${item.name} ${item.district} ${item.state} ${item.mukim} ${item.zone} ${item.id}`.toLowerCase().includes(q) && (!stateFilter || item.state === stateFilter) && (!statusFilter || item.status === statusFilter));
    const target = document.getElementById('pps-table-container');
    if (target) { target.innerHTML = ppsTable(filtered); bindPPSButtons(); }
  };
  ppsSearch?.addEventListener('input', applyPPSFilter);
  ppsState?.addEventListener('change', applyPPSFilter);
  ppsStatus?.addEventListener('change', applyPPSFilter);
  document.getElementById('reset-pps-filter')?.addEventListener('click', () => { if(ppsSearch) ppsSearch.value=''; if(ppsState) ppsState.value=''; if(ppsStatus) ppsStatus.value=''; applyPPSFilter(); });
  bindPPSButtons();
  document.querySelectorAll('[data-area-filter]').forEach(button => button.addEventListener('click', () => {
    if (state.role === 'bsn') { showToast('Pecahan kawasan', `Paparan pembayaran ${button.dataset.areaFilter} dipilih.`); return; }
    const targetRoute = state.role === 'nadma' ? 'nadma-zones' : 'jkm-areas';
    state.route = targetRoute; localStorage.setItem('bwi-route', targetRoute); renderNav(); renderRoute();
    setTimeout(() => { const select = document.getElementById('area-state'); if(select){ select.value = button.dataset.areaFilter; select.dispatchEvent(new Event('change')); } }, 0);
  }));

  document.getElementById('save-form')?.addEventListener('click', () => showToast('Perubahan disimpan', 'Maklumat permohonan telah dikemas kini.'));
  document.getElementById('save-profile')?.addEventListener('click', () => showToast('Profil dikemas kini', 'Maklumat peribadi dan akaun bank telah disimpan.'));
  document.getElementById('refresh-status')?.addEventListener('click', () => showToast('Status disegar semula', 'Tiada perubahan status baharu.'));
  document.getElementById('simulate-approval')?.addEventListener('click', () => { state.applicationStatus='approved'; localStorage.setItem('bwi-status','approved'); renderRoute(); showToast('Simulasi berjaya', 'Permohonan kini diluluskan NADMA dan sedia dihantar kepada BSN.'); });
  document.getElementById('advance-bsn-stage')?.addEventListener('click', () => {
    state.bsnStep = Math.min(bsnPaymentSteps.length, state.bsnStep + 1);
    localStorage.setItem('bwi-bsn-step', String(state.bsnStep));
    renderRoute();
    showToast(state.bsnStep >= bsnPaymentSteps.length ? 'Bayaran selesai' : 'Jejak BSN dikemas kini', state.bsnStep >= bsnPaymentSteps.length ? 'Bayaran berjaya dikreditkan dan resit telah diterbitkan.' : `Langkah ${state.bsnStep} daripada ${bsnPaymentSteps.length} kini aktif.`);
  });
  document.getElementById('reset-process')?.addEventListener('click', () => {
    state.applicationStatus='nadma-review'; state.bsnStep=0;
    localStorage.setItem('bwi-status','nadma-review'); localStorage.setItem('bwi-bsn-step','0');
    renderRoute(); showToast('Simulasi ditetapkan semula', 'Jejak kembali kepada peringkat semakan NADMA.');
  });
  document.getElementById('download-payment-receipt')?.addEventListener('click', () => downloadText('resit-bayaran-bwi.txt', 'RESIT BAYARAN BWI\nNo. Permohonan: BWI-2026-001284\nRujukan EFT: EFT-20260728-0194\nJumlah: RM1,000\nStatus: Berjaya dikreditkan\nTarikh: 28 Jul 2026, 11:42 pagi'));
  document.getElementById('download-receipt')?.addEventListener('click', () => downloadText('akuan-penerimaan-bwi.txt', 'AKUAN PENERIMAAN PERMOHONAN BWI\nNo. Rujukan: BWI-2026-001284\nPemohon: Ahmad bin Salleh\nTarikh: 24 Jul 2026\nStatus: Dalam semakan NADMA'));
  document.getElementById('trace-search')?.addEventListener('click', () => showToast('Transaksi ditemui', 'Jejak BWI-2026-001284 telah dimuatkan.'));
  document.getElementById('trace-advance')?.addEventListener('click', () => {
    state.applicationStatus='approved'; state.bsnStep=Math.min(bsnPaymentSteps.length, (state.bsnStep || 6) + 1);
    localStorage.setItem('bwi-status','approved'); localStorage.setItem('bwi-bsn-step', String(state.bsnStep));
    renderRoute(); showToast('Langkah dimajukan', `Jejak transaksi kini pada langkah ${state.bsnStep} daripada ${bsnPaymentSteps.length}.`);
  });
  document.getElementById('trace-exception')?.addEventListener('click', () => showToast('Pengecualian direkodkan', 'Kes ditandakan untuk semakan manual tanpa mengubah transaksi asal.'));
  document.getElementById('export-trace')?.addEventListener('click', () => downloadText('jejak-transaksi-bsn.txt', bsnPaymentSteps.map((step, index) => `${index + 1}. ${step.time} | ${step.code} | ${step.title} | ${step.reference}`).join('\n')));
  document.querySelectorAll('#export-report,#export-cash,#export-audit').forEach(b=>b.addEventListener('click',()=>downloadCSV()));
  ['bulk-action','add-pps','create-query','send-bsn','new-batch','run-eft','reconcile-now','refresh-system','add-user','save-workflow'].forEach(id=>document.getElementById(id)?.addEventListener('click',()=>showToast('Tindakan berjaya','Operasi simulasi telah dilaksanakan.')));

  const fileInput = document.getElementById('file-input');
  const uploadZone = document.getElementById('upload-zone');
  const uploadButton = document.getElementById('upload-button');
  const openFile = () => fileInput?.click();
  uploadZone?.addEventListener('click', openFile);
  uploadZone?.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' ') openFile(); });
  uploadButton?.addEventListener('click', openFile);
  fileInput?.addEventListener('change', () => {
    if (fileInput.files.length) showToast('Dokumen ditambah', `${fileInput.files.length} fail dipilih untuk dimuat naik.`);
  });
  document.querySelectorAll('.delete-doc').forEach(b=>b.addEventListener('click',()=>{ b.closest('.document-item').remove(); showToast('Dokumen dipadam','Fail telah dikeluarkan daripada senarai simulasi.'); }));
}

function openCase(caseId) {
  const c = sampleCases.find(x => x.id === caseId) || sampleCases[0];
  const dialog = document.getElementById('case-dialog');
  document.getElementById('dialog-title').textContent = c.id;
  document.getElementById('dialog-content').innerHTML = `
    <div class="action-banner ${c.statusClass==='error'?'error':c.statusClass==='success'?'success':''}"><div><h3>${c.status}</h3><p>Kes berisiko ${c.risk.toLowerCase()} berdasarkan semakan automatik.</p></div><span class="status-chip ${c.statusClass}">${c.status}</span></div>
    <div class="grid cols-2" style="margin-top:18px">
      <div><p class="eyebrow">Maklumat pemohon</p><dl class="detail-list"><div class="detail-row"><dt>Nama</dt><dd>${c.name}</dd></div><div class="detail-row"><dt>MyKad</dt><dd>${c.ic}</dd></div><div class="detail-row"><dt>Lokasi</dt><dd>${c.district}, ${c.state}</dd></div><div class="detail-row"><dt>Tarikh mohon</dt><dd>${c.date}</dd></div></dl></div>
      <div><p class="eyebrow">Maklumat bayaran</p><dl class="detail-list"><div class="detail-row"><dt>Jumlah</dt><dd>${c.amount}</dd></div><div class="detail-row"><dt>Akaun</dt><dd>${c.bank}</dd></div><div class="detail-row"><dt>Risiko</dt><dd>${c.risk}</dd></div><div class="detail-row"><dt>Dokumen</dt><dd>4 daripada 4 diterima</dd></div></dl></div>
    </div>
    ${state.role === 'bsn' ? `<div class="form-section" style="margin-top:14px"><h3>Jejak transaksi BSN</h3><p>Rujukan kelompok BATCH-280726-01 · EFT-20260728-0194</p><div class="mini-trace"><span class="done">Arahan diterima</span><span class="done">Akaun disahkan</span><span class="current">EFT diproses</span><span>Rekonsiliasi</span></div></div>` : ''}
    <div class="form-section" style="margin-top:14px"><h3>Catatan pegawai</h3><p>Catatan ini direkodkan dalam log audit.</p><div class="form-field"><label for="officer-note">Catatan keputusan</label><textarea id="officer-note" placeholder="Masukkan sebab keputusan atau tindakan susulan..."></textarea></div></div>`;
  const footer = document.getElementById('dialog-footer');
  if (state.role === 'jkm') {
    footer.innerHTML = `<button class="secondary-button" value="cancel">Tutup</button><button class="danger-button" id="modal-query" type="button">Kuiri dokumen</button><button class="success-button" id="modal-approve" type="button">Sahkan JKM</button>`;
  } else if (state.role === 'nadma') {
    footer.innerHTML = `<button class="secondary-button" value="cancel">Tutup</button><button class="danger-button" id="modal-query" type="button">Keluarkan kuiri</button><button class="success-button" id="modal-approve" type="button">Luluskan</button>`;
  } else if (state.role === 'bsn') {
    footer.innerHTML = `<button class="secondary-button" value="cancel">Tutup</button><button class="danger-button" id="modal-query" type="button">Tanda EFT gagal</button><button class="success-button" id="modal-approve" type="button">Sahkan bayaran</button>`;
  } else {
    footer.innerHTML = `<button class="secondary-button" value="cancel">Tutup</button>`;
  }
  footer.querySelector('#modal-query')?.addEventListener('click',()=>{ dialog.close(); showToast('Tindakan direkodkan','Kes telah ditandakan untuk tindakan susulan.'); });
  footer.querySelector('#modal-approve')?.addEventListener('click',()=>{ dialog.close(); showToast('Keputusan disimpan','Status permohonan telah dikemas kini.'); });
  dialog.showModal();
}

function showToast(title, text) {
  const region = document.getElementById('toast-region');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon('check')}</span><div><strong>${title}</strong><p>${text}</p></div>`;
  region.appendChild(toast);
  setTimeout(() => toast.remove(), 3800);
}

function downloadText(filename, content) {
  const blob = new Blob([content], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=filename; a.click(); URL.revokeObjectURL(url);
  showToast('Muat turun bermula', 'Fail telah dijana daripada data prototaip.');
}

function downloadCSV() {
  const header = 'No Permohonan,Nama,Daerah,Negeri,Status,Jumlah\n';
  const rows = sampleCases.map(c=>[c.id,c.name,c.district,c.state,c.status,c.amount.replace(',','')].map(v=>`"${v}"`).join(',')).join('\n');
  const blob = new Blob([header+rows], {type:'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='laporan-bwi.csv'; a.click(); URL.revokeObjectURL(url);
  showToast('Laporan dieksport', 'Fail CSV prototaip telah dijana.');
}

roleSwitcher.addEventListener('change', e => setRole(e.target.value));
document.getElementById('menu-toggle').addEventListener('click', () => sidebar.classList.toggle('open'));
document.getElementById('help-button').addEventListener('click', () => document.getElementById('help-dialog').showModal());

document.getElementById('notification-button').addEventListener('click', () => {
  let panel = document.querySelector('.notification-panel');
  if (!panel) {
    panel = document.createElement('section');
    panel.className = 'notification-panel';
    panel.innerHTML = `<div class="panel-head"><h3>Pemberitahuan</h3><button class="link-button" id="mark-read">Tanda dibaca</button></div>
      <div class="notification-item"><span class="unread-dot"></span><div><strong>Semakan JKM selesai</strong><p>Permohonan anda telah dihantar kepada NADMA.</p><time>26 Jul 2026</time></div></div>
      <div class="notification-item"><span class="unread-dot"></span><div><strong>Dokumen disahkan</strong><p>Bil utiliti berjaya dipadankan dengan alamat.</p><time>25 Jul 2026</time></div></div>
      <div class="notification-item"><span class="unread-dot"></span><div><strong>Permohonan diterima</strong><p>No. rujukan BWI-2026-001284 telah dijana.</p><time>24 Jul 2026</time></div></div>`;
    document.body.appendChild(panel);
    panel.querySelector('#mark-read').addEventListener('click', () => { panel.querySelectorAll('.unread-dot').forEach(d=>d.style.visibility='hidden'); document.getElementById('notification-count').style.display='none'; });
  } else panel.hidden = !panel.hidden;
});

document.addEventListener('click', e => {
  const panel = document.querySelector('.notification-panel');
  if (panel && !panel.hidden && !panel.contains(e.target) && !document.getElementById('notification-button').contains(e.target)) panel.hidden = true;
  if (window.innerWidth <= 880 && sidebar.classList.contains('open') && !sidebar.contains(e.target) && !document.getElementById('menu-toggle').contains(e.target)) sidebar.classList.remove('open');
});

roleSwitcher.value = state.role;
updateIdentity();
renderNav();
renderRoute();
