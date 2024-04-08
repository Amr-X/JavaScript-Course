class Product { //Capital case// This is the default object blueprint
    title ='DEFAULT'; //WATCH OUT! THAT IS THE SYNTAX
    imgUrl; //class Field
    description;
    price;
    constructor(title,img,des,price) {
        this.title=title; //class property
        this.imgUrl=img;
        this.description=des;
        this.price=price
    }
}
//how to create one?
//console.log(new Product()) //a new object have the default value
//{title: 'DEFAULT',imgUrl:undefined, description:undefined, price:undefined}


const productList ={
    // products:[
    //     {title: 'A Pillow',imgUrl:'https://m.media-amazon.com/images/I/51P+okcVHYL.jpg',price:19.99,description:'A soft Pillow'}
    //     ,{title: 'A Carpet',imgUrl:'https://m.media-amazon.com/images/I/81GyZXnRB5L._AC_UF894,1000_QL80_.jpg',price:89.99,description:'A Carpet'}
    //     ] //What if I need to add more products here in this array? I mean like a million products.
        //Here comes OOP in handy.
    products:[
        new Product('A Pillow','https://m.media-amazon.com/images/I/51P+okcVHYL.jpg',19.99,'A soft Pillow'),
        new Product('A Carpet','https://m.media-amazon.com/images/I/81GyZXnRB5L._AC_UF894,1000_QL80_.jpg',89.99,'A Carpet')
    ]
    ,render(){
        const renderHook =document.getElementById('app');
        const productList = document.createElement('ul');
        productList.className='product-list';
        for (const product of this.products){
            const productEl =document.createElement('li');
            productEl.className ='product-item';
            productEl.innerHTML=`
            <div>
                <img   src="${product.imgUrl}" alt="${product.title}">
                <div class="product-item__content">
                    <h2>${product.title}</h2>
                    <h3>${product.price}</h3>
                    <p>${product.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
            `
            productList.append(productEl);
        }
        renderHook.append(productList);
    }
};
productList.render();