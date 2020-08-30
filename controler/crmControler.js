import mongoose from 'mongoose'
import {contactSchema} from '../models/crmModels'

// Contact is a constructor
const Contact = mongoose.model('Contact', contactSchema);

export const addNewContact = (req,res) => {

    let newContact = new Contact(req.body)

    newContact.save((err,contact) => {
        if (err) {
            res.send(err );
        }

        res.json(contact)
    })
};

export const getContact = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
}

export const getContactWithId = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
};

export const updateContact = (req,res) => {
    Contact.findByIdAndUpdate({_id:req.params.contactID},req.body,{new:true, useFindAndModify: false}, (err,contact) => {
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
    Contact.deleteOne({"_id":req.params.contactID}, (err, contact) => {
        res.send('done')})
}