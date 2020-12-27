import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {
    render() {
        return (
            <div className='transactions'>Transactions: {this.props.allTransactions.map(m => <Transaction transaction={m} deleteTransaction={this.props.deleteTransaction} />)} </div>
        )
    }
}

export default Transactions;