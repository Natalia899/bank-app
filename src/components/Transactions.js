import React, { Component } from 'react';
import Transact from './Transact';

class Transactions extends Component {
    render() {
        return (
            <div className='transactions'>{this.props.allTransactions.map(m => <Transact transaction={m} deleteTransaction={this.props.deleteTransaction} />)} </div>
        )
    }
}

export default Transactions;