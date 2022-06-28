"use strict";
function calculateTax(income) {
    if (income > 50000)
        return income * 1.2;
    return income * 1.2;
}
function calculateTaxes(income, taxYear) {
    if ((taxYear || 2000) > 50000)
        return income * 1.2;
    return income * 1.2;
}
calculateTaxes(30000);
function calculateTaxesOne(income, taxYear = 2000) {
    if (taxYear > 50000)
        return income * 1.2;
    return income * 1.2;
}
calculateTaxesOne(30000);
//# sourceMappingURL=function.js.map