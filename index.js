import http from 'node:http';
import fs from 'node:fs';

async function getNames() {
    return await fs.promises.readFile('names.txt', 'utf8');
}

async function addName(name) {
    const names = await getNamas();
    await fs.promises.writeFile('names.txt', names + '\n' + name);
}

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