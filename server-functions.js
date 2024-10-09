import fs from 'node:fs';

async function getNames() {
    return await fs.promises.readFile('names.txt', 'utf8');
}

async function addName(name){
    const names = await getNames();
    await fs.promises.writeFile('names.txt', names + '\n' + name);
}

export {getNames,addName}