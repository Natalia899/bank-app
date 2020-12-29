import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import Categories from './components/Categories';
import axios from 'axios'
import 'materialize-css';
import TransactionsChart from './components/TransactionsChart'


class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      categories: []
    }

  }
  async getTransactions() {
    return axios.get("http://localhost:4200/transactions")
  }

  async postTransaction(newTransaction) {
    return await axios.post("http://localhost:4200/transaction", newTransaction)
  }

  async removeTransaction(id) {
    return await axios.delete(`http://localhost:4200/transaction/${id}`)
  }

  async getCategoriesFromDB() {
    return await axios.get("http://localhost:4200/categories")
  }

  getCategories = async () => {
    let categories = await this.getCategoriesFromDB()
    this.setState({ categories }, () => {
      console.log(this.state.categories);
    })

  }

  async componentDidMount() {
    const response = await this.getTransactions()
    let categories = await this.getCategoriesFromDB()

    this.setState({ transactions: response.data, categories: categories.data })
  }

  getTotal() {
    let sum = 0
    for (let i in this.state.transactions) {
      sum += this.state.transactions[i].amount
    }
    return sum
  }

  deleteTransaction = async (id) => {
    const response = await this.removeTransaction(id)
    this.setState({ transactions: response.data })
  }

  addNewTransaction = async (newTransaction) => {
    const response = await this.postTransaction(newTransaction)
    this.setState({ transactions: response.data })
  }

  render() {
    return (
      <Router>
        <div className='mainContainer'>
          <div className='navBar'>
            <Link to="/">Home</Link>
            <Link to="/transactions">My transactions</Link>
            <Link to="/operations">New transaction</Link>
          </div>
          {/* <Route path="/" exact render={() => <TransactionsChart categories={this.state.categories}/>} /> */}
          <Route path="/" exact render={() => <Categories categories={this.state.categories} />} />
          <Route path="/transactions" exact render={() => <Transactions allTransactions={this.state.transactions} deleteTransaction={this.deleteTransaction} />} />
          <Route path="/operations" exact render={() => <Operations allTransactions={this.state.transactions} addNewTransaction={this.addNewTransaction} />} />
          <div className='total'> {this.getTotal() >= 500 ?
            <div className="balance" style={{ color: "green" }}>
              Balance: {this.getTotal()}
            </div> :
            <div className="balance" style={{ color: "red" }}>
              Balance: {this.getTotal()}
            </div>
          }</div>

        </div>
      </Router>
    )
  }
}

export default App;
