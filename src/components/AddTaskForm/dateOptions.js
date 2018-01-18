import React from 'react';
import DateList from './dateList'

class DateOptions extends React.Component {

    dataList;

    constructor() {
        super();
        /*this.state = {
            dateValue: 5
        };*/
        this.dataList = new DateList();
    }


    change (event){

        console.log(this.state.dateValue);
        let newDateRange;
        if (event.target.value==="prev"){
            newDateRange = this.dataList.getPrev(this.props.date);
        }
    }

    setDate(e) {
        console.log(e);
    }
    
    render() {
        let dateNext = this.dataList.getNext(this.props.date);
        
        return (
            <select id="taskData" onChange={this.change}>
                <option value="">{this.props.text}</option>
                <option value="prev">...previous</option>
                {dateNext.map((elem)=><option value={elem}>{elem}</option>)}
                <option value="next"><button>next...</button></option>
            </select>
        );
    }
}


export default DateOptions;