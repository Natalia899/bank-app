import React, { Component } from 'react';

class Transact extends Component {

  deleteTransaction = () => {
    let id = this.props.transaction._id
    this.props.deleteTransaction(id)
  }

   render(){
    return(
      <div className='transaction'>
          <div className='t'>   Amount:   <span className='transactionValue'>{this.props.transaction.amount}</span>  </div>
          <div className='t'>   Vendor:   <span className='transactionValue'>{this.props.transaction.vendor}</span> </div>
          <div className='t'>  Category:  <span className='transactionValue'>{this.props.transaction.category}</span>
          <i id='remove' onClick={this.deleteTransaction} class="material-icons">delete</i> </div>
      </div>
    )
   }
}

export default Transact;