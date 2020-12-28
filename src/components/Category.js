import React, { Component } from 'react';


const Category = (props) => {
    console.log(props);
    console.log('cat');
    return(
        <div className='category'>
            <span className='categoryName'>{props.category._id}</span>
            <span className='totalByCategory'>{props.category.total}</span>
        </div>
    )
}
   
export default Category;

