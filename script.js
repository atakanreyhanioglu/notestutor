const addBtn = document.getElementById('add')
addBtn.addEventListener('click', () => addNewNote())
const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
    notes.forEach( n => addNewNote(n))
}

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    const notesCount = document.getElementsByClassName('note')

    note.innerHTML = `
     <div class="tools">
        <span class="number">#${notesCount.length + 1}</span>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
     </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `
    const deleteBtn = note.querySelector('.delete')
    const textArea = note.querySelector('textarea')

    textArea.value = text

    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLS()
    })

    document.body.appendChild(note)

    textArea.addEventListener('input', () => {
        updateLS()
    })
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    notesText.forEach(note => notes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}
