import {faFilter, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardTitle, FormGroup, Input, Label } from 'reactstrap';
import MOCK_WAVES from "../MockWaves";
import Wave from './Wave';
import WaveCard from './WaveCard';


interface WavesConfig{
    waves: Wave[];
    active: boolean;
}

function Waves(props : WavesConfig){
    return (
        <>
            <Card body color={"dark"} dark inverse>
            <FormGroup>
                <Label for="exampleSearch">
                    Filter:
                </Label>
                <div className={"wave-filter"}>
                    <Input
                        id={"wave-search"}
                        name="search"
                        placeholder={"Search "+ (props.active ? ("Active") : ("Inactive")) + " Waves"}
                        type="search"
                        size={1}
                    />
                    <FontAwesomeIcon id={"wave-filter-icon"} icon={faFilter} size={"lg"} />
                </div>


            </FormGroup>
            </Card>
            <WaveCard {...props}/>

        </>
    )
}

export default Waves;
export type {WavesConfig};