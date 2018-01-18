import React from 'react';
import './filter.css';

class Filter extends React.Component {

    /*constructor() {
        super();
        this.state = {
            
        }
    }*/

    render() {

        return (
            <form id="filterForm">
                <fieldset>
                    <legend>Filter</legend>
                    <label><input type="checkbox" value="true" />Show completed</label>
                    <span id="felterDataOptions">
                        <div id='filterDate'>
                            <label>Date From: <input type='date' /></label>
                            <label>Date To: <input type='date' /></label>
                        </div>
                    </span>
                    <input type="search" id="searchText" placeholder="Text search (title + description)" />
                </fieldset>
            </form>

        );
    }
}

export default Filter;