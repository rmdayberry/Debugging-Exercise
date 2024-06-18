const accounts = [
  { id: 1, owner: "Alice", balance: 500 },
  { id: 2, owner: "Bob", balance: 300 },
];

function getAccountById(id) {
  for (const account of accounts) {
    if (account.id == id) {
      return account;
    }
  }
}

function createAccount(newAccountId, newAccountOwner) {
  const account = getAccountById(newAccountId);

  if (!Number.isFinite(newAccountId) || newAccountId <= 0) {
    throw new Error(
      "Invalid account ID. The ID must be a postive finite integer."
    );
  }
  if (account) {
    throw new Error("Account already created");
  }
  if (typeof newAccountOwner !== "string" || newAccountOwner.trim() === "") {
    throw new Error("Invalid Owner. Account owner must be a non-empty string.");
  }
  accounts.push({
    id: newAccountId,
    owner: newAccountOwner,
    balance: 0, //switched this value to a number instead of a string
  });
}

function depositMoney(accountId, amount) {
  const account = getAccountById(accountId);

  if (!account) {
    throw new Error("Account not found");
  }
  if (typeof amount !== "number" || amount <= 0 || !Number.isFinite(amount)) {
    throw new Error(
      "Invalid number for deposit amount. Must be a positive finite number"
    );
  }

  account.balance += amount;
}

function withdrawMoney(accountId, amount) {
  const account = getAccountById(accountId);

  if (!account) {
    throw new Error("Account not found.");
  }
  if (typeof amount !== "number" || amount <= 0 || !Number.isFinite(amount)) {
    throw new Error(
      "Invalid withdrawal amount: The amount must be a positive and finite number."
    );
  }
  if (account.balance < amount) {
    throw new Error("Insufficient funds");
  }

  account.balance -= amount;
}

function transferMoney(fromAccountId, toAccountId, amount) {
  const fromAccount = getAccountById(fromAccountId);
  const toAccount = getAccountById(toAccountId);

  if (!fromAccount) {
    throw new Error("From Account not found.");
  }
  if (!toAccount) {
    throw new Error("To account not found.");
  }

  if (typeof ammount !== "number" || amount <= 0 || !Number.isFinite(amount)) {
    throw new Error(
      "Invalid value for transfer. The amount must be a positive finite number"
    );
  }
  if (fromAccount.balance < amount) {
    throw new Error("Insufficient Funds!");
  }

  toAccount.balance += amount;
  fromAccount.balance -= amount;
}
//tests

// Hints: getAccountById("1");

// createAccount(1, "Alice");
// createAccount("3", "Charlie");
// createAccount(-3, "Charlie");
// createAccount(3, ["Charlie"]);
// createAccount(3, "");
// createAccount(3, "  ");

// depositMoney(1, "300");
// depositMoney(1, -300);
// depositMoney(1, 0);
// depositMoney(1, Infinity);
// depositMoney(4, 100);

// withdrawMoney(1, -100);
// withdrawMoney(1, 0);
// withdrawMoney(1, 501);

// transferMoney(1, 4, 100);
// transferMoney(1, 2, 501);
// transferMoney(1, 2, 100);
