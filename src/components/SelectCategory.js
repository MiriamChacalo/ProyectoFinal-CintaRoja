import React, { useState } from 'react'
import { Select } from 'antd';

const SelectCategory = (props) => {

    const [category, setCategory] = useState('')

    const { Option } = Select;

    const { getProduct } = props

    const changeCategory = (value) => {
        
        setCategory(value)
        getProduct()
    }

    return (
        <div>
            <h2>{category}</h2>
            <Select
                placeholder="Selecciona categoría"
                onChange={changeCategory}
            >
                <Option value="tops">tops</Option>
                <Option value="zapatos">zapatos</Option>
                <Option value="abrigo">abrigo</Option>
            </Select>
        </div>
    )
}

export default SelectCategory
