import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

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

//  Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder

const toggleReminder = (id) => {
  console.log(id);
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 'No Task to Display'}
    </div>
  );
}

export default App;
