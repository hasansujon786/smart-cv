const c = {
  black: '#000000',
  darkGray: '#111827',
  gray: '#4b5563',
  lightGray: '#9ca3af',
  cyanDark: '#164e63',
  teal: '#20c997',
  sweetPurple: '#6f42c1',
  purpleDark: '#8215a6',
  hotPink: '#dc3545',
  pink: '#d63384',
  skyblue: 'skyblue',
  tomato: 'tomato',
  orange: '#f97316',
  cyan: '#06b6d4',
  samonLight: '#febc88',
  samon: '#f4b0af',
  golden: '#b38303',
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
    themes: [c.samonLight, c.cyanDark, c.teal, c.darkGray, c.hotPink],
  },
  {
    id: 'W',
    isModern: true,
    themes: [c.samon, c.cyanDark, c.sweetPurple, c.darkGray, c.hotPink],
  },
  {
    id: 'X',
    isModern: true,
    themes: [c.golden, c.cyan, c.teal, c.sweetPurple, c.hotPink],
  },
  {
    id: 'Y',
    isModern: true,
    themes: [c.purpleDark, c.cyanDark, c.cyan, 'green', c.hotPink],
  },
]

const filterTemplateData = (templates) => {
  let _list = []
  let lastIdx = 0
  for (let i = 0; i < Math.round(templates.length / 2); i++) {
    const group = {
      id: i + '-comp',
      type: 'comp',
      row: [templates[lastIdx]],
    }
    const group2ndItem = templates[lastIdx + 1] !== undefined
    if (group2ndItem) {
      group.row.push(templates[lastIdx + 1])
    }
    _list.push(group)
    lastIdx = lastIdx + 2

    if (i > 0 && (i / 2) % 1) {
      _list.push({ id: i + '-ad', type: 'ad' })
    }
  }

  return _list
}

export const templateList = {
  all: filterTemplateData(templateData),
  professional: filterTemplateData(templateData.filter((t) => !t.isModern)),
  modern: filterTemplateData(templateData.filter((t) => t.isModern)),
}
