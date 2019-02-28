const Finance = require('../model/transaction-models');

const transactionController = {};

transactionController.index = (req, res) => {
  Finance.findAll()
    .then(transactions => {
      res.json({
        message: 'ok',
        data: transactions,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

transactionController.show = (req, res) => {
  Finance.findById(req.params.id)
    .then(transaction => {
      res.json({
        message: 'ok',
        data: transaction,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

transactionController.create = (req, res) => {
  Finance.create({
    posting_date: req.body.posting_date,
    location: req.body.location,
    category: req.body.category,
    amount: req.body.amount
  })
    .then(transaction => {
      res.json({
        message: 'ok',
        data: transaction,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

transactionController.update = (req, res) => {
  Finance.update(
    {
      posting_date: req.body.posting_date,
      location: req.body.location,
      category: req.body.category,
      amount: req.body.amount
    },
    req.params.id,
  )
    .then(transaction => {
      res.json({
        message: 'ok',
        data: transaction,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

transactionController.destroy = (req, res) => {
  Finance.destroy(req.params.id)
    .then(transaction => {
      res.json({
        message: 'deleted',
        data: transaction,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = transactionController;
