var source = document.querySelector(".listTemplate").innerHTML;
var template = Handlebars.compile(source);

function makingItemList() {
    for (item of PAGE_DATA.items) {
        var html = template({
            image: item.image,
            name: item.name,
            price: item.price,
            engine: item.engine,
            capacity: item.capacity,
            stock: item.stock
        });
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

function showForm() {
    formTemplate = `<form onSubmit="submitMessage()" class="card m-1 p-2">
    <div class="form-group">
    <h4>Name:</h4>
      <input type="text" class="form-control" placeholder="First Name" required>
      <input type="text" class="form-control" placeholder="Last Name" required>
    </div>
    <div class="form-group">
    <h4>Address:</h4>
      <input type="text" class="form-control" placeholder="Street" required>
      <input type="text" class="form-control" placeholder="City" required>
      <select class="text-muted form-control" placeholder="State" required>
        <option disabled selected>State</option>
        <option>AL</option>
        <option>AK</option>
        <option>AZ</option>
        <option>AR</option>
        <option>CA</option>
        <option>CO</option>
        <option>CT</option>
        <option>DE</option>
        <option>FL</option>
        <option>GA</option>
        <option>HI</option>
        <option>ID</option>
        <option>IL</option>
        <option>IN</option>
        <option>IA</option>
        <option>KS</option>
        <option>KY</option>
        <option>LA</option>
        <option>ME</option>
        <option>MD</option>
        <option>MA</option>
        <option>MI</option>
        <option>MN</option>
        <option>MS</option>
        <option>MO</option>
        <option>MT</option>
        <option>NE</option>
        <option>NE</option>
        <option>NV</option>
        <option>NH</option>
        <option>NJ</option>
        <option>NM</option>
        <option>NY</option>
        <option>NC</option>
        <option>ND</option>
        <option>OH</option>
        <option>OK</option>
        <option>OR</option>
        <option>PA</option>
        <option>RI</option>
        <option>SC</option>
        <option>SD</option>
        <option>TN</option>
        <option>TX</option>
        <option>UT</option>
        <option>VT</option>
        <option>VA</option>
        <option>WA</option>
        <option>WV</option>
        <option>WI</option>
        <option>WY</option>
      </select>
      <input type="text" pattern="[0-9]{5}" class="form-control" placeholder="ZIP Code" required>
      </div>
    <div class="form-group">
        <h4>Phone Number:</h4>
      <input type="text" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" class="form-control" placeholder="Example: 123 123 1234" required>
    </div>
    <div class="form-group">
        <h4>Email:</h4>
        <input type="email" class="form-control" placeholder="Example: myEmail@mail.com" required>
    </div>
    <div>
        <h4>Choose Payment Type:</h4>
        <div class="form-check ml-2">
        <input class="form-check-input" type="radio" name="paymentType" value="option1" checked>
        <label class="form-check-label">
          Cash
        </label>
        </div>
        <div class="form-check ml-2">
          <input class="form-check-input" type="radio" name="paymentType" value="option2">
          <label class="form-check-label">
            Check
          </label>
        </div>
        <div class="form-check ml-2">
          <input class="form-check-input" type="radio" name="paymentType" value="option3">
          <label class="form-check-label">
            Card
          </label>
        </div>
    </div>
    <button type="submit" class="submitButton btn btn-success">Submit</button>
    </form>`;
    document.querySelector(".rentalContainer").innerHTML = formTemplate;
}

document.querySelector(".checkOutButton").addEventListener("click", showForm);

function submitMessage() {
    var choice = confirm(
        `Your order of ${
            document.querySelector(".shoppingCartNum").innerText
        } vehicle(s) for a total of $${
            document.querySelector(".totalPriceNum").innerText
        } per day will now be processed. Please confirm order.`
    );
    if (choice === true) {
        swal("Thank you for your business. Please come again soon.");
    } else {
        alert(
            "Sorry if there was any problems with our services, but your order has been cancelled. Thanks for your time."
        );
    }
}
