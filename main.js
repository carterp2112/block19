
function getAvgPrice() {
    let prices = document.querySelectorAll(".price");
    let avg = 0;

    for(let i = 0; i < prices.length; i++) {
        if (typeof prices[i].innerHTML === "undefined") {
            continue;
        } else {
            avg += parseInt(prices[i].innerHTML.substring(1));
        }
    }

    avg /= prices.length
    const price = document.getElementById("average-price")
    price.innerHTML = `The average price is currently $${Math.floor(avg)}`;
}