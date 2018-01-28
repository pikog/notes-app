console.log('Starting app.js')

const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
switch(argv._[0])
{
    case 'list':
        notes.getAll()
        break
    case 'add':
        notes.addNote(argv.title, argv.body)
        break
    case 'read':
        notes.getNote(argv.title)
        break
    case 'remove':
        notes.removeNote(argv.title)
        break
    default:
        console.log("Unknow command")
        break
}