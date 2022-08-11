const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);

function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Cat 1',
    price: 120,
    image: 'https://images.pexels.com/photos/1441597/pexels-photo-1441597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 2',
    price: 120,
    image: 'https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 3',
    price: 120,
    image: 'https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 4',
    price: 120,
    image: 'https://images.pexels.com/photos/1687831/pexels-photo-1687831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 5',
    price: 120,
    image: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 6',
    price: 120,
    image: 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 7',
    price: 120,
    image: 'https://images.pexels.com/photos/62640/pexels-photo-62640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 8',
    price: 120,
    image: 'https://images.pexels.com/photos/56857/animal-cat-kitten-funny-56857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 9',
    price: 120,
    image: 'https://images.pexels.com/photos/979247/pexels-photo-979247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 10',
    price: 120,
    image: 'https://images.pexels.com/photos/70769/pexels-photo-70769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 11',
    price: 120,
    image: 'https://images.pexels.com/photos/162287/cat-british-shorthair-bkh-thoroughbred-162287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 12',
    price: 120,
    image: 'https://images.pexels.com/photos/905021/pexels-photo-905021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 13',
    price: 120,
    image: 'https://images.pexels.com/photos/271611/pexels-photo-271611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 14',
    price: 120,
    image: 'https://images.pexels.com/photos/709482/pexels-photo-709482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 15',
    price: 120,
    image: 'https://images.pexels.com/photos/419282/pexels-photo-419282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 16',
    price: 120,
    image: 'https://images.pexels.com/photos/3206572/pexels-photo-3206572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 17',
    price: 120,
    image: 'https://images.pexels.com/photos/5200916/pexels-photo-5200916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 18',
    price: 120,
    image: 'https://images.pexels.com/photos/2261566/pexels-photo-2261566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 19',
    price: 120,
    image: 'https://images.pexels.com/photos/3861171/pexels-photo-3861171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Cat 20',
    price: 120,
    image: 'https://images.pexels.com/photos/3629597/pexels-photo-3629597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);