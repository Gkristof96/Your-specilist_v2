import React from 'react'

const CategoryCard = ({category}) => {
    return (
        <div className='category-card'>
            <img src={category.image} alt={category.name} />
            <h1>{category.name}</h1>
        </div>
    )
}

export default CategoryCard