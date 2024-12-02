export const Translations = {
  en: {
    'Enter names below': 'Enter names below',
    Shuffle: 'Shuffle',
    Start: 'Start',
    Map: 'Map',
    Recording: 'Recording',
    'The winner is': 'The winner is',
    'Using skills': 'Using skills',
    'Buy me a coffee': 'Buy me a coffee',
    First: 'First',
    Last: 'Last',
    'Wheel of fortune': 'Wheel of fortune',
    BubblePop: 'BubblePop',
    'Pot of greed': 'Pot of greed',
    'Shake!': 'Shake!',
    'Input names separated by commas or line feed here':
      'Input names separated by commas or line feed here',
  },
  'pt-BR': {
    'Enter names below': 'Digite os nomes abaixo',
    Shuffle: 'Embaralhar',
    Start: 'Iniciar',
    Map: 'Mapa',
    Recording: 'Gravação',
    'The winner is': 'O vencedor é',
    'Using skills': 'Usar habilidades',
    'Buy me a coffee': 'Compre-me um café',
    First: 'Primeiro',
    Last: 'Último',
    'Wheel of fortune': 'Roda da Fortuna',
    BubblePop: 'Estouro de Bolhas',
    'Pot of greed': 'Pote da Ganância',
    'Shake!': 'Agitar!',
    'Input names separated by commas or line feed here':
      'Digite os nomes separados por vírgulas ou quebra de linha aqui',
  },
} as const;

export type TranslatedLanguages = keyof typeof Translations;

export type TranslationKeys = keyof (typeof Translations)[TranslatedLanguages];
