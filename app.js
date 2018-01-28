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
    //When we get list of all notes
        notes.getAll()
        break
    case 'add':
    //When we add a note
        notes.addNote(argv.title, argv.body, (err) =>
        {
            err ? console.log(err) : console.log('Note created !')
        })
        break
    case 'read':
    //When we get body of a note in function to title
        notes.getNote(argv.title, (err, note) =>
        {
            err ? console.log(err) : notes.displayNote(note)
        })
        break
    case 'remove':
    //When we remove a note
        notes.removeNote(argv.title, (err) =>
        {
            err ? console.log(err) : console.log('Note removed !')
        })
        break
    default:
        console.log("Unknow command")
        break
}