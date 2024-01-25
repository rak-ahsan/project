import React from "react";

interface Props {
  selectedVideoName: any;
  name: any;
}

const VideoPage: React.FC<Props> = ({ selectedVideoName,name }) => {
  return (
    <div className="col-span-2 h-48">
      <div className="mt3 mb-3 shadow-xl p-3 rounded-xl">
        <p>ASO and Mobile App Marketing</p>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 mt-2 w-48"></div>
        </div>
      </div>
      <div className="mb-5">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${selectedVideoName}`}
          title="It really goes with your mood | Night Vibes Mashup  | Feel the Beat | New Mashup 2023"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <span className="mt-5"> {name}</span>
    </div>
  );
};

export default VideoPage;
