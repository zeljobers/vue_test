const app = Vue.createApp({
    data () {
        return {
            product: "ChatGPTvADS",
            description: "slika jedna ima ovaj kontekst",
            image: "./assets/1.jpg",
            url: "https://www.roadmap.sh",
            inStock: true,
            inventory : 1,
            onSale: true,
            details: ['50% znanje', "30% vestina", "20% da zapamtim mu ime"],
            varijante: [
                {id: 1, ime: "Jovan", prezime: "Jovanović", image: "./assets/1.jpg"},
                {id:2, ime: "Marko", prezime: "Marković", image: "./assets/2.jpg"},

            ],
            sizes : [
                "XS", "S", "M", "L", "XL"
            ],
            cart: 0,

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(vImage) {
            this.image = vImage;
        }
    }

})