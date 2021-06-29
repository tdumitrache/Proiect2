root.innerHTML += `
<div class="buttons">
    <button id="sort-by-price">Sorteaza dupa pret</button>
    <button id="sort-by-year">Sorteaza dupa an</button>
    <button id="sort-by-date">Sorteaza dupa data</button>
    <button id="filter">Filtreaza produsele</button>
</div>
`;

function sortPhones(sortType) {
    if (sortType === 'SORT_BY_PRICE') {
            const localStorageProducts = getProducts();
            const sortedArray = localStorageProducts.sort((elem1, elem2) => (elem1.price - elem2.price));
            setProducts(sortedArray);
            renderProductList(sortedArray);
    }
    else if (sortType === 'SORT_BY_YEAR') {
        const localStorageProducts = getProducts();
        const sortedArray = localStorageProducts.sort((elem1, elem2) => (elem1.year - elem2.year));
        setProducts(sortedArray);
        renderProductList(sortedArray);
    }
    else if (sortType === 'SORT_BY_DATE') {
        const localStorageProducts = getProducts();
        const sortedArray = localStorageProducts.sort((elem1, elem2) => {
            const elemArr1 = elem1.date.split('/');
            const elemArr2 = elem2.date.split('/');
            if (Number(elemArr1[0]) === Number(elemArr2[0])) {
                if (Number(elemArr1[1]) === Number(elemArr2[1])) {
                    return Number(elemArr1[2]) - Number(elemArr2[2]);
                }
                else {
                    return Number(elemArr1[1]) - Number(elemArr2[1]);
                }
            }
            else {
                return Number(elemArr1[0]) - Number(elemArr2[0]);
            }
        });
        setProducts(sortedArray);
        renderProductList(sortedArray);
    }
}

function addSortingFunctionality() {
    const sortByPrice = document.querySelector('#sort-by-price');
    sortByPrice.addEventListener('click', function() {
        sortPhones('SORT_BY_PRICE');
    });
    const sortByYear = document.querySelector('#sort-by-year');
    sortByYear.addEventListener('click', function() {
        sortPhones('SORT_BY_YEAR');
    });
    const sortByDate = document.querySelector('#sort-by-date');
    sortByDate.addEventListener('click', function() {
        sortPhones('SORT_BY_DATE');
    });




    const filterButton = document.querySelector('#filter');
    filterButton.addEventListener('click', function(){
        const localStorageProducts = getProducts();
        const sortedArray = localStorageProducts.filter(product => product.price > 4200);
        setProducts(sortedArray);
        renderProductList(sortedArray);
    })
}

window.addEventListener('load', addSortingFunctionality);

window.addEventListener('click', (e) => {
    if (e.target.classList.value === 'far fa-times-circle fa-2x') {
        const phoneName = e.target.parentNode.parentNode.children[0].children[0].innerText.slice(6);
        let arr = getProducts();
        for(let i = 0 ; i < arr.length ; i++) {
            if (arr[i].name === phoneName) {
                arr.splice(i, 1);
                i--;
            }
        }
        setProducts(arr);
        startRendering();
        
    }
});

