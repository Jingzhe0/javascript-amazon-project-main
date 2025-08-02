import {cart} from "../../data/cart.js";

export function updateCartQuantity(){
         let cartQuantity=0;
          cart.forEach((cartitem)=>{
              cartQuantity+=cartitem.quantity;
          });

          document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

}

export function checkoutQuantity(){
          let cartQuantity=0;
            cart.forEach((cartitem)=>{
                cartQuantity+=cartitem.quantity;
            });
            const CartQuantity=
            document.querySelector('.js-cart-quantity');
            if(CartQuantity){
              CartQuantity.innerHTML = cartQuantity;
            }
            return cartQuantity;
}