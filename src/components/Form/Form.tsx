import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAPI } from '../../api/products';
import { addNewProduct, setProductAbout, setProductsAction } from '../../redux/actions/products';
import { RootState } from '../../redux/store'
import { IProduct } from '../../types/productInterface'

import './Form.scss'

interface FormProps {
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isEdit?: boolean;
    productId?: number | undefined
}

function Form({ setIsActive, isEdit, productId }: FormProps) {

    const dispatch = useDispatch()


    const lastProduct = useSelector((state: RootState) => state.products.products[state.products.products.length - 1])
    const [formData, setFormData] = useState<IProduct>({
        id: lastProduct ? lastProduct['id'] + 1 : 0,
        name: '',
        imageUrl: '',
        count: 0,
        size: {
            width: 0,
            height: 0,
        },
        weight: ''
    })

    const onSubmitData = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setIsActive(false)
        if (!isEdit) {
            if (formData.name !== '') {
                productsAPI.createNewProduct(formData).then(res => dispatch(addNewProduct({ ...formData })))
                productsAPI.getAll().then(({ data }) => dispatch(setProductsAction(data)))
                return;
            }
        } else {
            if (formData.name !== '') {
                debugger
                productsAPI.edit(productId, formData).then(res => dispatch(setProductAbout(res.data)))
                return;
            }
        }
        alert('cannot set product with empty name')
    }

    return (
        <div>
            <form onSubmit={onSubmitData} className="form">
                <label>Name:
                    <input type='text' placeholder="Enter product name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                    />
                </label>
                <label>Image:
                    <input type='text' placeholder="Enter image url" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, imageUrl: e.target.value })}
                    />
                </label>
                <label>Count:
                    <input type='number' placeholder="Enter count" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, count: +e.target.value })}
                    />
                </label>
                <label>Width:
                    <input type='number' placeholder="Enter width" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, size: { ...formData.size, width: +e.target.value } })}
                    />
                </label>
                <label>Height:
                    <input type='number' placeholder="Enter height" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, size: { ...formData.size, height: +e.target.value } })}
                    />
                </label>
                <label>Weight:
                    <input type='text' placeholder="Enter weight" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, weight: e.target.value })}
                    />
                </label>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Form