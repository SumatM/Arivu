import React, { useState } from "react";
import { BsStopwatchFill } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleAbsolute = ({ props }) => {
  const [page, setPage] = useState("left");
  const navigate = useNavigate();

  const { onOpen, onClose } = props;

  function handlePayment() {
    onOpen();
  }

  return (
    <div className="xl:border text-white  xl:text-black xl:border-white xl:max-w-[280px] xl:shadow-md shadow-neutral-800  xl:bg-white">
      <div>
        <div>
          <iframe
            className="w-full xl:h-[200px] h-[300px]"
            width=""
            height=""
            src="https://www.youtube.com/embed/MrLnibFTtbA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          ></iframe>
        </div>
        <div className="flex justify-around font-semibold text-sm h-[48px] items-center ">
          <div
            onClick={() => setPage("left")}
            className={`cursor-pointer text-center w-full border-b-[1px] ${
              page == "left"
                ? "border-b-3 border-black text-white xl:text-black"
                : undefined
            }`}
          >
            Personal
          </div>
          <div
            onClick={() => setPage("right")}
            className={`cursor-pointer w-full text-center border-b-[1px] items-center ${
              page == "right"
                ? "border-b-3 text-white xl:text-black border-black "
                : undefined
            }`}
          >
            Teams
          </div>
        </div>
      </div>
      <div className="px-[24px]">
        <div>
          <h3 className="font-serif font-bold max-w-[250px] py-1 ">
            Subscribe to Udemy's top courses
          </h3>
          <p className="text-[10px]">
            Get this course, plus 8,000+ of our top-rated courses with Personal
            Plan{" "}
            <a href="http://" className="underline text-fuchsia-800 font-bold">
              Learn more
            </a>
          </p>
          <button className="bg-fuchsia-700  w-full py-[7px] font-semibold my-2">
            Start subscription
          </button>
          <div className="w-full justify-center items-center flex flex-col space-y-[8px]">
            <p className="text-[9px]">Starting at ₹750 per month</p>
            <p className="text-[9px]"> Cancel anytime</p>
          </div>
          <div className="flex justify-center items-center ">
            <div className="h-[1px] bg-slate-200 w-full"></div>
            <p className="text-[10px] mx-1 my-3">or</p>
            <div className="h-[1px] bg-slate-200 w-full"></div>
          </div>
        </div>

        <div className="flex space-x-2 place-items-baseline">
          <p className="font-bold text-sm">₹649</p>
          <p className="line-through text-xs ">₹3299</p>
          <p className="text-xs">80% off</p>
        </div>
        <div className="flex text-red-600 items-baseline space-x-1 my-2">
          {/* <BsStopwatchFill/> */}
          <p className="text-xs font-bold">52 minutes </p>
          <p className="text-xs">left at this price!</p>
        </div>
        <button
          onClick={handlePayment}
          className=" border-2 w-full py-[7px] text-sm font-bold"
        >
          Buy this course
        </button>

        <div className="items-center text-[10px] space-y-1 w-full justify-center flex flex-col py-2">
          <p>30-Day Money-Back Guarantee</p>
          <p>Full Lifetime Access</p>
        </div>

        <div className="underline flex text-[11px] font-bold justify-around underline-offset-2 pb-7">
          <div>
            <a href="http://">share</a>
          </div>
          <div>
            <a href="">Gift this course</a>
          </div>
          <div>
            <a href="">ApplyCoupan</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAbsolute;
