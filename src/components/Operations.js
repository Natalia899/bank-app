import React, { Component } from 'react';


class Operations extends Component {

  constructor() {
    super()
    this.state = {
      amount: 0,
      vendor: '',
      category: ''
    }
  }
 
 handleInput = ({target}) => {
   let name = target.name
   let value = target.value
   this.setState({ [name]: value })
 }

  addDepositTransaction =() => {
   let newTransaction = {
      amount: this.state.amount,
      vendor: this.state.vendor,
      category: this.state.category
    }
    return this.props.addNewTransaction(newTransaction)
  }

  addWithdrawTransaction =() => {
    let newTransaction = {
       amount: - this.state.amount,
       vendor: this.state.vendor,
       category: this.state.category
     }
     return this.props.addNewTransaction(newTransaction)
   }

  render() {
    return (
      <div className='operations'>
        New transaction:
        <input type='number' className='amount' value={this.state.amount} onChange={this.handleInput} placeholder='amount' name='amount'/>
        <input type='text' className='vendor' value={this.state.vendor} onChange={this.handleInput} placeholder='vendor' name='vendor' />
        <input type='text' className='category' value={this.state.category} onChange={this.handleInput} placeholder='category' name='category' />
        <button onClick={this.addDepositTransaction}>Deposit</button>
        <button onClick={this.addWithdrawTransaction}>Withdraw</button>
      </div>
    )
  }
}

export default Operations;