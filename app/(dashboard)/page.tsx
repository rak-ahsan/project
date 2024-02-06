"use client";
import Modal from "@/components/ui/modal";
import { MessageSquareCode, Star, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [extentDiv, setextentDiv] = useState<boolean | null>(false);
  const [popup, SetPopUp] = useState<boolean>(false);

  const extentDivclick = () => {
    setextentDiv(!extentDiv);
  };
  useEffect(() => {
    const isPopupShown = localStorage.getItem("isPopupShown");
    if (!isPopupShown) {
      SetPopUp(true);
    }
  }, []);

  return (
    <div className="container grid grid-cols-3 mt-5 gap-4">
      <div className="col-span-2">
        <Image src={"/OIP.jpeg"} alt={""} width={1000} height={1000} />
      </div>
      <div>
        <div className="shadow-xl rounded-xl p-5">
          <div className="flex justify-between items-center">
            <span className="text-xl semi-bold">Instructor</span>
            <span className="bg-green-600 p-3 rounded-full">50</span>
          </div>
          <div>
            <p className="text-blue">Rakib Ahsan</p>
            <span>this is sub title</span>
          </div>
          <div className="profile-details flex space-x-2 p-3 mt-4">
            <Image
              src={"/demo.jpeg"}
              alt={""}
              width={150}
              height={150}
              className="rounded-full"
            />
            <div className="details">
              <div className="flex space-x-2">
                <Star />
                <span>4.7 star Rating</span>
              </div>
              <div className="flex space-x-2">
                <UserRound />
                <span>1500 students</span>
              </div>
              <div className="flex space-x-2">
                <Star />
                <span>4.7 star Rating</span>
              </div>
              <div className="flex space-x-2">
                <MessageSquareCode />
                <span>50000 review</span>
              </div>
            </div>
          </div>
          <div>
            <p
              className={`${
                extentDiv
                  ? "h-20 overflow-hidden opacity-1 transition-all duration-700 ease-in-out"
                  : "h-48 opacity-100 transition-all duration-700 ease-in-out"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptatum blanditiis porro at aliquam unde nihil facilis ipsa,
              qui fuga? Laborum excepturi et nobis tempore, soluta quod
              molestiae praesentium quidem. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <button className="text-blue-400" onClick={extentDivclick}>
              {extentDiv ? "show more" : "show less"}
            </button>
          </div>
        </div>
        <Link href="/course">
          <button className="bg-blue-600 text-white p-3 w-full rounded-full mt-5">
            Go to Dashboard
          </button>
        </Link>
        <Modal open={popup} SetPopUp={SetPopUp} />
      </div>
    </div>
  );
};

export default Dashboard;
