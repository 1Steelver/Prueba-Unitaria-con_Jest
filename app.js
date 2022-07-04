
//Receives a dollar amount and returns equivalent amount in Japan Yen 
const fromDollarToYen = (USD) => {
    let JPY = 130.24;
    let USDToJPY = USD * JPY;
    return USDToJPY;
}
//Receives a Euro amount and returns equivalent amount in US Dollar 
const fromEuroToDollar = (EUR) => {
    let USD = 1.2;
    let EURToUSD = EUR * USD;
    return EURToUSD;
}
//Receives a Yen amount and equivalent amount in England Pound 
const fromYenToPound = (JPY) => {
    let GBP = 0.0062;
    let JPYToGBP = JPY * GBP;
    return JPYToGBP
} 
const sum = (a,b) => {
    return a + b
    }
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};