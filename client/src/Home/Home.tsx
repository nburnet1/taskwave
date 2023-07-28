import React from 'react';

import {Card, CardBody, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Col, Row} from "reactstrap";

function Home() {
    return (
        <>
        <Row>
            <Col>
                <Card color={"dark"} inverse fluid>
                    <CardHeader>
                        <h2>
                            Welcome back Noah!
                        </h2>
                    </CardHeader>
                    <CardBody>
                        Pick up where you left off
                        <a className={"normal-link"} href={"/waves"}>
                            <i> Here</i>
                        </a>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card color={"dark"} inverse fluid>
                    <CardHeader>
                        <h3>TaskWave News</h3>
                    </CardHeader>

                        <CardImg className={"home-img"} src={"https://picsum.photos/id/770/1500/1500"} />
                    <CardBody>
                        <CardSubtitle>
                            <h5>TaskWave is now live!</h5>
                        </CardSubtitle>
                        <CardText>
                            TaskWave, a trailblazing software company, is revolutionizing project management with
                            its cutting-edge Agile-like software solutions. Specializing in Agile methodologies,
                            TaskWave empowers teams across industries to streamline workflows,
                            boost productivity, and deliver exceptional results.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
            <Row>
                <Col>
                    <Card color={"dark"} inverse fluid>
                        <CardHeader>
                            <h3>Newest Patch Notes 1.3</h3>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>
        </>

    );
}

export default Home;