import './Task.scss';
import { AiOutlineDelete } from "react-icons/ai";
import { MdChangeCircle } from "react-icons/md";


function Task(props) {
    const handleStatusClick = () => {
        const id = props.task.id;
        props.onStatusChange(id);
    }

    const handleRemoveClick = () => {
        const id = props.task.id;
        props.onTaskRemove(id);
    }
    
    return (
        <div className="tasks">
        
        <div className='idDesc'>
        <h3>{props.task.description}</h3>
        </div>
        
        <div className='idDesc'> 
        Id: {props.task.id}
        </div>
        
        <div className='status'>
        Status: {props.task.done
        ? 'Completed'
        : 'Open'}
        </div>
        <br />
        
        <div className='button-container'>
        <button class='button-17' onClick={handleStatusClick}>Change Status <MdChangeCircle /></button>
        <button class='button-17' onClick={handleRemoveClick}>Remove Task <AiOutlineDelete /></button>
        <div>

        </div>
        </div>
        </div>

);
}
export default Task;
