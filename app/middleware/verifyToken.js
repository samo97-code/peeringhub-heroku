const { getAuthTokenContent } = require('../utilities/jwt');


const verifyToken = function async(req, res, next) {
    try {
        getAuthTokenContent(req.headers.authorization || undefined);
        next();
    } catch (e) {
        switch (e.message) {
            case 'no-token':
                throw new Error('no-token');
            case 'invalid-token-type':
                throw new Error('invalid-token-type');
            case 'invalid-token':
                throw new Error('invalid-token');
            default:
                throw e;
        }
    }
}
module.exports = verifyToken;
