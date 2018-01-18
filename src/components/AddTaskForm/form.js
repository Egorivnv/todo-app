import React from 'react';
import './form.css';

class Form extends React.Component {


    render () {
                
        return (
            <form id="taskForm">
                <fieldset>
                    <legend>Add Task</legend>
                    <input type="text" className="title" placeholder="Read Title" />
                    <select id="taskPriority">
                        <option value="">Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <input type='date' id='taskData' />
                    <textarea id="formTextArea" placeholder="Description"/>
                    <div id="addTaskButton"><button type='submit' value='Add'></button></div>
                </fieldset>
            </form>

        );
    }
}



export default Form;