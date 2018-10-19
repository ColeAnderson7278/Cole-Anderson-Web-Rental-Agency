function makingItemList() {
    var source = document.getElementById("listTemplate").innerHTML;
    var template = Handlebars.compile(source);
    for (var item of PAGE_DATA.items) {
        var html = template(item);
        document
            .querySelector(".listLocation")
            .insertAdjacentHTML("beforeend", html);
    }
}

makingItemList();

function checkForRentButton() {
    var cards = document.querySelectorAll(".itemCard");
    var buttons = document.querySelectorAll(".rentButton");
    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            if (cards[index].querySelector(".cardStock").innerText > 1) {
                rentItemFunctions(
                    index,
                    cards[index].querySelector(".cardPrice").innerText
                );
            } else if (cards[index].querySelector(".cardStock").innerText > 0) {
                rentItemFunctions(
                    index,
                    cards[index].querySelector(".cardPrice").innerText
                );
                outOfStock(cards, index);
            }
        });
    });
}

checkForRentButton();

function rentItemFunctions(cardIndex, price) {
    removeStock(cardIndex);
    addToTotal(price);
    addToCart();
}

function removeStock(cardIndex) {
    var cards = document.querySelectorAll(".itemCard");
    cards[cardIndex].querySelector(".cardStock").innerHTML =
        cards[cardIndex].querySelector(".cardStock").innerHTML - 1;
}

function addToCart() {
    var inCart = document.querySelector(".shoppingCartNum");
    inCart.innerText = Number(inCart.innerText) + 1;
}

function addToTotal(num) {
    document.querySelector(".totalPriceNum").innerText =
        Number(document.querySelector(".totalPriceNum").innerText) +
        Number(num);
}

function outOfStock(list, index) {
    list[index].querySelector(".rentButton").innerText = "Out of Stock";
    list[index]
        .querySelector(".rentButton")
        .classList.replace("bg-primary", "bg-muted");
    list[index]
        .querySelector(".rentButton")
        .classList.replace("text-light", "text-dark");
}

function turnOnCheckOut() {
    var cartNum = Number(document.querySelector(".shoppingCartNum").innerText);
    if (cartNum > 0) {
        document.querySelector(".checkOutButton").disabled = false;
    } else {
        document.querySelector(".checkOutButton").disabled = true;
    }
}

document.querySelector("body").addEventListener("click", turnOnCheckOut);

function makeForm() {
    var source = document.getElementById("formTemplate").innerHTML;
    var template = Handlebars.compile(source);
    var html = template({});
    document.querySelector(".rentalContainer").innerHTML = html;
}

document.querySelector(".checkOutButton").addEventListener("click", makeForm);

function submitMessage() {
    var choice = confirm(
        `Your order of ${
            document.querySelector(".shoppingCartNum").innerText
        } vehicle(s) for a total of $${
            document.querySelector(".totalPriceNum").innerText
        } per day will now be processed. Please confirm order.`
    );
    if (choice) {
        makeThankYou();
    } else {
        alert(
            "Sorry if there was any problems with our services, but your order has been cancelled. Thanks for your time."
        );
    }
}

function makeThankYou() {
    var firstName = makeCapitalized(document.querySelector(".firstName").value);
    var lastName = makeCapitalized(document.querySelector(".lastName").value);
    var source = document.getElementById("thankYouTemplate").innerHTML;
    var template = Handlebars.compile(source);
    var html = template({
        greeting: `Thank you, ${firstName + " " + lastName}, for your business`,
        orderStatus:
            "Your order is now being processed, and you can be expecting an email containing your order number, the date purchased, and other information regarding your rental."
    });
    document.body.innerHTML = html;
}

function makeCapitalized(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
