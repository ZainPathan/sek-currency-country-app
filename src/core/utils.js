export const GetAmountInCurrency = (currencyMap, currencyCode, currencySymbol, amountInSEK) => {
    return ' ' + currencySymbol + ' ' + (currencyMap[currencyCode] * amountInSEK).toFixed(2);
};