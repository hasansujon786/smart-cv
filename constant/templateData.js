const c = {
  black: '#000000',
  darkGray: '#111827',
  gray: '#4b5563',
  lightGray: '#9ca3af',
  cyanDark: '#164e63',
  teal: '#20c997',
  sweetPurple: '#6f42c1',
  hotPink: '#dc3545',
  pink: '#d63384',
  skyblue: 'skyblue',
  tomato: 'tomato',
  orange: '#f97316',
  cyan: '#06b6d4',
}
// html data on => util\generageHtml.js
const templateData = [
  {
    id: 'A',
    isModern: false,
    themes: ['#e9ecef', '#ced4da', '#6c757d', c.skyblue, c.sweetPurple],
  },
  {
    id: 'B',
    isModern: false,
    themes: ['#6c757d', '#ced4da', c.skyblue, c.sweetPurple, c.hotPink],
  },
  {
    id: 'C',
    isModern: false,
    themes: [c.hotPink, '#6c757d', c.sweetPurple, c.darkGray, c.pink],
  },
  {
    id: 'D',
    isModern: false,
    themes: [c.darkGray, '#6c757d', c.sweetPurple, c.hotPink, c.pink],
  },
  {
    id: 'E',
    isModern: false,
    themes: [c.darkGray, '#6c757d', c.sweetPurple, c.hotPink, c.pink],
  },
  {
    id: 'F',
    isModern: true,
    themes: [c.sweetPurple, '#343a40', c.skyblue, c.hotPink, '#6c757d', c.teal],
  },
  {
    id: 'G',
    isModern: true,
    themes: [c.sweetPurple, '#343a40', c.skyblue, c.hotPink, '#6c757d', c.teal],
  },
  {
    id: 'H',
    isModern: true,
    themes: [c.sweetPurple, '#343a40', c.skyblue, c.hotPink, '#6c757d', c.teal],
  },
  {
    id: 'I',
    isModern: true,
    themes: [c.sweetPurple, '#343a40', c.skyblue, c.hotPink, '#6c757d', c.teal],
  },
  {
    id: 'J',
    isModern: true,
    themes: [c.sweetPurple, '#343a40', c.skyblue, c.hotPink, '#6c757d', c.teal],
  },
  {
    id: 'M',
    isModern: true,
    themes: [c.cyanDark, c.darkGray, c.teal, c.sweetPurple, c.hotPink],
    defaultOptions: {
      margin: '0cm',
    },
  },
  {
    id: 'N',
    isModern: true,
    themes: [c.darkGray, c.cyanDark, c.teal, c.sweetPurple, c.hotPink],
    defaultOptions: {
      margin: '0cm',
    },
  },
  {
    id: 'O',
    isModern: true,
    themes: [c.darkGray, c.cyanDark, c.teal, c.sweetPurple, c.hotPink],
    defaultOptions: {
      margin: '5mm',
    },
  },
  {
    id: 'P',
    isModern: false,
    themes: [c.darkGray, c.gray, c.cyanDark, c.teal, c.sweetPurple, c.hotPink, c.skyblue],
  },
  {
    id: 'Q',
    isModern: false,
    themes: ['#162f43', c.cyanDark, c.teal, c.sweetPurple, c.hotPink],
    defaultOptions: {
      margin: '10mm',
    },
  },
  {
    id: 'R',
    isModern: false,
    themes: [c.gray, c.cyanDark, c.teal, c.sweetPurple, c.hotPink],
  },
  {
    id: 'S',
    isModern: true,
    themes: [c.tomato, c.hotPink, c.teal, c.orange, c.cyan],
    defaultOptions: {
      margin: '0cm',
    },
  },
  {
    id: 'T',
    isModern: true,
    themes: [c.darkGray, c.hotPink, c.cyanDark, c.lightGray, c.teal, c.sweetPurple],
    // defaultOptions: {
    //   margin: '0cm',
    // },
  },
  {
    id: 'U',
    isModern: false,
    themes: [c.darkGray, c.cyanDark, c.teal, c.sweetPurple, c.cyan],
  },
  {
    id: 'V',
    isModern: true,
    themes: [c.darkGray, c.cyanDark, c.teal, c.sweetPurple, c.cyan],
  },
  {
    id: 'W',
    isModern: true,
    themes: [c.darkGray, c.cyanDark, c.teal, c.sweetPurple, c.cyan],
  },
  {
    id: 'X',
    isModern: true,
    themes: [c.darkGray, c.cyanDark, c.teal, c.sweetPurple, c.cyan],
  },
  {
    id: 'Y',
    isModern: true,
    themes: [c.darkGray, c.cyanDark, c.teal, c.sweetPurple, c.cyan],
  },
]

export const templateList = {
  all: templateData,
  professional: templateData.filter((t) => !t.isModern),
  modern: templateData.filter((t) => t.isModern),
}
