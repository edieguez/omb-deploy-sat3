db = new Mongo().getDB("omb");

db.createCollection("accounts", { capped: false });

db.accounts.insert([
  {
    name: "Jaimito Cartero",
    routingNumber: "1234",
    accountNumber: "9876",
    openDate: "2021-03-28",
    currentBalance: 125,
	dateOfBirth: "1992-10-09",
	accountType: "CHECKING",
  },
  {
    name: "Chente Fernandez",
    routingNumber: "1234",
    accountNumber: "9877",
    openDate: "2020-01-17",
    currentBalance: 0,
	dateOfBirth: "1995-07-19",
	accountType: "SAVINGS",
  },
]);
