import fs from 'node:fs';

async function getNames() {
    return await fs.promises.readFile('names.txt', 'utf8');
}

async function addName(name){
    const names = await getNames();
    await fs.promises.writeFile('names.txt', names + '\n' + name);
}

// Function to handle the delete request
async function deletename(nameToDelete,req,res) {

// Read the list of names
let names = await getNames();

// Check if the name exists
if (!names.includes(nameToDelete)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`Name "${nameToDelete}" not found.`);
    return;
}

// convert string to array
names = names.split('\n');

// Filter out the name to delete
names = names.filter(name => name !== nameToDelete);

// Write the updated list back to the file
await fs.promises.writeFile('names.txt', names.join('\n'));
}

export {getNames,addName,deletename}