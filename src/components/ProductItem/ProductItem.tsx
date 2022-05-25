import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { productsAPI } from '../../api/products'
import { deleteProduct, setProductAbout, setProductsAction } from '../../redux/actions/products'
import { IProduct } from '../../types/productInterface'
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete'
import './ProductItem.scss'

export const ProductItem: FC<{ product: IProduct }> = ({ product }) => {

    const [confirmDelete, setIsConfirmDelete] = useState<boolean>(false)

    const dispatch = useDispatch()


    return (
        <div>
            <ConfirmDelete isActive={confirmDelete} setIsActive={setIsConfirmDelete} productId={product.id} />
            <div className="product">
                <Link to={`/about/${product.id}`}>
                    <div onClick={() => dispatch(setProductAbout(product))} className="product__info">
                        <span className="product__name">
                            {product.name}
                        </span>
                        {product.imageUrl && <img src={product.imageUrl} alt="image" className="product__image" />}
                    </div>
                </Link>

                <button className="product__btn" onClick={() => setIsConfirmDelete(true)}>delete</button>
            </div>
        </div>
    )
}