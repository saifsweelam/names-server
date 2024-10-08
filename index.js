import http from 'node:http';
import fs from 'node:fs';
import{getNames,addName} from './index2.js'


const server = http.createServer(async (req, res) => {
    if (req.url === '/names') {
        const names = await getNamas();
        res.end(names);
    } else if (req.url === '/add') {
        await addName('Alice');
        res.end('Name added');
    } else {
        res.end('Not found');
    }
});

server.listen(3000);