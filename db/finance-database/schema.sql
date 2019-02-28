\c finance

CREATE TABLE IF NOT EXISTS transactions (
  id SERIAL PRIMARY KEY NOT NULL,
  posting_date DATE NOT NULL,
  location TEXT NOT NULL,
  category TEXT NOT NULL,
  amount INTEGER
);
