"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { LucidePlaySquare } from "lucide-react";

interface Props {
  content?: any;
  showAlert: (url: any, name: any) => void;
}

const Accordions: React.FC<Props> = ({ showAlert }) => {
  const items = [
    { id: 1, name: "item1", title: "Welcome" },
    { id: 2, name: "item2", title: "course module" },
    { id: 3, name: "item3", title: "notice" },
    { id: 4, name: "item4", title: "final" },
  ];

  const videocontent = [
    {
      id: 1,
      video_id: 1,
      name: "Introduction",
      time: "1min",
      url: "EBmvn5Wgr7E",
    },
    {
      id: 2,
      video_id: 1,
      name: "Demovideo1",
      time: "1min",
      url: "a9H_cn0mnhc",
    },
    {
      id: 3,
      video_id: 1,
      name: "Demo video title for web development",
      time: "1min",
      url: "UlacMvx_VYk",
    },
  ];
  return (
    <Accordion type="single" collapsible className="w-full">
      {items?.map((data, index) => (
        // eslint-disable-next-line react/jsx-key
        <AccordionItem value={data.name} className="shadow-md p-2 mt-2">
          <React.Fragment key={index}>
            <AccordionTrigger>
              <div>{data.title}</div>
            </AccordionTrigger>

            {videocontent
              .filter((videoData) => videoData.video_id === data.id)
              .map((data, index) => (
                // eslint-disable-next-line react/jsx-key
                <Link href={"/course"}>
                  <AccordionContent
                    className="flex justify-between"
                    onClick={() => showAlert(data.url, data.name)}
                  >
                    <div className="flex space-x-2">
                      <span><LucidePlaySquare /></span>
                      <span>{data.name}</span>
                    </div>
                    <span>{data.time}</span>
                  </AccordionContent>
                </Link>
              ))}
          </React.Fragment>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Accordions;
