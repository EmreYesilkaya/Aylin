document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Finans Merkezi’ne Hoş Geldiniz!');
  });

  // Döviz Çevirici
function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const exchangeRates = {
      USD: { TRY: 27, EUR: 0.9 },
      EUR: { TRY: 30, USD: 1.1 },
      TRY: { USD: 0.037, EUR: 0.033 }
    };
  
    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
      const rate = exchangeRates[fromCurrency][toCurrency];
      const result = (amount * rate).toFixed(2);
      document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } else {
      document.getElementById("result").innerText = "Kur bilgisi bulunamadı.";
    }
  }
  
  // Kredi Hesaplama
  function calculateLoan() {
    const loanAmount = document.getElementById("loan-amount").value;
    const interestRate = document.getElementById("interest-rate").value / 100 / 12;
    const loanTerm = document.getElementById("loan-term").value;
    const monthlyPayment = (
      (loanAmount * interestRate) /
      (1 - Math.pow(1 + interestRate, -loanTerm))
    ).toFixed(2);
  
    if (!isNaN(monthlyPayment)) {
      document.getElementById("loan-result").innerText = `Aylık Ödeme: ${monthlyPayment} TL`;
    } else {
      document.getElementById("loan-result").innerText = "Lütfen tüm alanları doldurun.";
    }
  }