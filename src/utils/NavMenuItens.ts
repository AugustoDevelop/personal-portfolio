export const menuItems = [
  {
    title: 'home',
    url: '/'
  },
  {
    title: "about",
    url: '/about'
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
      { type: "language", title: "english", value: "enUS" },
      { type: "language", title: "spanish", value: "esES" },
      { type: "language", title: "portugueses", value: "ptBR" },
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