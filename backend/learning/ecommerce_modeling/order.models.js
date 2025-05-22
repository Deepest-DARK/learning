import mongoose from 'mongoose'


const orderItemsSchema = new mongoose.model({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.model({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderItems: {
        type: [orderItems]
    },
    address: {
        type: String,
        required: true
    },
    status:{
        type:String,
        enum : ['PENDING','CANCELLED','DELIVERED'],  // choices
        default:'PENDING'
    }
}, { timestamps: true })

export const Order = mongoose.model('Order', orderSchema)