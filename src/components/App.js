import React from 'react';
import axios from '../../node_modules/axios';

import TaskList from './TaskList';
//import AddTask from './AddTask';
import './App.css';
class App extends React.Component {
    state = {
        tasks: [],
        errorMessage: ''
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response => {
                this.setState({ tasks: response.data });
            }).catch(error => {
            this.setState({ errorMessage: error.message });
        });
    }

    /*onAddTask = (taskName) => {
        let tasks = this.state.tasks;
        tasks.push({
            title: taskName,
            id: this.state.tasks.length + 1,
            type: 'task',
            column: 'todo'
        });

        this.setState({ tasks });
    }*/

    onUpdateTaskList = (newTaskList) => {
        this.setState({ tasks: newTaskList });
    }

    render() {
        return (
            <div className="container">
                <h3 className="heading">Task Board</h3>
                <main>
                    <h5>Grid View</h5>
                    <div id="grid">
                        <TaskList tasks= {this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;