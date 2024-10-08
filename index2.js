export async function getNames() {
    return await fs.promises.readFile('names.txt', 'utf8');
}

export async function addName(name) {
    const names = await getNamas();
    await fs.promises.writeFile('names.txt', names + '\n' + name);
}