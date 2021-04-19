import React from 'react';
import axios from '../../node_modules/axios';

import TaskList from './TaskList';


class Page1 extends React.Component {
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

    onUpdateTaskList = (newTaskList) => {
        this.setState({ tasks: newTaskList });
    }

    render() {
        return (
            <div className="container">

                <main>
                    <div id="grid">
                        <TaskList tasks= {this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
                    </div>
                </main>
            </div>
        );
    }
}

export default Page1;