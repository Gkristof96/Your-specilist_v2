import React from 'react'

const CategoryCard = ({category, openProfessionList}) => {
    return (
        <div 
            className='category-card' 
            onClick={() => openProfessionList(category._id)}
        >
            <img src={category.image} alt={category.category} />
            <h1>{category.category}</h1>
        </div>
    )
}

export default CategoryCard