export type IdentInfo = {
  identLocation: { line: number, character: number };
  identFile: string;
};

export type SingleI18NEntry = {
  type: 'single';
  entry: string;
  context?: string;
  occurences: IdentInfo[];
  comments?: string[];
  translations: string[];
};

export type PluralI18NEntry = {
  type: 'plural';
  entry: string[];
  context?: string;
  occurences: IdentInfo[];
  comments?: string[];
  translations: string[];
};

export type I18NEntry = SingleI18NEntry | PluralI18NEntry;
