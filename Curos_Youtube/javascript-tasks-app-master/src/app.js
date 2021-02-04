//Cuando presiono el boton para enviar el formulario, (submit), que ejecute esta funcion
document.getElementById('formTask').addEventListener('submit', saveTask);

//Tenlgo que capturar el evento, e, para poder cancelar lo que hace por defecto, 
//que el que se refresca la pantalla, y se borran los datos
function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  console.log(e);

  //Esto es ya un objeto
  let task = {
    title, //Es lo mismo que poner title: title
    description  //Es lo mismo que poner description: description
  };

  //Si el item tasks es nulo y existe, lo creacmos y el arreglo esta vacio
  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    //Y meto el task dentro del arreglo
    tasks.push(task);
    //Con esta instruccion, ya lo estoy almacenando dentro del localStorage
    //Pero mejor lo vamos a almacenar en forma de String, en lugar de objeto
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    //Y si no es nulo, lo que hago es pasarlo de string al array, y luego le hago 
    //push con la nueva tarea
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  //Cada vez que elimine o cree una tarea, que me liste todas las tareas de nuevo
  getTasks();
  //Vacio el formulario
  document.getElementById('formTask').reset();
  //Cancelo el evento por defecto
  e.preventDefault();
}

function deleteTask(title) {
  //console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  //Cada vez que elimine o cree una tarea, que me liste todas las tareas de nuevo
  getTasks();
}

//Esta funcion es para obtener las tareas y sacarlas en el html
function getTasks() {
  //Lo paso a uun array
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  //Aqui es donde lo voy a meter
  let tasksView = document.getElementById('tasks');
  //Antes de hacer nada lo tengo que limpiar
  tasksView.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `
    <div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>
      `;
  }
}

//Esto lo hago para que una vez que si inicie el documento, me las liste en caso de existir
getTasks();
