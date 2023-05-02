import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Video } from "../Interfaces/VideoInterface";
import placeholderthumbnail from "../placeholder.jpeg";
import { CentralItemList } from "./CentralItemList";
import { VIDEOS } from "../allVideos";
import { Creator } from "../Interfaces/CreatorInterface";

export function CreatorList({
    currentCreator
}: {
    currentCreator: Creator;
}): JSX.Element {
    const [creator, setCreator] = useState<string>(currentCreator.username);
    const userList: string[] = ["Dan", "James", "Jess"];
    //const [creatorVideos, setCreatorVideos] = useState<Video[]>([]);
    
    const deepCopyVideos = VIDEOS.map((video: Video): Video => ({ ...video }));

    const [uploadMode, setUploadMode] = useState<boolean>(false);
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setUploadMode(event.target.checked);
    }
    const [videoName, setName] = useState<string>("");
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    const [videoDescription, setDescription] = useState<string>("");
    function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    }
    const [videoGenre, setGenre] = useState<string>("");
    function updateGenre(event: React.ChangeEvent<HTMLInputElement>) {
        setGenre(event.target.value);
    }
    const [filterGenre, setFilterGenre] = useState<string>("");
    function updateFilterGenre(event: React.ChangeEvent<HTMLSelectElement>) {
        setFilterGenre(event.target.value);
    }

    const [creator, setCreator] = useState<string>("username");
    function updateCreator(event: React.ChangeEvent<HTMLInputElement>) {
        setCreator(event.target.value);
    }

    const [allCreatedVids, setAllCreatedVids] = useState<Video[]>(VIDEOS);
    const [creatorVideos, setCreatorVideos] = useState<Video[]>([]);

    //uncomment these when implementing upload feature
    function updateCreatorVideos(newVideo: Video) {
        const newCreatorVideos = [...creatorVideos, newVideo];
        setCreatorVideos(newCreatorVideos);
    }

    //fix this
    /*function reorderByName() {
        VIDEOS.sort((a, b) => a.name.localeCompare(b.name));
    }*/

    return (
        <div>
            <div>
                <h2>Hello, {creator}.</h2>
                <Form.Group controlId="formUsername">
                    <Form.Label>Enter a username: </Form.Label>
                    <Form.Control
                        value={creator}
                        onChange={updateCreator}
                    ></Form.Control>
                    <Form.Label>
                        {userList.includes(creator) ? "Welcome " : ""}
                        {userList.includes(creator) ? creator : "Not a creator"}
                        {"!"}
                    </Form.Label>
                </Form.Group>
            </div>
            <div>
                <Row>
                    <Col style={{ columnCount: 2 }}>
                        {creatorVideos.map((video: Video) => (
                            <ul
                                key={video.name}
                                style={{ breakInside: "avoid" }}
                            >
                                <h5>{video.name}</h5>
                                <div>Description: {video.description}</div>
                                Genre: {video.genre}
                                <img
                                    src={placeholderthumbnail}
                                    alt={video.name}
                                ></img>
                            </ul>
                        ))}
                    </Col>
                    <Col>
                        <h1>Creator Videos</h1>
                        <Form.Switch
                            type="switch"
                            id="uploaf-mode-check"
                            label="Enter Upload Mode"
                            checked={uploadMode}
                            onChange={updateMode}
                        />
                        {uploadMode === true ? (
                            <Form.Group controlId="formUserName">
                                <Form.Label>Enter name:</Form.Label>
                                <Form.Control
                                    value={videoName}
                                    onChange={updateName}
                                />
                                <Form.Label>Enter description:</Form.Label>
                                <Form.Control
                                    value={videoDescription}
                                    onChange={updateDescription}
                                />
                                <Form.Label>Choose genre:</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="genres"
                                    onChange={updateGenre}
                                    id="genre-check-music"
                                    label="Music"
                                    value="Music"
                                    checked={videoGenre === "Music"}
                                />
                                <Form.Check
                                    type="radio"
                                    name="genres"
                                    onChange={updateGenre}
                                    id="genre-check-gaming"
                                    label="Gaming"
                                    value="Gaming"
                                    checked={videoGenre === "Gaming"}
                                />
                                <Form.Check
                                    type="radio"
                                    name="genres"
                                    onChange={updateGenre}
                                    id="genre-check-sports"
                                    label="Sports"
                                    value="Sports"
                                    checked={videoGenre === "Sports"}
                                />
                                <Form.Check
                                    type="radio"
                                    name="genres"
                                    onChange={updateGenre}
                                    id="genre-check-comedy"
                                    label="Comedy"
                                    value="Comedy"
                                    checked={videoGenre === "Comedy"}
                                />
                                <Form.Check
                                    type="radio"
                                    name="genres"
                                    onChange={updateGenre}
                                    id="genre-check-education"
                                    label="Education"
                                    value="Education"
                                    checked={videoGenre === "Education"}
                                />
                                <Form.Check
                                    type="radio"
                                    name="genres"
                                    onChange={updateGenre}
                                    id="genre-check-howto"
                                    label="How-To"
                                    value="How-To"
                                    checked={videoGenre === "How-To"}
                                />
                                <Button
                                    onClick={() =>
                                        updateCreatorVideos({
                                            name: videoName,
                                            description: videoDescription,
                                            genre: videoGenre,
                                            recommended: [],
                                            isReported: false,
                                            thumbnail: placeholderthumbnail,
                                            wantRecconmended: false,
                                            likes: 0
                                        })
                                    }
                                >
                                    Upload Video{" "}
                                </Button>
                            </Form.Group>
                        ) : (
                            <span>{""}</span>
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    );
}

/*
 <Col>
                        <h1>Filter videos</h1>
                        <div>
                            <Form.Group controlId="userEmotions">
                                <Form.Label>Filter</Form.Label>
                                <Form.Select
                                    value={filterGenre}
                                    onChange={updateFilterGenre}
                                >
                                    <option value="Music">Music</option>
                                    <option value="Gaming">Gaming</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Education">Education</option>
                                    <option value="How-To">How-To</option>
                                </Form.Select>
                                <Button></Button>
                            </Form.Group>
                        </div>
                    </Col>
videoGenre === "Music"
                                                    ? [
                                                          "The Best Pop Songs from the 2000's",
                                                          "My Favorite Rock and Roll Playlist",
                                                          "Who Deserves Album of the Year in 2023?",
                                                          "Top 10 Artists You’ve Never Heard Of",
                                                          "Why Drake is Overrated"
                                                      ]
                                                    : videoGenre === "Gaming"
                                                    ? [
                                                          "A Look at the New GTA V Update",
                                                          "My Best Call of Duty Edit",
                                                          "This is the Best Minecraft Minigame",
                                                          "Fortnite Pro Tournament Highlights",
                                                          "Unboxing My New Xbox"
                                                      ]
                                                    : videoGenre === "Sports"
                                                    ? [
                                                          "Mets vs Marlins Highlights",
                                                          "Steelers 2023 Season Predictions",
                                                          "Pros and Cons the New MLB Rules",
                                                          "How Jon Rahm Won the Masters Tournament",
                                                          "Day in the Life of a D1 Athlete"
                                                      ]
                                                    : videoGenre === "Comedy"
                                                    ? [
                                                          "Funny Standup Compilation",
                                                          "Impractical Jokers Compilation",
                                                          "The Office Best Moments",
                                                          "Try Not to Laugh",
                                                          "Kevin Hart Best Jokes"
                                                      ]
                                                    : videoGenre === "Education"
                                                    ? [
                                                          "Learn Data Structures in 10 Minutes",
                                                          "Learn Algorithms in 10 Minutes",
                                                          "Beginners Guide to Integrals",
                                                          "How AI Works",
                                                          "Intro to Biology"
                                                      ]
                                                    : videoGenre === "How-To"
                                                    ? [
                                                          "How to Ace a Whiteboard Interview",
                                                          "How to Tie a Tie",
                                                          "How to Write a Better Essay",
                                                          "How to Pick a Lock",
                                                          "How to Cook a Great Steak"
                                                      ]
                                                    :
*/
