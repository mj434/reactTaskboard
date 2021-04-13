import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

    moveRight = (task) => {

        let taskList = this.props.tasks;
        if (task.column === "todo") {
            task.column = "in-progress";
        }
        else if (task.column === "in-progress") {
            task.column = "review";
        }
        else if (task.column === "review") {
            task.column = "done";
        }
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }

    moveLeft = (task) => {

        let taskList = this.props.tasks;
        if (task.column === "in-progress") {
            task.column = "todo";
        }
        else if (task.column === "review") {
            task.column = "in-progress";
        }
        else if (task.column === "done") {
            task.column = "review";
        }
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }
    /*markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        taskList.splice(taskIndex, 1);
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }*/

    render() {

        const todoItems = this.props.tasks.map(task => {
            if (task.column === "todo") {
                return <TaskItem task={task} key={task.id} moveRight={this.moveRight}/>
            }
            else {return ""}
        });
        const doneItems = this.props.tasks.map(task => {
            if (task.column === "done") {
                return <TaskItem task={task} key={task.id} moveLeft={this.moveLeft} />
            }
            else {return ""}
        });
        const inProgressItems = this.props.tasks.map(task => {
            if (task.column === "in-progress") {
                return <TaskItem task={task} key={task.id} moveLeft={this.moveLeft} moveRight={this.moveRight}/>
            }
            else {return ""}
        });
        const reviewItems = this.props.tasks.map(task => {
            if (task.column === "review") {
                return <TaskItem task={task} key={task.id} moveLeft={this.moveLeft} moveRight={this.moveRight}/>
            }
            else {return ""}
        });


        return (
            <div className="main">
                <ul className="todoList">
                    <li id="listHeading">To Do</li>
                    { todoItems }
                </ul>
                <ul className="inProgressList">
                    <li id="listHeading">In Progress</li>
                    { inProgressItems }
                </ul>
                <ul className="reviewList">
                    <li id="listHeading">Review</li>
                    { reviewItems }
                </ul>
                <ul className="doneList">
                    <li id="listHeading">Done</li>
                    { doneItems }
                </ul>
            </div>
        )
    }
}

export default TaskList;