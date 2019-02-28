const db = require('../db/config');

const transactionModels = {};

transactionModels.findAll = () => {
  return db.query(`SELECT * FROM transactions`);
};

transactionModels.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM transactions
    WHERE transactions.id = $1
  `,
    [id]);
};

transactionModels.create = transactions => {
    return db.one(
      `
       INSERT INTO transactions
       (posting_date, location, category, amount)
       VALUES ($/posting_date/, $/location/, $/category/, $/amount/)
       RETURNING *
      `, transactions);
};

transactionModels.update = (transactions, id) => {
  return db.one(
    `
    UPDATE transactions SET
      posting_date = $1,
      location = $2,
      category = $3,
      amount = $4
    WHERE id = $5
    RETURNING *
  `,
    [transactions.posting_date, transactions.location, transactions.category, transactions.amount, id]
  );
};

transactionModels.destroy = id => {
  return db.none(
    `
    DELETE FROM transactions
    WHERE id = $1
  `,
    [id]
  );
};
module.exports = transactionModels;
