import React from "react";
import Image from "next/image";

function eventTop() {
  return (
    <div className="h-[90vh]">
      <div className="flex justify-center items-center w-[100%] gap-10">
        <div className="flex flex-col gap-4  h-[450px]">
          <Image
            src="/logos/7.jpg"
            alt="bgimage"
            width={270}
            height={270}
          ></Image>
          <div className="flex flex-col bg-[#45474994] bg-opacity-[20%]  h-12 rounded-md">
            <div className="text-white text-sm pt-0.7 pl-[25%]">Theme</div>
            <h4 className="text-white font-semibold text-lg pl-[25%]">
              {" "}
              Minimal{" "}
            </h4>
          </div>
        </div>
        <div className=" relative top-12 bg-opacity-75 w-[43%] h-[75vh] rounded-lg">
          <div className="flex flex-row gap-[50%]">
            <div className=" bg-[#45474994] bg-opacity-[20%] h-7 w-[35%] rounded-md p-0.5">
              <div className="flex justify-center text-white text-sm">
                Personal Calendar
              </div>
            </div>
            <div className=" bg-[#45474994] bg-opacity-[20%] h-7 w-[15%] rounded-md p-0.5">
              <div className="flex justify-center text-white text-sm">
                Public
              </div>
            </div>
          </div>
          <input
            className=" mt-2 w-[60%] h-[10%]"
            type="text"
            placeholder="Event Name"
          ></input>
          <div className="flex flex-row h-[13%] w-[100%] rounded-md gap-3.5 mt-2.5">
            <div className="flex flex-col bg-[#45474994] h-[100%] w-[77%] rounded-lg">
              <div className="flex flex-row gap-[40%]">
                <div className="h-[47%] w-[5%] p-1 pl-12 mt-1">Start</div>
                <div className="flex flex-row h-[96%] w-[80%] gap-1">
                <div className="bg-[#95959594] h-[100%] w-[70%] p-1 pl-2 rounded"> Thu, 28 Mar </div>
                <div className="bg-[#95959594] h-[100%] w-[30%] p-1 pl-2 rounded"> 22:30 </div>
                </div>
              </div>
              <div className="flex flex-row gap-[40%]">
                <div className="h-[47%] w-[5%] p-1 pl-12">End</div>
                <div className="flex flex-row  h-[96%] w-[80%] mt-0.5 gap-1">
                <div className="bg-[#95959594] h-[100%] w-[70%] p-1 pl-2 rounded"> Thu, 28 Mar </div>
                <div className="bg-[#95959594] h-[100%] w-[30%] p-1 pl-2 rounded"> 22:30 </div>
                </div>
              </div>
            </div>
            <div className="flex bg-[#45474994] h-[100%] w-[21%] rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default eventTop;
