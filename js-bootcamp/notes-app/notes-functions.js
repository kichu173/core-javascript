// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.setAttribute('href', `edit.html#${note.id}`)
    noteEl.appendChild(textEl)

    return noteEl
}

// Sort your notes by one of three ways in dropdown
function sortNotes(notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function(a,b) {
            if (a.updatedAt > b.updatedAt) {// get the recent one first
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'byCreated'){
        return notes.sort(function(a,b) {
            if (a.createdAt > b.createdAt) {// get the recent created one first
                return -1;
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else {
        return notes.sort(function(a,b) {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {// get the alphabetical one first
                return 1;
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        })
    }
}

// Render application notes
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const notesEl = document.querySelector('#notes');
    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach(function (note) {
            const noteEl = generateNoteDOM(note)
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No Notes to display!';
        // To add a style class to element (example: paragraph) created by javascript:
        emptyMessage.classList.add('empty-message');
        notesEl.appendChild(emptyMessage);
    }
}

function generateLastEdited(timeStamp) {
    return `Last edited ${moment(timeStamp).fromNow()}`;
}