import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render(){
        return <div>
            <h1>JSX-EXERCISES</h1>

            <Welcome name='Annibale'/>
        </div>
    }
}