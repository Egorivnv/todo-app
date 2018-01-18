import React from 'react';
import Form from '../AddTaskForm/form';
import Filter from '../FilterForm/filer';
import Table from '../TaskTable/table'

class App extends React.Component {
    getData() {
        return [
            {done: false, title: 'Do something 1', priority: 'high', date: new Date()},
            {done: true, title: 'Do something 2', priority: 'medium', date: new Date()},
            {done: false, title: 'Do something 3', priority: 'low', date: new Date()},
        ]
        }

    render() {
        return (<div>
            <Form />
            <Filter />
            <Table items={this.getData()}/>
        </div>);
    }
}

export default App;