import { ALPHACONSTANTS } from "../constants";

export const addbucketlist = (title) => {
  return {
    type: ALPHACONSTANTS.ADD_LISTS,
    payload: title,
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIdIndexStart,
  droppableIdIndexEnd,
  draggableId,
  type
) => {
  return {
    type: ALPHACONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIdIndexStart,
      droppableIdIndexEnd,
      draggableId,
      type,
    },
  };
};
