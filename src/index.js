import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/AddTaskForm/form";
import Filter from './components/FilterForm/filer'

ReactDOM.render (
    <div>
    <Form />
    <Filter />
    </div>,
     document.getElementById('root')
);