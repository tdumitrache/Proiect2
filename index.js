const root = document.querySelector('#root');
const products = [
    {
        name: 'Iphone XS',
        price: 4500,
        date: '2021/06/12',
        year: '2020',
        imageUrl: 'https://images.unsplash.com/photo-1592821266573-4c773cfc5507?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=325&q=80'
        
    },
    {
        name: 'Huawei P30',
        price: 4000,
        date: '2021/04/07',
        year: '2018',
        imageUrl: 'https://images.unsplash.com/photo-1546706887-a24528987a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        name: 'Samsung S10',
        price: 5000,
        date: '2010/07/23',
        year: '2016',
        imageUrl: 'https://images.unsplash.com/photo-1498661705887-3778d9ecb4ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
    }
];

function getProducts() {
    const localStorageProducts = localStorage.getItem("products");
    const parsedProducts = JSON.parse(localStorageProducts);
    return parsedProducts;
}

function setProducts(products) {
    const stringifiedProducts = JSON.stringify(products);
    localStorage.setItem("products", stringifiedProducts);
}

if (getProducts() === null){
    setProducts(products);
}

function startRendering() {
    const localStorageProducts = getProducts();
    renderProductList(localStorageProducts);
}



window.addEventListener('load', startRendering);

