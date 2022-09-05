import {BoardStateTypes, ChooseLanguageActionType} from "../../types/board-state-types";

export const chooseLanguageAction = (language: string): ChooseLanguageActionType => {
    return {
        type: 'CHOOSE_LANGUAGE_ACTION',
        language
    }
}

const initialState: BoardStateTypes = {
    availableLanguages: ['UA', 'EN'],
    language: 'UA',
}

function boardSettingReducer (state = initialState, action: any ): BoardStateTypes {
    switch (action.type) {
        case 'CHOOSE_LANGUAGE_ACTION':
            return {
                ...state,
                language: action.language
            }
        default:
            return state;
    }
}

export default boardSettingReducer;