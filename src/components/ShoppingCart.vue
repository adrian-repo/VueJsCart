<template>
    <div class="row">
       <h2>{{menuTitle}}</h2>

        <div class="col-6 bg-dark-red text-left">
            <table>
                <tr v-for="product in products">
                    <td>{{product.name}}</td> 
                    <td>{{product.price}}€ /piece</td>
                    <td><button v-on:click='addToCart(product.name, 1, product.price)' class="btn btn-warning">Add to Cart</button></td>
                    </tr>
            </table>  
        </div>
        <div class="col-6 bg-dark-red text-left">
            <h4>{{totalCart == 0 ? 'Please place you order ...' : orderTitle}}</h4>
            <table>
                <tr v-for="cartItem in cart">
                    <td>{{cartItem.name}}</td>
                    <td>x {{cartItem.items}}</td>
                    <td>= {{cartItem.items*cartItem.price}}€</td>
                    <td><button v-on:click='removeOneFromCart(cartItem.name)' class="btn btn-primary">Remove 1</button></td>
                    <td><button v-on:click='trashItemFromCart(cartItem.name)' class="btn btn-primary">Trash</button></td>
                </tr>
                <hr>
                 <button v-show.visible='totalCart !== 0 ? true : false' class="btn btn-info">Total cost: {{totalCart}} € | Total Items: {{totalItems}} | CheckOut</button>
            </table>
        </div>

        
    </div>
    

</template>

<script>
export default {
    name : 'Shopping Cart',
    props: {
       

    },


    data() {
        return {
            menuTitle: 'Menu',
            orderTitle: 'You ordered:',
            products: [
                {  name: 'Pizza Margherita',
                   price: 10,
                   items: 1 },
                {  name: 'Pizza Napoletana',
                   price: 15.25,
                   items: 1 },
                {  name: 'Pizza 4 Stagionne',
                   price: 12.5,
                   items: 1 },
            ],
            cart: [],            
           
        }
    },
    methods: {
           
           addToCart: function (newArticleName, newAmount, newPrice) {

                   const index = this.cart.findIndex((obj => obj.name === newArticleName));
                   if (index>-1) {
                       this.cart[index].items++
                   } else {                    
                        this.cart.push(
                                {name : newArticleName,
                                 price : newPrice,
                                 items : 1,
                                }
                            );
                   }                          
            }, //end of addToCart

           removeOneFromCart: function (newArticleName) {

                   const index = this.cart.findIndex((obj => obj.name === newArticleName));
                   if (index>-1 && this.cart[index].items>1) {
                       this.cart[index].items--
                   } else {    
                        this.cart.splice(this.cart.findIndex(obj => obj.name === newArticleName), 1);                
                   }                          
             
            }, //end of remove from cart

           trashItemFromCart: function (newArticleName) {

                   const index = this.cart.findIndex((obj => obj.name === newArticleName));
                   if (index>-1) {
                       this.cart.splice(this.cart.findIndex(obj => obj.name === newArticleName), 1);                
                   }                          
             
            }, //end of remove from cart




    },//end of methods
    computed: {
        totalCart(){
            let result = 0;
            this.cart.map(element => {
                return result = result + element.items*element.price
                });
            return result;
         },
        totalItems(){
            let result = 0;
            this.cart.map(element => {
                return result = result + element.items
                });
            return result;
        }

    }

}
</script>

<style scoped>
    table, h1, h4, ul {margin-left: 100px;}
    table, td, button, li {padding: 3px}
</style>



