import React from 'react';
import './form.css';
import DateOptions from './dateOptions';

class Form extends React.Component {

    /*constructor() {
        super();
        this.state = {
            taskData: new Date()
        }
    }*/



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
                    <DateOptions date={new Date()} text="Date" />
                    <textarea id="formTextArea" placeholder="Description"/>
                    <div id="addTaskButton"><button >Add</button></div>
                </fieldset>
            </form>

        );
    }
}



export default Form;