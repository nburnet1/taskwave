import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap';
import type {WavesConfig} from "./Waves";
import TaskDetail from "../Tasks/TaskDetail";




function WaveCard(props : WavesConfig){
    function getDateHeader(endDate: Date | undefined, startDate: Date | undefined){
        if(endDate === undefined || startDate === undefined){
            return (
                <>
                    Could not get date
                </>
            )
        }
        return(
            <>
                {endDate +" - "+ startDate}
            </>
        )
    }


    return (
        <>
            {props.waves.map(wave => (
                <>

                    {
                        props.active === wave.isActive ? (
                            <><br/>
                            <Card body color={"dark"} inverse>
                                <CardHeader>
                                    <CardTitle className={"wave-header"}>
                                        <h2>{wave.title}</h2>
                                        <FontAwesomeIcon className={"wave-edit"} size={"lg"} icon={faPenToSquare} />
                                    </CardTitle>
                                <CardBody>
                                    <CardText>
                                        {wave.description}
                                    </CardText>
                                    <CardText>
                                        <center>
                                            {getDateHeader(wave.startDate,wave.endDate)}
                                        </center>
                                    </CardText>
                                </CardBody>
                                </CardHeader>
                                    <TaskDetail tasks={wave.tasks}/>
                            </Card>

                            </>


                        ):(
                            <></>
                        )
                    }
                </>
            ))}
        </>
    )
}

export default WaveCard;