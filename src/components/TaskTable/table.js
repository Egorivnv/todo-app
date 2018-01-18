import React from 'react';
import './table.css';
import TableHeader from './tableHeader';
import TableItem from './tableItem';

class Table extends React.Component {
    
    render () {
        return (<table id='tableId'>
            <TableHeader />
            <tbody id='tableBody'>
            {
                (this.props.items).map( (item) => (<TableItem elem={item} />
                )
            )
            }
            </tbody>
        </table>);
    }
}

export default Table;