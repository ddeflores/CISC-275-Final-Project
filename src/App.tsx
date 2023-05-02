import React, { useState } from "react";
import "./App.css";
import { CentralItemList } from "./project-components/CentralItemList";
import { ReviewList } from "./project-components/ReviewList";
import { Form } from "react-bootstrap";
<<<<<<< HEAD
import { Button, Row, Col } from "react-bootstrap";
import { Video } from "./Interfaces/VideoInterface";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
=======
import { CreatorList } from "./project-components/CreatorList";
import { WatchList } from "./project-components/WatchList";
import { VIDEOS } from "./allVideos";

export const ItemTypes = {
    VIDEO: "video"
};
>>>>>>> 3f527b31861d2b8186603bf32434021a4a46adb5

function App(): JSX.Element {
    //For user roles
    const [role, setRole] = useState<string>("viewer");

    function updateRole(event: React.ChangeEvent<HTMLSelectElement>) {
        setRole(event.target.value);
    }

<<<<<<< HEAD
    //Actual app
=======
>>>>>>> 3f527b31861d2b8186603bf32434021a4a46adb5
    return (
        <div className="App">
            {/**App Logo and Role Choice*/}
            <div className="App-Logo">
                <span>
                    <img
                        src={require("./video-camera.png")}
                        alt="video camera website logo"
                        height={50}
                    ></img>
                </span>
                <span>Clipped!</span>
                <span>
                    <Form.Group controlId="userRoles">
                        <Form.Label>Choose your role:</Form.Label>
                        <Form.Select value={role} onChange={updateRole}>
                            <option value="viewer">Viewer</option>
                            <option value="creator">Creator</option>
                            <option value="moderator">Moderator</option>
                        </Form.Select>
                    </Form.Group>
                </span>
            </div>
            {/**Current view: moderator, creator, viewer -- default is viewer */}
            <div
                className="reviewList"
                hidden={role !== "moderator"}
                style={{ display: "flex", textAlign: "center" }}
            >
                <h2>Under Review:</h2>
                <ReviewList></ReviewList>
            </div>
            <div
<<<<<<< HEAD
                hidden={role !== "creator"}
                style={{ display: "flex", textAlign: "center" }}
            >
                <div>
                    <div>
                        <Row>
                            <Col>
                                <CentralItemList></CentralItemList>
                            </Col>
                            <Col>
                                <h1>List of Viewers</h1>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div
                className="videoList"
                hidden={role === "moderator" || role === "creator"}
            >
                <h2>Videos:</h2>

                <CentralItemList></CentralItemList>
=======
                className="videoList"
                hidden={role === "creator" || role === "moderator"}
            >
                <h2>Videos:</h2>
                <CentralItemList allVideos={VIDEOS}></CentralItemList>
            </div>
            <div style={{ marginRight: 150, marginTop: 50 }}>
                <h2 hidden={role !== "viewer"}>Watchlist:</h2>
                <div hidden={role !== "viewer"}>
                    <WatchList userVideos={[]}></WatchList>
                </div>
            </div>
            <div hidden={role !== "creator"}>
                <CreatorList></CreatorList>
>>>>>>> 3f527b31861d2b8186603bf32434021a4a46adb5
            </div>
        </div>
    );
}
export default App;
