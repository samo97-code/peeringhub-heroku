const dotenv = require('dotenv');
dotenv.config();

const getEnvKey = (key) => {
    if (process.env[key] === undefined) {
        throw new Error(`Property "${key}" is missing in environment.`);
    }

    return process.env[key];
};

module.exports = {
    // Authentication token
    JWT_ID: getEnvKey('JWT_ID'),
    JWT_KEY: getEnvKey('JWT_KEY'),
    JWT_ALGORITHM: getEnvKey('JWT_ALGORITHM'),
    JWT_EXPIRATION: getEnvKey('JWT_EXPIRATION')
}
