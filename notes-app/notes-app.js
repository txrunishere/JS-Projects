const textArea = document.querySelector(".note-text");
const saveBtn = document.querySelector(".save-note");
const noteTitle = document.querySelector(".note-title");
const savedNotes = document.querySelector('.saved-notes');

let notes = [];
// console.log(textArea, saveBtn);

saveBtn.addEventListener("click", () => {

    let content = textArea.value;
    let title = noteTitle.value;

    if (title && content) {
        noteRecive(title, content);
    } else {
        alert('Please fill both fields!!');
    }

});

function noteRecive(title, content) {
    notes.push({ title, content });

    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note'); 

    const h3 = document.createElement('h3');
    const para = document.createElement('p');
    const deleteBtn = document.createElement('button');

    h3.appendChild(document.createTextNode(title));
    para.appendChild(document.createTextNode(content));
    deleteBtn.textContent = "Delete";

    noteDiv.appendChild(h3);
    noteDiv.appendChild(para);
    noteDiv.appendChild(deleteBtn);

    savedNotes.appendChild(noteDiv);

    deleteBtn.addEventListener('click', () => noteDiv.remove());

    textArea.value = "";
    noteTitle.value = "";

    console.log(notes);
}
