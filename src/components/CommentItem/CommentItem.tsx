import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { commentAPI } from '../../api/comments';
import { deleteComment, setComments } from '../../redux/actions/comments';
import './CommentItem.scss'

interface CommentItemProps {
    commentText: string;
    id: number;
    date: string
}

export const CommentItem: FC<CommentItemProps> = ({ commentText, id, date }) => {

    const dispatch = useDispatch()
    const onDeleteComment = (id: number) => {
        commentAPI.deleteComment(id).then(res => dispatch(deleteComment(id)))
        //@ts-ignore
        commentAPI.getAll().then(({ data }) => dispatch(setComments({ data })))
    }

    return (
        <div className="comment">
            <div className="comment__body">
                <span>{commentText}</span>
                <button onClick={() => onDeleteComment(id)} className="comment__delete">delete</button>
            </div>
            <span>{date}</span>
        </div>
    )
}