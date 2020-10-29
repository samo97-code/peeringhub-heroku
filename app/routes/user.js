

module.exports = app => {
    const user = require("../controllers/user.js");

    var router = require("express").Router();




    // Create a new Tutorial
    router.post("/",user.create);
    router.get("/:clec_uuid",user.login);


    app.use('/admin/clec', router);
};