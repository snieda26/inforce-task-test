import React, { SetStateAction } from 'react'
import { useDispatch } from 'react-redux';
import { productsAPI } from '../../api/products';
import { setProductsAction, deleteProduct } from '../../redux/actions/products';
import './ConfirmDelete.scss'


interface ConfirmDelete {
    productId: number | undefined;
    isActive: boolean;
    setIsActive: React.Dispatch<SetStateAction<boolean>>;
}

function ConfirmDelete({ productId, setIsActive, isActive }: ConfirmDelete) {

    const dispatch = useDispatch()

    const onDeleteItem = () => {
        //@ts-ignore
        productsAPI.delete(productId).then(res => dispatch(deleteProduct(productId)))
        productsAPI.getAll().then(({ data }) => dispatch(setProductsAction(data)))
        setIsActive(false)

    }

    if (!isActive) {
        return null
    }

    return (
        <div className="modal-delete">
            <div className="modal-delete__wrapper">
                <button className="modal-delete__btn" onClick={onDeleteItem}>confirm</button>
                <button className="modal-delete__btn" onClick={() => setIsActive(false)}>cancel</button>
            </div>
        </div>
    )
}

export default ConfirmDelete