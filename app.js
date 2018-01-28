console.log('Starting app.js')

//NPM package
const yargs = require('yargs')

//Our files
const notes = require('./notes.js')

//Action in function to command arguments
const argv = yargs.argv
switch(argv._[0])
{
    case 'list':
        notes.getAll()
        break
    case 'add':
        notes.addNote(argv.title, argv.body, (err) =>
        {
            err ? console.log(err) : console.log('Note created !')
        })
        break
    case 'read':
        notes.getNote(argv.title)
        break
    case 'remove':
        notes.removeNote(argv.title, (err) =>
        {
            err ? console.log(err) : console.log('Note removed !')
        })
        break
    default:
        console.log("Unknow command")
        break
}