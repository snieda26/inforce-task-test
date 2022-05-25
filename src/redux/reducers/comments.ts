

import { IComment } from '../../types/commentInterface';

interface ICommentsState {
    comments: IComment[] | [];
};

const initialState: ICommentsState = {
    comments: []
};

export const commentsReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case "SET_COMMENTS":
            return {
                ...state,
                comments: action.payload.data
            }
        case "ADD_NEW_COMMENT":
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case "DELETE_COMMENT":
            const newComments = state.comments.filter((comment: IComment) => comment.id !== action.payload)
            return {
                ...state,
                comments: newComments
            }


        default:
            return state
    }
}