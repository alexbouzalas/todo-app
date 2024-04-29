import { useState } from "react";
import '../Tasks/Task/Task.scss';

function Form({ onAddTask}) {
    const [description, setDescription] = useState('');         //1. State created for manaigng description 
    const [status, setStatus] = useState('open');               //2. State created for managing status 
    const [errorMessage, setErrorMessage] = useState('');
    const handleFormSubmission = (event) => {
       
    event.preventDefault();
    if (description === '') {
        setErrorMessage('Enter a description.');
    }
    else {
        // Add the task.
        onAddTask(description, status);

        // Reset the form state.
        setDescription('')
        setStatus('open');
        setErrorMessage('');
        }
    }
        return (                                              //Function attaches form submission to onSubmit event
<div>
        
          
<div className='addTask'> 
<h2 className="title2">Add a new task:</h2>

   
    <form  onSubmit={handleFormSubmission}>                  
        {errorMessage !== '' && (
        <div>{errorMessage}</div>
        )}

    

    <div>
    <label className='idDesc'>
    Descr: <input className="form"
    type='text'
    maxLength={150}
    value={description}
    onChange={(event) => setDescription(event.target.value)}      //3 onChange to update state with the input value for description 
    />
    <br />
    </label>


    <br />

    
    <label className='idDesc'> 
    Status: <select className='dropdown'
            value={status}
            onChange={(event) => setStatus(event.target.value)}    //3onChange to update to the state with input value for status
>           
            <option value='open'>Open</option>
            <option value='completed'>Completed</option>
        </select>
    </label>

    
    </div>
    <br />
    <button className='button-17'>Add</button>
    </form>
</div>
</div>
    );
}
export default Form;