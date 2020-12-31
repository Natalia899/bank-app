import React, { Component } from 'react';
import Category from './Category';

const Categories = (props) =>{
        return (
           <div className='categories'>
               {props.categories.map(c => <Category category={c} />)}
           </div>
        )
    
}

export default Categories;