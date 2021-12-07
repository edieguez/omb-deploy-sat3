db = new Mongo().getDB("omb");

db.createCollection("accounts", { capped: false });

db.accounts.insert([
  {
    name: "Account 1",
    routingNumber: "1234",
    accountNumber: "9876",
    openDate: "2021-03-28",
    currentBalance: 125,
  },
  {
    name: "Account 2",
    routingNumber: "1234",
    accountNumber: "9877",
    openDate: "2020-01-17",
    currentBalance: 0,
  },
]);
