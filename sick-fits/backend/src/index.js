require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();


// TODO: Use express to handle cookies JWT
// TODO: Use express to populate current user 

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
        },
    }, 
    deets => {
        console.log(`Server is now running on port ${deets.port}`);
    }
);
