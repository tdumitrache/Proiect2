root.innerHTML += `
    <form id="add-product">
        <div>
            <label for="name">Nume:</label>
            <input type="text" name="name" id="name"/>
        </div>
        <div>
            <label for="price">Pret:</label>
            <input type="number" name="price" id="price"/>
        </div>
        <div>
            <label for="year">Anul aparitiei:</label>
            <input type="number" name="year" id="year"/>
        </div>
        <div>
            <label for="image">URL:</label>
            <input type="text" name="image" id="image"/>
        </div>
        <input type="submit"/>
    </form>
`

function deleteFormInputs(event) {
    event.target.price.value = '';
    event.target.year.value = '';
    event.target.image.value = '';
    event.target.name.value = '';
}

function handleErrorEvent() {
    const error = document.createElement('div');
    const message = document.createElement('p');
    message.innerHTML = 'Please fill in the inputs above...'
    error.append(message);
    error.classList.add('error');

    const form = document.querySelector('form');
    const root = document.querySelector('#root');
    root.insertBefore(error, form);

    setTimeout(function() {
        error.remove();
    }, 2000);
}

function addFormFunctionality() {
    const form = document.querySelector('#add-product');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const phoneName = event.target.name.value;
        const phonePrice = Number(event.target.price.value);
        const releaseYear = Number(event.target.year.value);
        const imageUrl = event.target.image.value;
        const newPhone = new Product(phoneName, phonePrice, new Date().toJSON().slice(0,10).replace(/-/g,'/'), releaseYear, imageUrl);

        if (event.target.name.value === '' || event.target.price.value === '' || event.target.year.value === '' || event.target.image.value === '') {
            handleErrorEvent();
        } else {
            const localStorageProducts = getProducts();
            localStorageProducts.push(newPhone);
            setProducts(localStorageProducts);
            renderProductList(localStorageProducts);
        }

        
        deleteFormInputs(event);
    })
}

window.addEventListener('load', addFormFunctionality);