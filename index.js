function solution(A, D) {
    let balance = 0;
    const monthlyCardPayments = {};  
    const monthlyCardCost = {};      
  
    for (let i = 0; i < A.length; i++) {
      const amount = A[i];
      const date = D[i];
  
      balance += amount;
  
      const month = date.slice(0, 7);  
  
      if (amount < 0) {
        monthlyCardPayments[month] = (monthlyCardPayments[month] || 0) + 1;
        monthlyCardCost[month] = (monthlyCardCost[month] || 0) + Math.abs(amount);
      }
    }
  
    for (const month in monthlyCardPayments) {
      const payments = monthlyCardPayments[month];
      const cost = monthlyCardCost[month];
      if (payments >= 3 || cost >= 100) {
        continue;  
      }
      balance -= 5;
    }
  
    return balance;
  }