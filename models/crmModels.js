import mongoose from 'mongoose'

// schema is an object
const Schema = mongoose.Schema;

export const contactSchema = new Schema ({
    firstName: {
        type: String,
        required: "Enter the firstName"
    },
    lastName: {
        type: String,
        required: "Enter the firstName"
    },

    email: {
        type: String,
        required: "Enter the firstName"
    },

    phoneNumber: {
        type: Number,
    },

    date: {
        type: Date,
        default: Date.now
    }

});