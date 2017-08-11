export type IdentInfo = {
  identLocation: { line: number, character: number };
  identFile: string;
};

export type SingleI18NEntry = {
  type: 'single';
  entry: string;
  context?: string;
  occurences?: string[];
  comments?: string[];
  translation?: string;
};

export type PluralI18NEntry = {
  type: 'plural';
  entry: string[];
  context?: string;
  occurences?: string[];
  comments?: string[];
  translations: string[];
};

export type I18NEntry = SingleI18NEntry | PluralI18NEntry;

export interface TranslationMeta {
  projectIdVersion: string,
  reportMsgidBugsTo: string, // email
  potCreationDate: string,
  poRevisionDate: string,
  lastTranslator: {
    name: string,
    email: string
  },
  language: string,
  languageTeam: string,
  pluralForms: string, // (n: number) => number
  mimeVersion: string,
  contentType: string,
  contentTransferEncoding: string,
  generatedBy: string
}

export interface TranslationJson {
  meta?: TranslationMeta,
  items: I18NEntry[]
}
