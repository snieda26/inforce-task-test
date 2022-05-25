import { IComment } from './../../types/commentInterface';

export const setComments = (payload: IComment[]) => {
    return { type: "SET_COMMENTS", payload }
}

export const addNewComment = (payload: IComment) => {
    return { type: "ADD_NEW_COMMENT", payload }
}

export const deleteComment = (payload: number) => {
    return { type: "DELETE_COMMENT", payload }
}