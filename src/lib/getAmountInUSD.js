export default (expense, currencies) => {
  return expense.amount * currencies.find(currency => currency.id === expense.currency).rate;
}
