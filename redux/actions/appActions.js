import { UPDATE_DATA_CONTRACT, UPDATE_DATA_MODAL, UPDATE_DATA_ORDER, UPDATE_DATA_USER, UPDATE_DATA_SOCKET } from '../constants/appConstants';

export function updateDataContract(data) {
    return {
        type: UPDATE_DATA_CONTRACT,
        data: data
    }
}

export function updateDataUser(data) {
    return {
        type: UPDATE_DATA_USER,
        data: data
    }
}

export function updateDataModal(data) {
    return {
        type: UPDATE_DATA_MODAL,
        data: data
    }
}

export function updateDataOrder(data) {
    return {
        type: UPDATE_DATA_ORDER,
        data: data
    }
}

export function updateDataSocket(data) {
    return {
        type: UPDATE_DATA_SOCKET,
        data: data
    }
}