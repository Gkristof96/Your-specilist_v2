import mongoose from 'mongoose'


const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    message: { type: String, required: true },
}, { timestamps: true })

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: '/images/default-profile.png'
    },
    city: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    reviews: [reviewSchema],
    professions: [{
        name: { type: String, required: true }
    }],
    gallery: [ {
        path: { type: String, required: true }
    }]
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User