import http from 'node:http';
import url from 'node:url';
import { getNames,addName } from './server-functions.js';


const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname.slice(1);  
    const query = parsedUrl.query;

    if (pathname === 'names') {
        const names = await getNames();
        res.end(names);
    } else if (pathname === 'add') {
        if(!query.name) {
            res.end(`Please provide a name,Name not found.`);
        }
        const name = JSON.parse(query.name);
        await addName(name);
        res.end('Name added');
    }else {
        res.end('404 Not Found');
    }
});

server.listen(3000);