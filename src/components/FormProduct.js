import React, { useState } from 'react'

const FormProduct = (props) => {

    const { createProduct } = props

    const [article, setArticle] = useState('')
    const [category, setCategory] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')

    const articleHandler = (e) => {
        setArticle(e.target.value)
    }

    const categoryHandler = (e) => {
        setCategory(e.target.value)
    }

    const colorHandler = (e) => {
        setColor(e.target.value)
    }

    const priceHandler = (e) => {
        setPrice(e.target.value)
    }

    const submitForm = () => {
        if (article !== '' && category !== '' && color !== '' && price !== '') {
            createProduct(article, category, color, price)
            console.log(article, category, color, price)
        } else {
            alert('Debes llenar todos los campos')
        }
    }

    return (
        <div className="col-md-4 center">
            <h2 className="m-3">Nuevo artículo</h2>
            <div className="mt-5 card p-4">
                <div className="form-group">
                    <label htmlFor="article">Artículo</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={articleHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Categoría</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={categoryHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="color">Color</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={colorHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Precio</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={priceHandler}
                    />
                </div>
                <button
                    className="btn btn-secondary"
                    onClick={() => submitForm()}
                >Agregar
            </button>
            </div>
        </div >

    )
}

export default FormProduct
