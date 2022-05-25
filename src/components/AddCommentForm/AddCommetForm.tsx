import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { commentAPI } from '../../api/comments'
import { RootState } from '../../redux/store'
import { date } from '../../configs/getTime'
import { addNewComment } from '../../redux/actions/comments'

import './AddCommentForm.scss'


export const AddCommentForm: FC = () => {

    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const { id } = useSelector((state: RootState) => state.products.product)


    const addComment = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (description !== '') {
            const newComment = {
                id: Math.random(),
                description,
                date,
                productId: id
            }
            setDescription('')
            commentAPI.createNewComment(newComment).then(({ data }) => dispatch(addNewComment(data)))
        } else {
            alert('your input is empty, pls enter something')
        }

    }



    return (
        <form className="comment-form">

            <input value={description} type="text" placeholder="enter your comment here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
            <button className="comment__add" onClick={addComment}>add comment</button>

        </form>
    )
}
