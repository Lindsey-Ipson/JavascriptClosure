function createAccount (initialPin, amount = 0) {
  let accountBalance = amount;
  let pin = initialPin;

  return {
    checkBalance (pinAttempt) {
      if (pinAttempt === pin) {
        return `$${accountBalance}`;
      }
      else return 'Invalid PIN.'
    },
    deposit (pinAttempt, depositAmount) {
      if (pinAttempt === pin) {
      accountBalance += depositAmount;
      return `Succesfully deposited $${depositAmount}. Current balance: $${accountBalance}.`
      }
      else return 'Invalid PIN.'
    },
    withdraw (pinAttempt, withdrawalAmount) {
      if (pinAttempt === pin) {
        if (accountBalance > withdrawalAmount) {
          accountBalance -= withdrawalAmount;
          return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${accountBalance}.`
        }
        else return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
      }
      else return 'Invalid PIN.'
    },
    changePin (oldPin, newPin) {
      if (oldPin === pin) {
        pin = newPin;
        return 'PIN successfully changed!';
      }
      else return 'Invalid PIN.'
    }
  };
};

module.exports = { createAccount };