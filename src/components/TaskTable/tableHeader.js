import React from 'react';

class TableHeader extends React.Component {

    render() {
        return (<thead>
            <tr>
                <th>Done</th>
                <th>Title</th>
                <th>Property</th>
                <th>Date</th>
            </tr>
        </thead>);
    }
}

export default TableHeader;