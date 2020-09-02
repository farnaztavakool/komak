import mongoose from 'mongoose'
import {contactSchema} from '../models/crmModels'

import uniqueValidator from 'mongoose-unique-validator'
// Contact is a constructor

// schema is for the structure of the document
// model is the interface for the schema

const User = mongoose.model('User', contactSchema);
const validate = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // test for a match in the string
    return re.test(String(email).toLowerCase)
}
export const addNewUser = (req,res) => {
    
    
    let newUser = new User(req.body)
    
    newUser.save((err,user) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        // alert(user)
        console.log(user)
        res.json(user)
    })
};

export const getContact = (req, res) => {
    User.find({}, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
}

export const getContactWithId = (req, res) => {
    User.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
};

export const updateContact = (req,res) => {
    User.findByIdAndUpdate({_id:req.params.contactID},req.body,{new:true, useFindAndModify: false}, (err,contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
    
};

export const deleteCotnact = (req,res) => {

    // put res.send after the function 
    // run asynchronously and would return the 
    // result object without deleting 
    User.deleteOne({"_id":req.params.contactID}, (err, contact) => {
        res.send('done')})
}

export const reset = (req, res) => {
    User.remove({}, (err) => {
        if (err) {
            res.send(err)
        }
        res.send("deleted all the documents in the collection")
    })
}