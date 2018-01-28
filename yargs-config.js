//NPM package
const yargs = require('yargs')

//Yargs configuration function
module.exports = () =>
{

    const titleOptions = {
        describe: 'Title of note',
        demand: true,
        alias: 't'
    }

    const bodyOptions = {
        describe: 'Body of note',
        demand: true,
        alias: 'b'
    }

    return yargs
    .strict()
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('add', 'Add a note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv
}