
export interface ModalStatesTypes {
    isOpened: boolean;
    openedModalComponent: string;
}

export interface OpenModalActionType {
    type: 'OPEN_MODAL_ACTION',
    templateName: string
}
export interface CloseModalActionType {
    type: 'CLOSE_MODAL_ACTION',
}