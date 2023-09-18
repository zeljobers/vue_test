const app = Vue.createApp({
    data () {
        return {
            product: "ChatGPTvADS",
            description: "slika jedna ima ovaj kontekst",
            image: "./assets/1.jpg",
            url: "https://www.roadmap.sh",
            inStock: false,
            inventory : 1,
            onSale: true,
            details: ['50% znanje', "30% vestina", "20% da zapamtim mu ime"],
            varijante: [
                {id: 1, ime: "Jovan", prezime: "Jovanović", image: "./assets/1.jpg"},
                {id:2, ime: "Marko", prezime: "Marković", image: "./assets/2.jpg"},

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
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(vImage) {
            this.image = vImage;
        },
        changeSizeStyle(size){
            this.styleSize = {
                'width' : size+'px', 
                'height': size+'px', 
                'background-color': '#344444' 
            };
            return this.styleSize;
        },
    }

})