import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Kingdom Coders Proposal Modification',
            day: 'March 22nd at 10am',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting with the President',
            day: 'March 24th at 1pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Dance Rehearsals',
            day: 'March 25th at 4pm',
            reminder: false,
        }
    ]
)


// Add Task
const addTask = (task) => {
const id = Math.floor(Math.random() * 1000) + 1

const newTask = { id, ...task}

setTasks([...tasks, newTask])
}

//  Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder - changes the value of the reminder to the !(opposite) of the reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder:
  !task.reminder} : task )
  )
}

// if(&&) ShowAddTask is true perform ... no need for :(else)

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 'No Task to Display'}
    </div>
  );
}

export default App;
