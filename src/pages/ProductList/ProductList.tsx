import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAPI } from '../../api/products'
import { Modal, ProductItem } from '../../components'
import Form from '../../components/Form/Form'
import { setProductsAction } from '../../redux/actions/products'
import { RootState } from '../../redux/store'
import { IProduct } from '../../types/productInterface'

import './ProductList.scss'

export const ProductList: FC = () => {

    const [isActiveModal, setIsActiveModal] = useState(false)
    const dispatch = useDispatch()

    const { products } = useSelector((state: RootState) => state.products)

    useEffect(() => {
        productsAPI.getAll().then(({ data }) => dispatch(setProductsAction(data)))
    }, [])



    return (
        <div className='products'>
            <Modal isActive={isActiveModal} setIsActive={setIsActiveModal} children={<Form setIsActive={setIsActiveModal} />} />
            <div className="products__list">
                {
                    products.length ? products.map((product: IProduct) => {
                        return <ProductItem key={product.id} product={product} />
                    }) : <h1>empty</h1>
                }
            </div>
            <button className="products__add" onClick={() => setIsActiveModal(!isActiveModal)}>add product</button>
        </div>
    )
}
