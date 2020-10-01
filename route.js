import {addNewUser, getContact, getContactWithId, updateContact, deleteCotnact, reset, login} from "./controler/crmControler"

const routes = (app) => {

    // how does the syntax work
    // next is for express
    // which allows to do the next function after the first one
    app.route('/signup')
        .get(getContact)
        .post(addNewUser)
    
    app.route('/login')
        .post(login)
    // and example to test the URL http://localhost:8080/contact/5f4866ac6d1f641e256d0451
    // I thought it would be http://localhost:8080/contact?contactID=5f4866ac6d1f641e256d0451

    // that one is for sending paramethers for "/contact" route
    app.route('/contact/:contactID')
        .get(getContactWithId)

        .put(updateContact)

        .delete(deleteCotnact);

    app.route('/check')
        .get((req,res,next) => {
            console.log("hello")
            next();
        },(req,res) => 
            res.send("checking middleware"))


    app.route('/reset')
    .delete(reset)
}
export default routes;

