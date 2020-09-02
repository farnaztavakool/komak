import mongoose from 'mongoose'
require('mongoose-type-email')
import {isValidPassword} from 'mongoose-custom-validators'
var bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;


mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid'

const Schema = mongoose.Schema;

export const contactSchema = new Schema ({
    
   

    firstName: {
        type: String,
        minlength: [6, 'too short'],
        required: "Enter the firstName"
    },
    lastName: {
        type: String,
        // required: "Enter the LastName"
    },

    email: {
        type: String,
        lowercase:true,
        required: "Enter Email",

        match:[/\S+@\S+\.\S+/,'invalid email'],
    },

    phoneNumber: {
        type: Number,
    },

    date: {
        type: Date,
        default: Date.now
    },

    // shouldn't include characters
    // lowercase letter
    // upper case letter
    // number
    // length min 8
    password: {
        type: String,
        required: [true, 'enter password'],
        validate: {
            validator: (pass)=> {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(pass)
            },
        message: "invalid password"
        }
    }

});

contactSchema.pre('save', function(next) {
    var user = this

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
