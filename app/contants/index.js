const admin = 'admin';
const clecs = 'clecs';
const customer = 'customer';

const getUserRole = (type)=>{
    switch (type){
        case type === 'admin':
            return admin;
            break
        case type === 'clecs':
            return clecs;
            break
        case type === 'customer':
            return customer;
            break
    }
}


module.exports = {
    getUserRole
}