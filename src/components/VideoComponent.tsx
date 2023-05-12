import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDrag } from "react-dnd";
import { Video } from "../interfaces/VideoInterface";
import { relative } from "path";

function VideoComponent({
    name,
    description,
    genre,
    recommended,
    isReported,
    thumbnail,
    wantRecommended,
    likes,
    creator,
    updateCentralList,
    updateModeratorList,
    updateCreatorList,
    updateWatchList,
    deleteCentralVid,
    deleteCreatorVid,
    deleteReviewVid,
    deleteWatchVid,
    approveVid,
    role
}: {
    name: string;
    description: string;
    genre: string;
    recommended: string[];
    isReported: boolean;
    thumbnail: string;
    wantRecommended: boolean;
    likes: number;
    creator: string;
    updateCentralList: (vid: Video) => void;
    updateModeratorList: (vid: Video) => void;
    updateCreatorList: (vid: Video) => void;
    updateWatchList: (vid: Video) => void;
    deleteCentralVid: (vid: Video) => void;
    deleteCreatorVid: (vid: Video) => void;
    deleteReviewVid: (vid: Video) => void;
    deleteWatchVid: (vid: Video) => void;
    approveVid: (vid: Video) => void;
    role: string;
}) {
    const [video, setVideo] = useState<Video>({
        name,
        description,
        genre,
        recommended,
        wantRecommended,
        isReported,
        thumbnail,
        likes,
        creator
    });

    function deleteFromSite(vid: Video) {
        deleteCentralVid(vid);
        deleteCreatorVid(vid);
        deleteReviewVid(vid);
        deleteWatchVid(vid);
    }

    function updateLikes() {
        const newVideo = { ...video, likes: video.likes + 1 };
        setVideo(newVideo);
        updateCentralList(newVideo);
        updateModeratorList(newVideo);
        updateWatchList(newVideo);
        updateCreatorList(newVideo);
    }
    function update() {
        const newVideo = { ...video, wantRecommended: !video.wantRecommended };
        setVideo(newVideo);
    }
    function updateReported() {
        const newVideo = { ...video, isReported: !video.isReported };
        setVideo(newVideo);
        updateCentralList(newVideo);
        updateModeratorList(newVideo);
        updateWatchList(newVideo);
        updateCreatorList(newVideo);
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "VIDEO",
        item: { name: video.name },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    const [show, setShow] = useState<boolean>(false);
    function updateShow() {
        setShow(!show);
    }

    return (
        <div
            ref={drag}
            style={{
                border: isDragging ? "5px solid black" : "0px",
                opacity: isDragging ? "50%" : "100%",
                marginTop: "10px",
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "lightgray",
                borderRadius: "15px"
            }}
        >
            <img
                width={"190px"}
                height={"110px"}
                src={video.thumbnail}
                alt={video.name}
            ></img>
            <div>
                <b>{video.name}</b>
            </div>
            <div>
                <Button onClick={updateShow}>
                    {show === false ? "🔽" : "🔼"}
                </Button>
                {show === true ? (
                    <div>
                        <small style={{ fontWeight: "bold" }}>
                            Description:{" "}
                        </small>
                        <small>{video.description}</small>
                        <div>
                            <small style={{ fontWeight: "bold" }}>
                                Genre:{" "}
                            </small>
                            <small>{video.genre}</small>
                        </div>
                    </div>
                ) : (
                    <span> </span>
                )}
            </div>
            <div style={{ marginTop: "10px" }}>
                <span style={{ marginRight: "5px" }}>
                    <Button
                        onClick={() => {
                            updateReported();
                        }}
                        style={{
                            backgroundColor: "#2a52be",
                            color: "white",
                            border: "2px solid black"
                        }}
                    >
                        Report {video.isReported === true ? "🚩" : " "}
                    </Button>
                </span>
                <span>
                    <Button
                        onClick={() => {
                            updateLikes();
                        }}
                        style={{
                            backgroundColor: "#2a52be",
                            color: "white",
                            border: "2px solid black"
                        }}
                    >
                        👍
                    </Button>
                    {video.likes}
                </span>
                <span style={{ marginLeft: "10px" }}>
                    <Button
                        onClick={() => {
                            update();
                        }}
                        style={{
                            backgroundColor: "#2a52be",
                            color: "white",
                            border: "2px solid black"
                        }}
                    >
                        Recommended
                    </Button>
                    {video.wantRecommended === true ? (
                        <span>
                            <li>{video.recommended[0]}</li>
                            <li>{video.recommended[1]}</li>
                            <li>{video.recommended[2]}</li>
                            <li>{video.recommended[3]}</li>
                        </span>
                    ) : (
                        <span />
                    )}
                </span>
                <span hidden={role !== "moderator"}>
                    <Button
                        onClick={() => {
                            deleteFromSite(video);
                        }}
                    >
                        Delete❌
                    </Button>
                </span>
                <span hidden={role !== "moderator"}>
                    <Button
                        onClick={() => {
                            updateReported();
                            approveVid(video);
                        }}
                    >
                        Reviewed✔️
                    </Button>
                </span>
            </div>
        </div>
    );
}
export default VideoComponent;
