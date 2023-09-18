app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: 
    /*html*/
    `<h1>
    {{ title }}
</h1>
<p>
    {{description}}
</p>
<a :href="url">
    <img :src="image" alt="bruh moment" style="height: 100px;" :class="{'out-of-stock-img':!inStock}">
</a>

<p v-show="inStock">In Stock</p> 


<p v-if="inStock">In Stock</p>
<p v-else>
    Out of stock
</p>

<p v-if="inventory > 10">In stock</p>
<p v-else-if="inventory <=10 && inventory > 0">almost sold out</p>
<p v-else>bruh</p>

<p v-show="onSale">On Sale</p>

<p> Shipping: {{shipping}} </p>
<product-details :details="details"></product-details>

<ul>
    <li v-for="(v, index) in varijante" 
    :key="v.id" 
    @mouseover="updateVariant(index)">{{v.ime}} {{v.prezime}}</li>
</ul>
<ul>
   <p :style="styleExample">yo</p>

    <li v-for="s in sizes" class="size-circle" :style="changeSizeStyle(s)"></li>
</ul>
<button class="button" :class="{'button-disabled': !inStock}" @click="addToCart"  :disabled="!inStock">Add to Cart</button>
        <button @click="cart -= (cart == 0) ? 0 : 1">Throw away from Cart</button>
`, //smetao mu ladno komentar ovde

 data () {
    return {
        product: "ChatGPTvADS",
        description: "slika jedna ima ovaj kontekst",
        selectedVariant : 0,
        url: "https://www.roadmap.sh",
        inventory : 1,
        onSale: true,
        details: ['50% znanje', "30% vestina", "20% da zapamtim mu ime"],
        varijante: [
            {id: 1, ime: "Jovan", prezime: "Jovanović", image: "./assets/1.jpg", quantity : 50},
            {id:2, ime: "Marko", prezime: "Marković", image: "./assets/2.jpg", quantity : 0},

        ],
        sizes : [
            50, 70, 90, 100, 120
        ],
        cart: 0,
        styleExample : { 'background-color' : "#00FF00" },
        styleSize : {
             'width' : 10+'px', 
             'height': 10+'px', 
             'background-color': '#344444' 
        },
        brand : "Vue Mastery",
    }
},
methods: {
    addToCart() {
        this.$emit('add-to-cart', this.varijante[this.selectedVariant].id);
    },
    updateVariant(index) {
        this.selectedVariant = index;
    },
    changeSizeStyle(size){
        this.styleSize = {
            'width' : size+'px', 
            'height': size+'px', 
            'background-color': '#344444' 
        };
        return this.styleSize;
    },
},
computed : {
    title() {

        return `${this.product} ${this.brand} ${(this.onSale) ? 'is on sale' : ''}`;
    },
    image() {
        return this.varijante[this.selectedVariant].image;
    },
    inStock() {
        return this.varijante[this.selectedVariant].quantity;
    },
    shipping() {
        if(this.premium) {
            return 'Free'
        }
        return 2.99
    }
}
})