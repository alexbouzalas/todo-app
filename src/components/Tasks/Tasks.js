import Task from './Task/Task';
import './Task/Task.scss';
import { CiCircleRemove } from "react-icons/ci";





function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {
    return (
        <>
        <div>
        

    
        </div>

<div className='theseTasks' >
<div>
        <h1 className='title'>These are the tasks:</h1>
        </div>
        {/* Renders each task. */}
        {tasks.map(
            (task, index) => (
                <Task
                    key={index}
                    task={task}
                    onStatusChange={onStatusChange}
                    onTaskRemove={onTaskRemove}
                />
            )
        )}


        {/* Remove Button */}
        
        <div className='clearTasks'>
        <button className='button-17' onClick={onClearTasks}>Clear Tasks <CiCircleRemove />
        </button>
        </div>
        </div>
        </>
        
        
    );
}

export default Tasks;