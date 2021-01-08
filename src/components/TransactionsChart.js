import React from 'react';
import Chart from "react-google-charts"


const TransactionsChart = (props) => {
  const expenses = props.categories.filter(transaction => transaction.expenses < 0)
  const chartData = [['Expense', 'total']]
  for (let i = 0; i < expenses.length; i++) {
    chartData.push([expenses[i]._id, Math.abs(expenses[i].total)])
  }
  return (
    <div className="chart">
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          title: 'My Expenses',
          is3D: true,
        }}
        rootProps={{ 'data-testid': '2' }}
      />

    </div>
  )
}

export default TransactionsChart;