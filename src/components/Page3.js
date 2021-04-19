import React from 'react';

import AddTask from './AddTask';

class Page3 extends React.Component {
    onAddTask = (taskName) => {
        let tasks = this.props.tasks;
        tasks.push({
            title: taskName,
            id: this.props.tasks.length + 1,
            type: 'task',
            column: 'todo'
        });

        this.setState({tasks});
    }

    render() {
        return (
            <div className="container">
                <AddTask onSubmit={this.onAddTask}/>
            </div>
        );
    }
}


export default Page3;