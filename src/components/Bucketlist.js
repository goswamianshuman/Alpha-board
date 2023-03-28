import React from "react";
import { EllipsisVerticalIcon as Menu } from "@heroicons/react/24/solid";
import Card from "./Card";
import AlphaActionButton from "./AlphaActionButton";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Bucketlist = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className="bg-[whitesmoke] min-w-[200px] max-w-[300px] rounded-sm shadow-black/60 h-max"
        >
          <Droppable droppableId={String(listID)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <div className="flex items-center justify-between py-2 px-3 border-b-2">
                  <h1 className="uppercase font-semibold text-black/80">
                    {title}
                  </h1>
                  <Menu role={"button"} className="h-7 w-7" />
                </div>

                {/* cards */}
                <div>
                  {cards.map((data, index) => (
                    <Card
                      id={data.id}
                      key={data.id}
                      index={index}
                      card_name={data.title}
                      video_url={data.video_url}
                    />
                  ))}
                  <AlphaActionButton listID={listID} />
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Bucketlist;
