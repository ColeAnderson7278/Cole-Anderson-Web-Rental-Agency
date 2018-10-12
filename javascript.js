var source = document.querySelector("#listTemplate").innerHTML;
var template = Handlebars.compile(source);

function makingItemList() {
    console.log(PAGE_DATA.items);
    for (item of PAGE_DATA.items) {
        var html = template({
            name: item.name,
            price: item.price,
            inStock: item.inStock
        });
        document
            .querySelector("#itemListLocation")
            .insertAdjacentHTML("beforeend", html);
    }
}

makingItemList();
