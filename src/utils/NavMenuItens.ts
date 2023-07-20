export const menuItems = [
  {
    title: 'home',
    url: '/'
  },
  {
    title: "about",
    url: '/'
  },
  {
    title: "portifolio",
    url: '/'
  },
  {
    title: "contact",
    url: '/'
  },
  {
    title: "language",
    submenu: [
      { type: "language", title: "Portugueses", value: "ptBR" },
      { type: "language", title: "English", value: "en" },
      { type: "language", title: "Spanish", value: "ptBR" },
    ]
  },
  {
    title: 'theme',
    submenu: [
      { type: "theme", title: 'light', value: 'light' },
      { type: "theme", title: 'dark', value: 'dark' },
    ],
  },
];