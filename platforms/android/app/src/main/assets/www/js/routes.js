var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'index',
  },
  {
    path: '/auth/login',
    url: './pages/auth/login.html',
  },
  {
    path: '/auth/lupapassword',
    url: './pages/auth/lupapassword.html',
  },
  // DASHBOARD
  {
    path: '/dashboard',
    url: './pages/dashboard/index.html',
  },
  // UJIAN
  {
    path: '/ujian',
    url: './pages/ujian/index.html',
  },
  {
    path: '/ujian/list/:ujian_id',
    url: './pages/ujian/list.html',
  },
  {
    path: '/ujian/detail/:ujian_id',
    url: './pages/ujian/detail.html',
  },
  {
    path: '/ujian/petunjuk',
    url: './pages/ujian/petunjuk.html',
  },
  {
    path: '/ujian/selesai',
    url: './pages/ujian/selesai.html',
  },
  // PEMBAHASAN
  {
    path: '/pembahasan/detail/:pembahasan_id',
    url: './pages/pembahasan/detail.html',
  },
  // OFFLINE PAGE
  {
    path: '/offline',
    url: './pages/offlinepage.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];