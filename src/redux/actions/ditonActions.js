import * as actionTypes from './actionTypes';

export const sidebarToggle = () => ({
    type: actionTypes.SIDEBAR_TOGGLE
})

export const setFirstdragAndDrop = (swap) => ({
    type: actionTypes.TABLE_FIRST_DRAG_AND_DROP,
    payload: swap
})

export const setFirstPinMode = (pin) => ({
    type: actionTypes.TABLE_FIRST_PIN,
    payload: pin
})

export const setSecondDragAndDrop = (swap) => ({
    type: actionTypes.TABLE_SECOND_DRAG_AND_DROP,
    payload: swap
})

export const setSecondPinMode = (pin) => ({
    type: actionTypes.TABLE_SECOND_PIN,
    payload: pin
})

export const setThirdDragAndDrop = (swap) => ({
    type: actionTypes.TABLE_THIRD_DRAG_AND_DROP,
    payload: swap
})

export const setThirdPinMode = (pin) => ({
    type: actionTypes.TABLE_THIRD_PIN,
    payload: pin
})

export const setFourthDragAndDrop = (swap) => ({
    type: actionTypes.TABLE_FOURTH_DRAG_AND_DROP,
    payload: swap
})

export const setFourthPinMode = (pin) => ({
    type: actionTypes.TABLE_FOURTH_PIN,
    payload: pin
})