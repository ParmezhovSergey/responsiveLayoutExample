
const counter = function () {
   const btns = document.querySelectorAll('.counter__btn');

   btns.forEach(btn => {
      btn.addEventListener('click', function () {
         const direction = this.dataset.direction;
         const inp = this.parentElement.querySelector('.counter__value');
         const currentValue = +inp.value;
         let newValue;

         if (direction === 'plus') {
            newValue = currentValue + 1;
         } else {
            newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;

         }

         inp.value = newValue;
      })
   })
}

counter();

/*------------------корзина----------------------*/


const productBtn = document.querySelectorAll('.shop__product-buy');
const cartProductsList = document.querySelector('.shop__product');
const cart = document.querySelector('.header__basket');
const cartQuantity = document.querySelector('.basket__quantity');
const fullPrice = document.querySelector('.shop__product-price');
let price = 0;






const ramdomId = () => {
   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
   return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
   return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1');
};




const plusFullPrice = (currentPrice) => {
   return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
   return price -= currentPrice;
};

const printFullPrice = () => {
   fullPrice.textContent = `${normalPrice(price)}`;
};







const generateCartProduct = (img, title, price, id) => {
   return `
   <div class="shop__product product__one" data-id="${id}" >
                    <a href="/cart-product.html" class="shop__product-img">
                        <img class="" src="${img}" alt="">
                    </a>
                <div class="shop__product-name">
                    ${title}
                </div>
                <div class="shop__product-price">
                    ${normalPrice(price)} Р
                </div>
                    <a href="#" class="shop__product-buy"> в корзину</a>
            </div>
            </div>
   `;
};

productBtn.forEach(el => {
   el.closest('.shop__product').setAttribute('data-id', ramdomId());
   el.addEventListener('click', (e) => {
      let self = e.currentTarget;
      let parent = self.closest('.shop__product');
      let id = parent.dataset.id;
      let img = parent.querySelector('.shop__product-img').getAttribute('src');
      let title = parent.querySelector('.shop__product-name');
      let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.shop__product-price').textContent));
      

      plusFullPrice(priceNumber);
      console.log(price);
      printFullPrice();

      



      self.disabled = true;
   });
});



