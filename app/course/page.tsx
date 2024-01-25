"use client";
import Searchbar from "@/components/profile/search";
import VideoPage from "@/components/profile/videopage";
import Accordions from "@/components/ui/accordion-component";
import React, { useState } from "react";

const Home = () => {
  const [selectedVideoName, setSelectedVideoName] = useState<string | null>(
    null
  );

  const [name, setName] = useState<string | null>(null);

  const showAlert = (name: string, url: string) => {
    setSelectedVideoName(name);
    setName(url);
  };

  return (
    <div className="container grid grid-cols-3 mt-5 gap-4">
      <VideoPage selectedVideoName={selectedVideoName} name={name} />
      <div>
        <p className="font-semibold">Course Content</p>
        <Searchbar />
        <Accordions showAlert={showAlert} />
      </div>
    </div>
  );
};

export default Home;
