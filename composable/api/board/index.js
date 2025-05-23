import {callApi} from "~/composable/api/api.client.js";

export function fetchBoards(page) {
    return callApi(`/test`, {
        params: {page : page}
    })
}

export function fetchBoard(id) {
    return callApi(`/test/${id}`)
}
export function modifyBoard(id, data) {
    return callApi(`/test/${id}`, {
        method: 'PATCH',
        data
    })
}

export function removeBoard(id) {
    return callApi(`/test/${id}`, {
        method: 'DELETE',
    })
}
export function registerBoard(data) {
    return callApi(`/test`, {
        method: 'POST',
        data
    })
}