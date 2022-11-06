const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const lastEditedElement = document.querySelector('#last-modified-time');
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})
const now = moment();

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
lastEditedElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = now.valueOf();// timeStamp
    lastEditedElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes)
})

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value;
    note.updatedAt = now.valueOf();
    lastEditedElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes)
})

removeElement.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
    }
    note = notes.find(function (note) {
        return note.id === noteId
    })
    
    if (note === undefined) {
        location.assign('/index.html')
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body
    lastEditedElement.textContent = generateLastEdited(note.updatedAt);
})