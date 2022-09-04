import {CloseModalActionType, ModalStatesTypes, OpenModalActionType} from "../../types/modal-states-types";

export const openModalAction = (templateName: string): OpenModalActionType => {
    return {
        type: 'OPEN_MODAL_ACTION',
        templateName
    }
}
export const closeModalAction = (): CloseModalActionType => {
    return {
        type: 'CLOSE_MODAL_ACTION',
    }
}


const initialState: ModalStatesTypes = {
    isOpened: false,
    openedModalComponent: '',
}

function modalReducer (state = initialState, action: any): ModalStatesTypes {
    switch (action.type) {
        case 'OPEN_MODAL_ACTION':
            return {
                ...state,
                isOpened: true,
                openedModalComponent: action.templateName
            };
        case 'CLOSE_MODAL_ACTION':
            return {
                ...state,
                isOpened: false,
                openedModalComponent: '',
            };
        default:
            return state;
    }
}

export default modalReducer;