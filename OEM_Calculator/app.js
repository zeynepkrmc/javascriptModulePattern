//Storage Controller
const StorageController = (function(){

})();

//Product Controller
const ProductController = (function(){

    //private
    const Product = function(id,name,price){ //constructor
        this.id=id;
        this.name=name;
        this.price=price;
    }

    const data = {
        products : [
            {id:0, name:'Monitor', price: 4999},
            {id:1, name:'Ram', price: 1299},
            {id:2, name:'SSD', price: 2999},
            {id:3, name:'Mouse', price: 2999}
        ],
        selectedProduct:null,
        totalPrice:0
    }

    //public
    return {
        getProducts: function(){
            return data.products;
        },
        getData: function(){
            return data;
        }
    }

})();

//UI Controller
const UIController = (function(){

    const Selectors = {
        productList : "#item-list"
    
    }

    return {
        createProductList: function(products){
            let html='';



            products.forEach(prd => {
                html+=`
                    <tr>
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price}</td>
                        <td class="text-right">
                        <button type="submit" class="btn btn-warning btn-sm">
                        <i class="far fa-edit"></i>
                        </button>
                    </td>
                    </tr>`;
            });
            document.querySelector(Selectors.productList).innerHTML = html;
        }
    }

})();

//App Controller
const App = (function(ProductCtrl, UICtrl){

    return {
        init: function(){
            console.log('App is starting...');
            const products = ProductCtrl.getProducts();
            //console.log(products); products can be seen on the console
            
            //creating list item
            UIController.createProductList(products);
        }
    }
})(ProductController, UIController);

App.init();