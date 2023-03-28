import { PlusIcon, XMarkIcon as Cross } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addbucketlist, addcard } from "../redux/action";

function AlphaActionButton(props) {
  const { lists, listID } = props;
  const [click, setClick] = useState(false);
  const [bucketname, setBucketName] = useState("");
  const [cardname, setCardName] = useState("");
  const [cardVideoUrl, setCardVideoUrl] = useState("");

  const dispatch = useDispatch();

  const handleAddBucketList = (text) => {
    if (text) {
      dispatch(addbucketlist(text));
    }
    return;
  };

  const handleAddCards = (cardname, cardVideoUrl) => {
    if (cardname && cardVideoUrl) {
      dispatch(addcard(listID, cardname, cardVideoUrl));
    }
  };

  const buttonText = lists ? "Add new bucket" : "add new card";

  if (click === true) {
    if (lists) {
      return (
        <div className="bg-white pt-2 flex flex-col items-center w-full max-w-[300px] justify-center">
          <input
            type={"text"}
            className="w-[90%] px-3 py-3 border outline-blue-500 transition-all ease-in-out duration-300"
            placeholder="Enter Bucket Name"
            value={bucketname}
            onChange={(e) => setBucketName(e.target.value)}
          />
          <div className="flex items-center justify-between bg-slate-200 h-max w-full py-3 px-5 gap-2 mt-2 ">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAddBucketList(bucketname);
                setBucketName("");
              }}
              className="bg-blue-500 py-3 px-4 text-white uppercase tracking-wider text-[12px] rounded-sm hover:bg-blue-600 active:bg-blue-400 transition-all ease-in-out duration-300"
            >
              add bucket
            </button>

            <Cross
              role={"button"}
              onClick={(e) => {
                e.preventDefault();
                setClick(false);
              }}
              className="h-7 w-7 "
            />
          </div>
        </div>
      );
    } else {
      return (
        <form className="bg-white flex flex-col items-center w-full max-w-[300px] justify-center">
          <input
            type={"text"}
            className="w-[90%] px-3 py-3 border outline-blue-500 transition-all ease-in-out duration-300"
            placeholder="Enter Card Name"
            value={cardname}
            onChange={(e) => setCardName(e.target.value)}
          />
          <input
            type={"text"}
            className="w-[90%] px-3 py-3 mt-2 border outline-blue-500 transition-all ease-in-out duration-300"
            placeholder="Enter Video Url"
            value={cardVideoUrl}
            onChange={(e) => setCardVideoUrl(e.target.value)}
          />
          <div className="flex items-center justify-between bg-slate-200 h-max w-full py-3 px-5 gap-2 mt-2 ">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAddCards(cardname, cardVideoUrl);
                setCardName("");
                setCardVideoUrl("");
              }}
              className="bg-blue-500 py-3 px-4 text-white uppercase tracking-wider text-[12px] rounded-sm hover:bg-blue-600 active:bg-blue-400 transition-all ease-in-out duration-300"
            >
              add card
            </button>

            <Cross
              role={"button"}
              onClick={(e) => {
                e.preventDefault();
                setClick(false);
              }}
              className="h-7 w-7 "
            />
          </div>
        </form>
      );
    }
  }

  return (
    <div
      onClick={() => {
        setClick(true);
      }}
      role={"button"}
      className="flex items-center h-max min-w-[200px] w-full max-w-[300px] py-3 px-2 justify-start gap-2  bg-gray-200/80 text-slate-600 capitalize hover:bg-white active:bg-gray-300 transition-all ease-out duration-300"
    >
      <PlusIcon className="h-7 w-7 " /> {buttonText}
    </div>
  );
}

export default connect()(AlphaActionButton);
