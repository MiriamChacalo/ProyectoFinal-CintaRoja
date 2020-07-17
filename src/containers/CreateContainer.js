import React from 'react'
import FormProduct from '../components/FormProduct'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const CreateContainer = () => {

    const URL = 'https://ecommerce-b42.firebaseio.com/clothes.json'
    const history = useHistory()

    const createProduct = (article, category, color, price) => {
        const newProduct = { article, category, color, price };
        axios.post(URL, newProduct)
            .then(() => history.push('/'))
            .catch((err) => alert(err))
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <FormProduct createProduct={createProduct} />
            </div>

        </div>
    )
}

export default CreateContainer
