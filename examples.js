


// Get cart

getCart(){
    fetch(window.Shopify.routes.root + 'cart.json')
    .then((response) => response.json())
    .then((cart) => {
      console.log(cart);
        });


// Clear cart

fetch(window.Shopify.routes.root + 'cart/clear.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log(response.json());
  })


  // See product information

  fetch(window.Shopify.routes.root + `products/${handle}.js`)
      .then((response) => response.json())
      .then((product) => {
      console.log(product)
    });

    // Predictive search API

    fetch(window.Shopify.routes.root + "search/suggest.json?q=free_gif&resources[type]=product&resources[options][unavailable_products]=hide&resources[options][fields]=tag")
    .then((response) => response.json())
    .then((suggestions) => {
        console.log(suggestions);
    });

    main-cart-items
    Below line 25
    {% include 'free-gift' %}


    componentz-cart.css

    .cart {
      position: relative;
      display: block;
    }
    
    .checkout-promo-bar {
        background-color: #f6f6f6;
        padding: 25px;
        color: black;
        text-align: center;
        border: 1px solid #000000;
        border-radius: 5px;
    }
    
    .checkout-promo-bar span {
        font-weight: bold;
        text-decoration: underline;
        font-size: 115%;
    }
    
    .pick_gift_heading{
      text-decoration: underline;
      font-weight: bold;
    }
    
    .row {
    }
    
    .column {
      cursor: pointer;
      display: inline-grid;
      margin: 10px;
      justify-content: center;
      width: 120px;
      height: auto;
      padding: 2px
      object-fit: cover;
    }
    
    .column:hover{
      border: 1px dotted #30ACC7;
      border-radius: 5px;
    }
    
    .gift-title{
      display: block;
      font-size: 0.6em;
    }