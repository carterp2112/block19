
function getAvgPrice() {
    let prices = document.getElementsByClassName("price");
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

function displayFreelancers() {
    const occupations = ["Janitor", "Day Laborer", "Teacher", "Writer", "Programmer"]
    const names = ["John", "James", "Joe", "Dan", "Anne"]
    let freelancers = []

    for(let i = 0; i <= 5; i++) {
        freelancers.push({cost: Math.floor(Math.random() * (100 - 10) ) + 10,
                          job: occupations[Math.floor(Math.random() * 4)],
                          name: names[Math.floor(Math.random() * 3)]});
    }

    function displayPerson(freelancers) {
        const list = document.createElement("ul");
        list.innerHTML = `<li>${freelancers[Math.floor(Math.random() * 5)].name}</li>\n<li>${freelancers[Math.floor(Math.random() * 5)].job}</li>\n<li class="price">$${freelancers[Math.floor(Math.random() * 5)].cost}</li>`;
        document.getElementById("listings").appendChild(list);
    }
    displayPerson(freelancers);
    getAvgPrice()
}