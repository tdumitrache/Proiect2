class Product {
    constructor(name, price, date, year, imageUrl) {
        this.name = name;
        this.price = price;
        this.date = date;
        this.year = year;
        this.imageUrl = imageUrl;
    }
    renderProduct() {
        const productList = document.querySelector('#product-list');
        productList.innerHTML += `
            <li class="product">
            <div>
                <p>Nume: ${this.name}</p>
                <p>Pret: ${this.price}</p>
                <p>Date: ${this.date}</p>
                <p>Year: ${this.year}</p>
            </div>
            <div>
                <img src="${this.imageUrl}" alt="phone image">
            </div>
            <div>
            <i class="far fa-times-circle fa-2x"></i>
            </div>
                
            </li>
        `;
    }
}
