import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { FiPlayCircle } from "react-icons/fi";

function MyModalVideo(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen}
        videoId={props.videoid}
        onClose={() => setOpen(false)}
      />
      <FiPlayCircle onClick={() => setOpen(true)} className="modal__pay" />
    </React.Fragment>
  );
}

export default MyModalVideo;
