const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const {signToken} = require('../utilities/jwt')
const {Validation} = require('../utilities/validation')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');


const saltRounds = 10;

const validateRequestData = (data)=>{
    let errorMessageArr = []
    errorMessageArr.push(
        Validation('string',true,data.username,null,'username'),
        Validation('password',true,data.password,data.confirm_password,'password'),
        Validation('email',true,data.email,null,'email'),
        Validation('string',true,data.first_name,null,'first name'),
        Validation('string',true,data.last_name,null,'last name')
    )

    let errorMessage = errorMessageArr.filter(Boolean).length ? errorMessageArr.filter(Boolean).join('! ') + '!' : ''

    return errorMessage
}

// Create and Save a new Clec Admin
exports.create = (req, res) => {

    let validateResult = validateRequestData(req.body)
    if (validateResult === ''){
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const user = {
            clec_uuid: uuidv4(),
            username: req.body.username,
            password: hash,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            contact_address: req.body.contact_address,
            contact_suite: req.body.contact_suite,
            contact_city: req.body.contact_city,
            contact_country: req.body.contact_country,
            contact_postal_code: req.body.contact_postal_code,
            company_name: req.body.company_name,
            profile_address: req.body.profile_address,
            profile_suite: req.body.profile_suite,
            profile_city: req.body.profile_city,
            profile_country: req.body.profile_country,
            profile_postal_code: req.body.profile_postal_code,
            state_of_clec_certification: req.body.state_of_clec_certification,
            upload_clec_certification: req.body.upload_clec_certification,
            ocn: req.body.ocn,

        };


        // Save Clec Admin in the database
        User.create(user)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            });
    }else {
        res.status(400).send({
            message: validateResult
        });
        return;
    }


};




exports.login = (req, res) => {

    if (req.params.clec_uuid){
        User.findOne({where: {clec_uuid: req.params.clec_uuid} }).then(user => {
            if (user){
                user.token = signToken({
                    clec_uuid: user.clec_uuid,
                    role: user.role,
                    username: user.username
                })
                res.status(200).send(user)
            }else{
                res.status(503).send({
                    message: 'User Not found'
                });

            }
        }).catch(err => {
                res.status(404).send({
                    error: err.message || 'User Not found' || "Some error occurred while getting the clec user.",
                    error_type: 'string',
                    success: false,
                });
            });
    }

};

