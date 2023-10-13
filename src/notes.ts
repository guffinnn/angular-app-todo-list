// Интерфейс (особенность TypeScript)
export interface Notes {
  id: number;
  title: string;
  text: string;
}

// Объект для хранения ежедневных записей
export const NOTES: Notes[] = [
  {
    id: 1,
    title: 'First Note',
    text: 'Send a Lilya Tarusina picture',
  },
  {
    id: 2,
    title: 'Second Note',
    text: 'Create a new album with shershulya',
  },
];
