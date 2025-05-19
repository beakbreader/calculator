function calculateLoan() {
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
  const years = parseFloat(document.getElementById('years').value);
  const payments = years * 12;

  const x = Math.pow(1 + rate, payments);
  const monthly = (amount * x * rate) / (x - 1);

  if (!isNaN(monthly)) {
    const totalPayment = (monthly * payments).toFixed(2);
    const totalInterest = (totalPayment - amount).toFixed(2);

    document.getElementById('results').innerHTML = `
      <p><strong>Monthly Payment:</strong> $${monthly.toFixed(2)}</p>
      <p><strong>Total Payment:</strong> $${totalPayment}</p>
      <p><strong>Total Interest:</strong> $${totalInterest}</p>
    `;
  } else {
    document.getElementById('results').innerHTML = `<p>Please fill in all fields correctly.</p>`;
  }
}
