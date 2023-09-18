const app = Vue.createApp({
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
            this.cart += 1
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

            return `${this.product} ${this.brand}`;
        },
        image() {
            return this.varijante[this.selectedVariant].image;
        },
        inStock() {
            return this.varijante[this.selectedVariant].quantity;
        },
    }

})