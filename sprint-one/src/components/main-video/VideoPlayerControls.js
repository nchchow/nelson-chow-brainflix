import React from "react";
import PlayPauseBtn from "./PlayPauseBtn";
import Scrubber from "./Scrubber";
import FullscreenBtn from "./FullscreenBtn";
import VolumeBtn from "./VolumeBtn";

const VideoPlayerControls = (props) => (
	<div className="video-player__controls container">
		<PlayPauseBtn />
		<Scrubber duration={props.duration} />
		<div className="video-player__controls--tools-wrapper">
			<FullscreenBtn />
			<VolumeBtn />
		</div>
	</div>
);

export default VideoPlayerControls;
