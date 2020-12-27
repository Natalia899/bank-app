import React, { Component } from 'react';
import './App.css';
import Operations from './components/Operations';
import Transactions from './components/Transactions';

class App extends Component {
  constructor() {
    super()
    this.state= {
      transactions: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]
    
    }
  }

  getTotal (){
    let sum = 0
    for(let i in this.state.transactions) {
   sum =+ this.state.transactions[i].amount
    }
    return sum
  }

  deleteTransaction = (vendor) => {
   let tempTransactions = [... this.state.transactions]
   let index= tempTransactions.indexOf(vendor)
   tempTransactions.splice(index, 1)
   this.setState({transactions: tempTransactions}, ()=>{
     console.log(this.state.transactions);
   })
  }

  addNewTransaction = (newTransaction) => {
    let tempTransactions = [... this.state.transactions]
    tempTransactions.push(newTransaction)
    this.setState({transactions: tempTransactions}, ()=>{
      console.log(this.state.transactions);
    })
  }

   render(){

    return(
     <div className='mainContainer'>
       <div className='total'>Total balance: {this.getTotal()}</div>
       <Transactions allTransactions={this.state.transactions} deleteTransaction={this.deleteTransaction} />
       <Operations allTransactions={this.state.transactions} addNewTransaction={this.addNewTransaction} />
     </div>
    )
   }
}

export default App;
