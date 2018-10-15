var source = document.querySelector("#listTemplate").innerHTML;
var template = Handlebars.compile(source);

function makingItemList() {
    for (item of PAGE_DATA.items) {
        var html = template({
            name: item.name,
            price: item.price,
            inStock: item.inStock
        });
        document
            .querySelector("#listLocation")
            .insertAdjacentHTML("beforeend", html);
    }
}

makingItemList();

function addToCart() {
    var inCart = document.querySelector("#shoppingCartNum");
    inCart.innerText = Number(inCart.innerText) + 1;
}

document.querySelector("#listLocation").addEventListener("click", addToCart);

function showForm() {
    formTemplate = `<form class="ml-1">
    <h3>Rental Form:</h3>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Name" required>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Address" required>
    </div>
    <div class="form-group">
      <input type="phone" class="form-control" placeholder="Phone Number" required>
    </div>
    <div class="form-group">
      <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" required>
    </div>
    <div class="d-flex">
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
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>`;
    document.querySelector("#purchasePage").innerHTML = formTemplate;
}

document.querySelector("#checkOutButton").addEventListener("click", showForm);
