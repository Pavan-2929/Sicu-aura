import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import {NavLink} from 'react-router-dom'

const Face = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCaptureadImage] = useState(null);

  const capturePhoto = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    setCaptureadImage(imgSrc);
  };

  const retakePhoto = () => {
    setCaptureadImage(null);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      {capturedImage ? (
        <>
          <img src={capturedImage} alt="Captured" />
          <div className="flex gap-6">
            <button
              type="submit"
              onClick={retakePhoto}
              className="bg-gray text-deepPurple p-2 font-semibold text-sm mt-10 rounded-lg px-6"
            >
              Retake Photo
            </button>
            <NavLink
            to="/hospitals"
              className="bg-deepPurple text-white p-2 font-semibold text-sm mt-10 rounded-lg px-6"
            >
              Continue
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={450}
          />
          <button
            type="submit"
            onClick={capturePhoto}
            className="bg-deepPurple text-white p-2 font-semibold text-sm mt-10 rounded-lg px-6"
          >
            Capture Photo
          </button>
        </>
      )}
    </div>
  );
};

export default Face;
