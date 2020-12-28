import React, { Component } from 'react';

class Transact extends Component {
  constructor() {
    super()
    this.state= {

    }
  }
  deleteTransaction = () => {
    let id = this.props.transaction._id
    this.props.deleteTransaction(id)
  }

   render(){
    return(
      <div className='transaction'>
          <span className='amount'>   Amount:  {this.props.transaction.amount} </span>
          <span className='vendor'>   Vendor:  {this.props.transaction.vendor}</span>
          <span className='category'>  Category:  {this.props.transaction.category}</span>
          <span className='delete' onClick={this.deleteTransaction}>-</span>
      </div>
    )
   }
}

export default Transact;