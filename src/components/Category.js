import React, { Component } from 'react';


const Category = (props) => {
    return(
        <div className='category'>
            <span className='categoryValue'>{props.category._id}</span>
            <span className='categoryValue'>{props.category.total}</span>
        </div>
    )
}
   
export default Category;

