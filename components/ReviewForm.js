app.component('review-form', {
    template:
    /* html */
    //2-way binding with v-model, instead of 1-way with v-bind
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
    
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
    
        <label for="rating"></label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <label for="recommendation">Would you recommend this product?</label>
        <textarea id="recommendation" v-model="recommendation"></textarea>

        <input type="submit" class="button" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommendation: '',
        }
    },
    methods: {
        onSubmit() {
            if (this.name === "" || this.review === "" || this.rating === null) {
                alert('Review is incomplete. Please fill out every field.');
                return ;
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommendation: this.recommendation,
            }
            this.$emit('review-submitted', productReview);
            this.name = "";
            this.review = "";
            this.rating = null;
            this.recommendation = "";
        }
    }
})