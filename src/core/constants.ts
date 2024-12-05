const TABS = [
  { name: 'name', id: 1, path: '/name1' },
  { name: 'name 2', id: 2, path: '/name2' },
];

const BREAK_POINTS = {
  XS: 480,
  S: 768,
  M: 834,
  L: 1024,
  XL: 1440,
};

const ENDPOINTS = {
  SIGN_IN: '/auth/sign-in',
  CURRENT_USER: '/auth/current-user',
  REFRESH_TOKEN: '/auth/refresh-token',
  SIGN_OUT: '/auth/sign-out',
};

export { TABS, BREAK_POINTS, ENDPOINTS };
