import React, { useState } from "react";
import BlackBoard from "./BlackBoard";

export default function VideoInput() {
  const inputRef = React.useRef();

  const [source, setSource] = useState(null);
  const [hasAudio, setHasAudio] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    // Check if the file is a video
    if (file && file.type.startsWith("video/")) {
      const video = document.createElement("video");
      video.src = URL.createObjectURL(file);

      // Wait for metadata to load
      await video.load();

      // Check if the video has an audio track
      setHasAudio(
        video.mozHasAudio || Boolean(video.webkitAudioDecodedByteCount)
      );
      setSource(URL.createObjectURL(file));
    }
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  const renderVideo = () => {
    if (source) {
      return (
        <video
          className="VideoInput_video m-20 p-10 rounded-lg shadow-lg shadow-[#a21caf]"
          width="50%"
          controls
          src={source}
          autoPlay
        />
      );
    }
    return null;
  };

  return (
    <>
      <div className="flex flex-col VideoInput">
        <input
          ref={inputRef}
          className="VideoInput_input"
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4"
        />

        {/* UPLOAD BUTTON */}
        {!source && (
          <button
            className="Upload-button rounded-full my-4 mx-auto"
            onClick={handleChoose}
          >
            Choose
          </button>
        )}

        {!hasAudio && source && (
          <p className="text-red-500 text-base">
            This video does not have audio. Please choose a video with audio.
          </p>
        )}

        {renderVideo()}

        <div className="VideoInput_footer">
          {/* VIDEO PLAYER DISPLAY */}
          {!source && (
            <div className="VideoInput_footer">
              <p className="text-white text-base opacity-50 p-2">
                Click Upload and Choose the Video{" "}
              </p>
              <p className="text-white text-base">Let's Start</p>
            </div>
          )}

          {/* WRITING PAD */}
          <BlackBoard />
        </div>
      </div>
    </>
  );
}
