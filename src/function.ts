function calculateTax(income: number): number {
    if (income > 50_000)
        return income * 1.2;
    return income * 1.2;
    // if you don't set return value, Js returns undefined.
}

function calculateTaxes(income: number, taxYear?: number): number {
    if ((taxYear || 2000) > 50_000)
        return income * 1.2;
    return income * 1.2;
    // if you don't set return value, Js returns undefined.
}
calculateTaxes(30000)

function calculateTaxesOne(income: number, taxYear = 2000): number {
    if (taxYear > 50_000)
        return income * 1.2;
    return income * 1.2;
    // if you don't set return value, Js returns undefined.
}
calculateTaxesOne(30000)