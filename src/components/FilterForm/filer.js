import React from 'react';
import './filter.css';
import DateOptions from '../AddTaskForm/dateOptions'

class Filter extends React.Component {

    /*constructor() {
        super();
        this.state = {
            
        }
    }*/



    render () {
                
        return (
            <form id="filterForm">
                <fieldset>
                    <legend>Filter</legend>
                    <label><input type="checkbox" value="true"/>Show completed</label>
                    <span id="felterDataOptions">
                    <DateOptions date={new Date()} text="Data From" />
                    <DateOptions date={new Date()} text="Date To" />
                    </span>
                    <input type="text" id="searchText" placeholder="Text search (title + description)" />
                </fieldset>
            </form>

        );
    }
}

export default Filter;