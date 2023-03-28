/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { Draggable } from "react-beautiful-dnd";

function Card({ id, card_name, video_url, index }) {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white w-full my-4 max-w-[90%] mx-auto shadow-md shadow-black/40"
        >
          <iframe
            src={video_url}
            allowFullScreen
            className="w-full max-h-[200px] "
          />
          <div className="flex items-center bg-gray-400 py-2 justify-between px-5">
            <p className="text-slate-800">{card_name}</p>
            <EllipsisHorizontalIcon role={"button"} className="h-5 w-5" />
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
