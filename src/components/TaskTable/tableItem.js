import React from 'react';
import './table.css';

 class TableItem extends React.Component {
    render () {
        let item = this.props.elem;
        let isDone = '';
        if (item.done) {
            isDone = <td><input type='checkbox'/></td>;
        } else {
            isDone = <td><input type='checkbox' checked='checked'/></td>;
        }
        return (<tr class='tr'>
                <td>{isDone}</td>
                <td>{item.title}</td>
                <td>{item.priority}</td>
                <td><input type='data' value={(item.date)}/></td>
            </tr>
        );

    }
}

export default TableItem;