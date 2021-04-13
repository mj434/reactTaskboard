import React from 'react';

const TaskItem = props => {
    if (props.task.column === "todo") {
        return (
            <li className="list-item">
                <ul>
                    <li className="task-item-title">{props.task.title}</li>
                    <li>ID: {props.task.id}</li>
                    <li>Type: {props.task.type}</li>
                    <li><button type="button"
                            onClick={() => props.moveRight(props.task)}
                            className="btn btn-primary">
                        Start Work &gt;
                    </button></li>
                </ul>
            </li>
        )
    }
    else if (props.task.column === "in-progress") {
        return (
            <li className="list-item">
                <ul>
                    <li className="task-item-title">{props.task.title}</li>
                    <li>ID: {props.task.id}</li>
                    <li>Type: {props.task.type}</li>
                    <li><button type="button"
                            onClick={() => props.moveLeft(props.task)}
                            className="btn btn-primary">
                        &lt; Send Back
                    </button>
                    <button type="button"
                            onClick={() => props.moveRight(props.task)}
                            className="btn btn-primary">
                        Request Review &gt;
                    </button>
                    </li>
                </ul>
            </li>
        )
    }
    else if (props.task.column === "review") {
        return (
            <li className="list-item">
                <ul>
                    <li className="task-item-title">{props.task.title}</li>
                    <li>ID: {props.task.id}</li>
                    <li>Type: {props.task.type}</li>
                    <li><button type="button"
                            onClick={() => props.moveLeft(props.task)}
                            className="btn btn-primary">
                        &lt; More Work Required
                    </button>
                    <button type="button"
                            onClick={() => props.moveRight(props.task)}
                            className="btn btn-primary">
                        Mark Done &gt;
                    </button>
                    </li>
                </ul>
            </li>
        )
    }
    else /*(props.task.column === "done")*/ {
        return (
            <li className="list-item">
                <ul>
                    <li className="task-item-title">{props.task.title}</li>
                    <li>ID: {props.task.id}</li>
                    <li>Type: {props.task.type}</li>
                    <li><button type="button"
                            onClick={() => props.moveLeft(props.task)}
                            className="btn btn-primary">
                        &lt; Request Re-Review
                    </button>
                    </li>
                </ul>
            </li>
        )
    }

};

export default TaskItem;