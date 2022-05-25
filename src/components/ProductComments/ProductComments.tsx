import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { commentAPI } from '../../api/comments'
import { setComments } from '../../redux/actions/comments'
import { RootState } from '../../redux/store'
import { IComment } from '../../types/commentInterface'
import { CommentItem } from '../CommentItem/CommentItem'
import './ProductComments.scss'

interface ProductCommentsProps {
    productId: number
}

export const ProductComments: FC<ProductCommentsProps> = ({ productId }) => {

    const dispatch = useDispatch()
    const { comments } = useSelector((state: RootState) => state.comments)

    useEffect(() => {
        //@ts-ignore
        commentAPI.getAll().then(({ data }) => dispatch(setComments({ data })))
    }, [])


    return (
        <div>
            {
                comments.filter((comment: IComment) => {
                    return comment.productId === productId
                }).map((comment: IComment) => <CommentItem key={comment.id} commentText={comment.description} id={comment.id} date={comment.date} />)
            }
        </div>
    )
}
