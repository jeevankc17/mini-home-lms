const crypto = require('crypto');

const generateRandomString = (length) => {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex') // Convert to hexadecimal format
        .slice(0, length); // Return required number of characters
};

const jwtSecret = generateRandomString(32); // Generate a 32-character secret
const jwtRefreshSecret = generateRandomString(32); // Generate a 32-character secret

console.log("JWT_SECRET:", jwtSecret);
console.log("JWT_REFRESH_SECRET:", jwtRefreshSecret);
