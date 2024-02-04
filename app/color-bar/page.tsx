import SpanText from "@/components/ui/spantext";
import React from "react";

const ColorBar = () => {
  const data = [
    { label: "Name :", value: "Rakib" },
    { label: "Profession :", value: "WebDeloper" },
    { label: "Location :", value: "Dhaka" },
    { label: "Contact :", value: "01775566772" },
    { label: "About :", value: "" },
  ];

  const numberOfRows = data.length;
  let nonEmptyRows = 0;

  for (const item of data) {
    if (item.value !== "") {
      nonEmptyRows++;
    }
  }

  const percentage = (nonEmptyRows / numberOfRows) * 100;

  return (
    <div className="container dark:bg-slate-500">
      <p className="font-semibold mt-3">
        its a color bar it will automatically update color if its data fill
        otherwise it will remain gray color can be change as you want its
        responsive you can use anywhere.
        <br />
        <span>Total data filled according to row</span>
        <br />
        <span>{percentage} %</span>
      </p>
      <div className="flex gap-1 mb-3 mt-5">
        {data
          .filter((item) => item.value !== "")
          .map((item, index) => (
            <div
              key={index}
              className="w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full h-2.5 dark:bg-gray-700"
            ></div>
          ))}
        {data
          .filter((item) => item.value == "")
          .map((item, index) => (
            <div
              key={index}
              className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
            ></div>
          ))}
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <SpanText
              text1={item.label}
              text2={
                <span style={{ color: item.value == "" ? "red" : "black" }}>
                  {item.value == "" ? "No value provided" : item.value}
                </span>
              }
              text3={""}
              text4={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorBar;
