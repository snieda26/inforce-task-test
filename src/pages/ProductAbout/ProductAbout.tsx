import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { AddCommentForm, Modal, ProductComments } from '../../components'
import Form from '../../components/Form/Form'
import { RootState } from '../../redux/store'
import './ProductAbout.scss'


export const ProductAbout: FC = () => {
    const [isAddComment, setIsAddComment] = useState<boolean>(false)
    const { product } = useSelector((state: RootState) => state.products)
    const { id } = useParams()



    return (
        <div className="product-about">
            <div className="product-about__wrapper">
                <img src={product.imageUrl ? product.imageUrl : 'https://media.istockphoto.com/photos/question-mark-3d-red-interrogation-point-asking-sign-punctuation-mark-picture-id1023347350'} alt="your product doesn't have an image" />
                <div>
                    <h1 className="product-about__name">{product.name}</h1>
                    <p className="product-about__info">count: {product.count}</p>
                    <p className="product-about__info">height: {product.size.height || 0}</p>
                    <p className="product-about__info">width: {product.size.width || 0}</p>
                    <p className="product-about__info">weight: {product.weight || 0}</p>
                </div>
            </div>

            <Modal isActive={isAddComment} setIsActive={setIsAddComment} >
                {/* @ts-ignore */}
                <Form isEdit={true} productId={+id} setIsActive={setIsAddComment} />
            </Modal>
            <div className="product-about__comments">
                <div className="product-about__btns">
                    <Link to="/">
                        <button>back</button>
                    </Link>
                    <button className="product-about__btn" onClick={() => setIsAddComment(!isAddComment)}>edit product</button>
                </div>
                <ProductComments productId={product.id} />
                <AddCommentForm />
            </div>

        </div>
    )
}
