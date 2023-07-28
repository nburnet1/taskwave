import React, {useEffect, useState } from "react";
import {Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import Waves from "./Waves";
import Wave from "./Wave";
import Task from "../Tasks/Task";


function WavesPage(){
    const [waves, setWaves] = useState<Wave[]>([]);

    useEffect(() => {
        async function fetchWaves() {
            try {
                const response = await fetch('/api/waves', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                const parsedData = await response.json();

                const parsedDataList: Wave[] = parsedData.map((userData: any) => {
                    return new Wave({
                        id: userData.id,
                        title: userData.title,
                        description: userData.description,
                        tasks: userData.tasks.map((task: any) => {
                            return new Task({
                                id: task.id,
                                title: task.title,
                                description: task.description,
                                status: task.status
                            });
                        }),
                        isActive: userData.isActive,
                        startDate: userData.startDate,
                        endDate: userData.endDate
                    });
                });
                setWaves(parsedDataList);
            } catch (error) {
                console.error('Error fetching waves:', error);
            }
        }

        fetchWaves();
    }, []);


    const [activeWave, setActiveWave] = useState(true);
    const [completedWave, setCompletedWave] = useState(false);

    const toggleTab = (id: string) => {
        if (id === "active-waves") {
            setActiveWave(true);
            setCompletedWave(false);
        }
        else if (id === "completed-waves") {
            setActiveWave(false);
            setCompletedWave(true);
        }
    }
    return (
        <>
        <Row>
            <Col>
                <Nav pills tabs fill>
                    <NavItem>
                        <NavLink onClick={()=>{toggleTab("active-waves")}} id={"active-waves"} className={"wave-tab"} active={activeWave}>
                            Active Waves
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={()=>{toggleTab("completed-waves")}} id={"completed-waves"} className={"wave-tab"} active={completedWave}>
                            Completed Waves
                        </NavLink>
                    </NavItem>
                </Nav>
            </Col>
        </Row>
        <Row>
            <Col>
                <Waves active={activeWave} waves={waves} />
            </Col>
        </Row>
        </>
    );
}

export default WavesPage;