var source = document.querySelector("#listTemplate").innerHTML;
var template = Handlebars.compile(source);

function makingItemList() {
    for (item of PAGE_DATA.items) {
        if (item.name === "Car") {
            var html = template({
                name: item.name,
                price: item.price,
                inStock: item.inStock
            });
            document.querySelector("#carListLocation").innerHTML = html;
        } else if (item.name === "Truck") {
            var html = template({
                name: item.name,
                price: item.price,
                inStock: item.inStock
            });
            document.querySelector("#truckListLocation").innerHTML = html;
        } else if (item.name === "Motorcycle") {
            var html = template({
                name: item.name,
                price: item.price,
                inStock: item.inStock
            });
            document.querySelector("#motorcycleListLocation").innerHTML = html;
        }
    }
}

makingItemList();

function carRentButton() {
    for (item of PAGE_DATA.items) {
        if (item.name === "Car") {
            if (item.inStock > 0) {
                var html = template({
                    name: item.name,
                    price: item.price,
                    inStock: (item.inStock -= 1)
                });
                document.querySelector("#carListLocation").innerHTML = html;
            } else {
                var html = template({
                    name: item.name,
                    price: item.price,
                    inStock: 0
                });
                document.querySelector("#carListLocation").innerHTML = html;
            }
        }
    }
}

document
    .querySelector("#carListLocation")
    .addEventListener("click", carRentButton);

function truckRentButton() {
    for (item of PAGE_DATA.items) {
        if (item.name === "Truck") {
            if (item.inStock > 0) {
                var html = template({
                    name: item.name,
                    price: item.price,
                    inStock: (item.inStock -= 1)
                });
                document.querySelector("#truckListLocation").innerHTML = html;
            } else {
                var html = template({
                    name: item.name,
                    price: item.price,
                    inStock: 0
                });
                document.querySelector("#truckListLocation").innerHTML = html;
            }
        }
    }
}

document
    .querySelector("#truckListLocation")
    .addEventListener("click", truckRentButton);

function motorcycleRentButton() {
    for (item of PAGE_DATA.items) {
        if (item.name === "Motorcycle") {
            if (item.inStock > 0) {
                var html = template({
                    name: item.name,
                    price: item.price,
                    inStock: (item.inStock -= 1)
                });
                document.querySelector(
                    "#motorcycleListLocation"
                ).innerHTML = html;
            } else {
                var html = template({
                    name: item.name,
                    price: item.price,
                    inStock: 0
                });
                document.querySelector(
                    "#motorcycleListLocation"
                ).innerHTML = html;
            }
        }
    }
}

document
    .querySelector("#motorcycleListLocation")
    .addEventListener("click", motorcycleRentButton);

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
        <div class="form-check mr-2">
        <input class="form-check-input" type="radio" name="paymentType" value="option1" checked>
        <label class="form-check-label">
          Cash
        </label>
        </div>
        <div class="form-check mr-2">
          <input class="form-check-input" type="radio" name="paymentType" value="option2">
          <label class="form-check-label">
            Check
          </label>
        </div>
        <div class="form-check">
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
