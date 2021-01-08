const express = require("express")
const router = express.Router()
const Transaction = require("../models/transaction")

router.get('/transactions', async (req, res) => {
    let transactions = await Transaction.find({})
    res.send(transactions)
})

router.post('/transaction', async (req, res) => {
    let addTransaction = new Transaction({ ...req.body })
    await addTransaction.save()
    let transactions = await Transaction.find({})
    res.send(transactions)
})

router.delete('/transaction/:id', async (req, res) => {
    const { id } = req.params
    await Transaction.findOneAndDelete({ _id: id })
    let transactions = await Transaction.find({})
    res.send(transactions)
})

router.get('/categories', (req, res) => {
    Transaction.aggregate([{
        $group:
        {
            _id: "$category",
            expenses: { $sum: { $cond: [{ '$lt': ['$amount', 0] }, "$amount", 0] } },
            income: { $sum: { $cond: [{ '$gt': ['$amount', 0] }, "$amount", 0] } },
            'total': { $sum: "$amount" }
        }
    }]).exec((error, categories) => res.send(categories))
})

// Transaction.aggregate([
//     {
//         $group: {
//             _id: null,
//             expenses: { $sum: { $cond: [{ '$lt': ['$amount', 0] }, "$amount", 0] } },
//             income: { $sum: { $cond: [{ '$gt': ['$amount', 0] }, "$amount", 0] } },
//             balance: { "$sum": "$amount" }
//         }
//     }]).exec((e, categories) => { res.send(categories) })




module.exports = router