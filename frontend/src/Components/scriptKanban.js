const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

tasks.forEach(task => {
    task.addEventListener('dragstart', dragStart);
});

columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
});

function dragStart() {
    this.classList.add('dragging');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    if (this !== e.target) {
        this.classList.add('over');
    }
}

function dragLeave() {
    this.classList.remove('over');
}

function dragDrop() {
    const draggingTask = document.querySelector('.dragging');
    this.appendChild(draggingTask);
    this.classList.remove('over');
}

document.getElementById("btnCollaborators").addEventListener("click", function() {
  var collaboratorsList = document.getElementById("collaboratorsList");
  if (collaboratorsList.style.display === "none") {
      collaboratorsList.style.display = "block";
  } else {
      collaboratorsList.style.display = "none";
  }
});
