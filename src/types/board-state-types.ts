
export interface BoardStateTypes {
    language: string;
    availableLanguages: string[];
}

export interface ChooseLanguageActionType {
    type: 'CHOOSE_LANGUAGE_ACTION';
    language: string;
}