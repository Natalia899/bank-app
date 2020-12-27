import React, { Component } from 'react';

class Transaction extends Component {
  constructor() {
    super()
    this.state= {

    }
  }
  deleteTransaction = () => {
    this.props.deleteTransaction(this.props.vender)
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

export default Transaction;