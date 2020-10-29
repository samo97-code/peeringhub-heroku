const jwt = require('jsonwebtoken');
const { JWT_ID, JWT_ALGORITHM, JWT_EXPIRATION, JWT_KEY } = require('../config/config');

 const signToken = (payload) => {
    return jwt.sign(payload, JWT_KEY, {
        jwtid: JWT_ID,
        expiresIn: JWT_EXPIRATION,
        algorithm: JWT_ALGORITHM
    });
};

 const forgetToken = (payload) => {
    return jwt.sign(payload, JWT_KEY, {
        jwtid: JWT_ID,
        expiresIn: JWT_EXPIRATION,
        algorithm: JWT_ALGORITHM
    });
};

 const getAuthTokenContent = (token) => {
    if (!token) {
        throw new Error('no-token');
    }

    const [type, content] = token.split(' ');

    if (type !== 'Bearer') {
        throw new Error('invalid-token-type');
    }

    try {
        return jwt.verify(content, JWT_KEY);
    } catch (e) {
        throw new Error('invalid-token');
    }
};

module.exports = {
    signToken,forgetToken,getAuthTokenContent
}