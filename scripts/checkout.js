import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage(){//shortcut for promise
    try{
        //throw 'error1';this is how you create a fake error
        await loadProductsFetch();//await lets us write async code like normal code
        const value = await new Promise((resolve, reject) =>{
            loadCart(() =>{//reject creates an error in the future
                //reject('error');
                resolve('error3');
            });
        });
} catch (error){
    console.log('error, nothing');
}
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();
/*
Promise.all([//instead of doing one promise, you can do both by using all
    new Promise((resolve) =>{
        loadProducts(() =>{
            resolve('value1');
        });
    }),
    new Promise((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    })
]).then(() =>{
    renderOrderSummary();
    renderPaymentSummary();
});
/*
new Promise((resolve) =>{//in a promise, it will run the function immediately
    loadProducts(() =>{
        resolve('value1');
    });

}).then((value) =>{//the value from resolve('value1') gets saved into the then parameter
    return new Promise((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    });
}).then (() =>{
    renderOrderSummary();
    renderPaymentSummary();
});//resolve is similar to done, let us control when to go to next step

/*loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});*/
