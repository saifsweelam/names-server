import http from 'node:http';
import url from 'node:url';
import { getNames,addName,deletename } from './server-functions.js';


const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname.slice(1);  
    const query = parsedUrl.query;
    const request = req;
    const response = res;

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
    }
    else if(pathname === 'delete'){
        if(!query.name) {
            res.end(`Please provide a name to delete.`);
        }
        const name = JSON.parse(query.name);
        await deletename(name,request,response);
        res.end('Name deleted');
    }
    else {
        res.end('404 Not Found');
    }
});

server.listen(3000);