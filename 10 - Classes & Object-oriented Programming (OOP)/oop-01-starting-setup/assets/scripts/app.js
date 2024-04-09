class Product { //Capital case// This is the default object blueprint
    title ='DEFAULT'; //WATCH OUT! THAT IS THE SYNTAX
    imgUrl; //class Field
    description;
    price;
    constructor(title,img,price,des) {
        this.title=title; //class property
        this.imgUrl=img;
        this.price=price;
        this.description=des;

    }
}
//how to create one?
//console.log(new Product()) //a new object have the default value
//{title: 'DEFAULT',imgUrl:undefined, description:undefined, price:undefined}

class ProductItem {
    render(){
        const productEl =document.createElement('li');
        productEl.className ='product-item';
        productEl.innerHTML=`
            <div>
                <img src="${this.product.imgUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>$ ${this.product.price}</h3>
                    <p>${this.product.description}</p> 
                    <button>Add to cart</button>
                </div>
            </div>
            `
        const addToCartButton = productEl.querySelector('button');
        addToCartButton.addEventListener('click',this.addToCart.bind(this)) //first this refers to the addEventListener method
        // Binding it to the class this
        return productEl;
    }
    constructor(product) { // this takes the product object and assign it to ProductItem which refers to (this)
        this.product = product;
    }
    addToCart(){
        console.log(this.product.title +''+ "is added to cart")
    }
    //product;// like that now you can use it

}

class ProductList {
    products =[
        new Product('A Pillow','https://m.media-amazon.com/images/I/51P+okcVHYL.jpg',19.99,'A soft Pillow'),
        new Product('A Carpet','https://m.media-amazon.com/images/I/81GyZXnRB5L._AC_UF894,1000_QL80_.jpg',89.99,'A Carpet')
    ];
    render(){
        const productList = document.createElement('ul');
        productList.className='product-list';
        for (const product of this.products){
            const productItem = new ProductItem(product);
            productList.append(productItem.render());
        }
        return productList;
    };
    // constructor() { //no need because we will use the default values
    // }
}

class ShoppingCart{
    items=[]
    render(){
        const cartEl = document.createElement('section');
        cartEl.innerHTML=`
        <h2>\$${0}</h2>
        <button>Order now</button>
        `;
        cartEl.className = 'cart';
        return cartEl;
    }
}

class App{
    render(){
        const renderHook =document.getElementById('app');
        const shoppingCart = new ShoppingCart();
        const cartEl =shoppingCart.render()
        renderHook.append(cartEl);
        const productList=new ProductList();
        const productListEl = productList.render();
        renderHook.append(productListEl);
    }
}

const app = new App();
app.render();
