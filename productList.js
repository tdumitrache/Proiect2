root.innerHTML += `
    <h2 id="phones">Telefoane:</h2>
    <ul id="product-list"></ul>
`;



function renderProductList(products) {
    const productList = document.querySelector('#product-list');
    productList.innerHTML = '';
    products.forEach(function (product) {
        const phone = new Product(product.name, product.price, product.date, product.year, product.imageUrl);
        phone.renderProduct();
    });
}