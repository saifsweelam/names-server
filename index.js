import http from 'node:http';
import { getNames,addName } from './server-functions.js';


const server = http.createServer(async (req, res) => {
    if (req.url === '/names') {
        const names = await getNames();
        res.end(names);
    } else if (req.url === '/add') {
        await addName('Alice');
        res.end('Name added');
    } else {
        res.end('Not found');
    }
});

server.listen(3000);