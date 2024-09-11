function calculateTax(income, expense){
    if(typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || income < expense){
        return "Invalid Input";
    }
    const incomeTax = 0.2;
    const totalIncome = income - expense;
    const calculatedTax = totalIncome * incomeTax;
    return calculatedTax;
}

