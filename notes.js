console.log('Starting notes.js')

//Core package
const fs = require('fs')

//file path of the file to store notes
const filePath = 'notes.json'

//Function to give in callback the array of object which contains all notes
const fetchNotes = (callback) =>
{
    fs.readFile(filePath, (err, data) =>
    {
        err ? callback([]) : callback(JSON.parse(data))
    })
}

//Function to write an array of notes in the file
const saveNotes = (notes, callback) =>
{
    fs.writeFile(filePath, JSON.stringify(notes), (err) =>
    {
        err ? callback(false) : callback(true)
    })
}

//Function to display all notes
const getAll = () =>
{
    fetchNotes((notes) =>
    {
        for(const note of notes)
        {
            console.log(`====\nTitle: ${note.title}\nBody: ${note.body}`)
        }
    })
}

//Function to add a note
//Can give in callback an error
const addNote = (title, body, callback) =>
{
    fetchNotes((notes) =>
    {
        noteIsExist = notes.filter((note) => { return note.title === title }).length > 0
    
        if(!noteIsExist)
        {
            const note = {
                title,
                body
            }

            notes.push(note)
            saveNotes(notes, (saved) =>
            {
                saved ? callback() : callback('Error when saved')    
            })
        }
        else
        {
            callback('Note already exist')
        }
    })
}

const getNote = (title) =>
{
    console.log('Read:', title)
}

//Function to remove a note
//Can give in callback an error
const removeNote = (title, callback) =>
{
    fetchNotes((notes) =>
    {
        notesFiltered = notes.filter((note) => { return note.title != title })
        if(notesFiltered.length != notes.length)
        {
            saveNotes(notesFiltered, (saved) =>
            {
                saved ? callback() : callback('Error when saved')
            })
        }
        else
        {
            callback('Note not found !')
        }
    })
}

module.exports = {
    getAll,
    addNote,
    getNote,
    removeNote
}