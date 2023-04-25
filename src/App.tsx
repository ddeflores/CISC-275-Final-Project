import React, { useState } from "react";
import "./App.css";
import { CentralItemList } from "./project-components/CentralItemList";
import { Form } from "react-bootstrap";

function App(): JSX.Element {
    //For user roles
    const [role, setRole] = useState<string>("Viewer");

    function updateRole(event: React.ChangeEvent<HTMLSelectElement>) {
        setRole(event.target.value);
    }

    //Actual app
    return (
        <div className="App">
            <div className="App-Logo">
                <span>
                    <img
                        src={require("./video-camera.png")}
                        alt="video camera website logo"
                        height={50}
                    ></img>
                </span>
                <span>Clipped!</span>
                <Form.Group controlId="userRole">
                    <Form.Label>Choose your role:</Form.Label>
                    <Form.Select value={role} onChange={updateRole}>
                        <option value="Viewer">Viewer</option>
                        <option value="Creator">Creator</option>
                        <option value="Moderator">Moderator</option>
                    </Form.Select>
                </Form.Group>
                Hello, {role}!
            </div>
            <div className="videoList">
                <CentralItemList></CentralItemList>
            </div>
        </div>
    );
}

export default App;
