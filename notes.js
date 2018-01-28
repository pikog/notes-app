console.log('Starting notes.js')

const fs = require('fs')

const filePath = 'notes.json'

const fetchNotes = (callback) =>
{
    fs.readFile(filePath, (err, data) =>
    {
        if(err)
        {
            callback([])
        }
        else
        {
            callback(JSON.parse(data))
        }
    })
}

const saveNotes = (notes, callback) =>
{
    fs.writeFile(filePath, JSON.stringify(notes), (err) =>
    {
        if(err)
        {
            callback(false)
        }
        else {
            callback(true)
        }
    })
}

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

const addNote = (title, body) =>
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
            saveNotes(notes, () =>
            {
                console.log('Note added !')                
            })
        }
        else
        {
            console.log('This note already exist')
        }
    })
}

const getNote = (title) =>
{
    console.log('Read:', title)
}

const removeNote = (title) =>
{
    console.log('Remove:', title)
}

module.exports = {
    getAll,
    addNote,
    getNote,
    removeNote
}