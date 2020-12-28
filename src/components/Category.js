import React, { Component } from 'react';


const Category = (props) => {
    console.log(props);
    console.log('cat');
    return(
        <div className='category'>
            <span className='categoryValue'>{props.category._id}</span>
            <span className='categoryValue'>{props.category.total}</span>
        </div>
    )
}
   
export default Category;

