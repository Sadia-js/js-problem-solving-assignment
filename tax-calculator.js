function calculateTax(income, expense){
    if(typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || income < expense){
        return "Invalid Input";
    }
    const totalIncome = income - expense;
    const calculatedTax = totalIncome * 0.2;
    return calculatedTax;
}
