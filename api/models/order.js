const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    products: [
        {
            name: {
                type: String,
                require: true
            },
            quantity: {
                type: String,
                require: true
            },
            price: {
                type: String,
                require: true
            },
            image: {
                type: String,
                require: true
            },
        }
    ],
    totalPrice: {
        type: Number,
        require: true
    },
    shippingAddress: {
        name: {
            type: String,
            require: true
        },
        mobileNo: {
            type: String,
            require: true
        },
        houseNo: {
            type: String,
            require: true
        },
        street: {
            type: String,
            require: true
        },
        landmark: {
            type: String,
            require: true
        },
        postalCode: {
            type: String,
            require: true
        }
    },
    paymentMethod: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Order = mongoose.model("Order", orderSchema)

module.exports = Order