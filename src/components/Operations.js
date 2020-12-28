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
        <input type='number' className='operationValue' value={this.state.amount} onChange={this.handleInput} placeholder='amount' name='amount'/>
        <input type='text' className='operationValue' value={this.state.vendor} onChange={this.handleInput} placeholder='vendor' name='vendor' />
        <input type='text' className='operationValue' value={this.state.category} onChange={this.handleInput} placeholder='category' name='category' />
      
        <a  onClick={this.addDepositTransaction} class="waves-effect waves-light btn">Deposit</a>
        <a onClick={this.addWithdrawTransaction} class="waves-effect waves-light btn">Withdraw</a>
        {/* <button onClick={this.addDepositTransaction}>Deposit</button>
        <button onClick={this.addWithdrawTransaction}>Withdraw</button> */}
      </div>
    )
  }
}

export default Operations;