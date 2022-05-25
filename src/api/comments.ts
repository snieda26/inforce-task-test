import { instance } from './instance';
import { urls } from "../configs/urlConfig";
import { IComment } from "../types/commentInterface";

export const commentAPI = {
    getAll: () => instance.get<IComment[]>(urls.comments),
    createNewComment: (data: IComment) => instance.post<IComment>(urls.comments, data),
    deleteComment: (id: number | undefined) => instance.delete(`${urls.comments}/${id}`)
}
