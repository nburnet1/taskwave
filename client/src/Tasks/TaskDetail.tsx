import React from 'react';
import {CardSubtitle, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Task from './Task';
import {faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TaskDetailConfig{
    tasks: Task[];
}

function TaskDetail(tasks: TaskDetailConfig) {
    const [caret, setCaret] = React.useState(true);
    const toggle = () => setCaret(!caret);

    const checkStatusColor = (status: string) => {
        if (status === "New") {
            return "info";
        }
        else if (status === "In Progress") {
            return "warning";
        }
        else if (status === "On Hold") {
            return "danger";
        }
        else if (status === "Completed") {
            return "success";
        }
    }
    return (
        <>
            {caret ? (
                <FontAwesomeIcon icon={faCaretUp} size={"lg"} onClick={toggle}/>
            ):(
                <>
                    <FontAwesomeIcon icon={faCaretDown} size={"lg"} onClick={toggle}/>
                    <ListGroup flush>
                        {tasks.tasks.map(task => (
                            <ListGroupItem color={"dark"} >
                                <ListGroupItemHeading className={"task-header"}>
                                    <CardSubtitle>{task.title}</CardSubtitle>
                                    <CardSubtitle>(#{task.id})</CardSubtitle>
                                </ListGroupItemHeading>
                                <ListGroupItem>
                                    <ListGroupItemText>
                                        {task.description}
                                    </ListGroupItemText>

                                </ListGroupItem>
                                <ListGroupItem color={checkStatusColor(task.status)}>
                                    <ListGroupItemText>
                                        {task.status}
                                    </ListGroupItemText>
                                </ListGroupItem>

                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </>

            )}


        </>


    );
}

export default TaskDetail;